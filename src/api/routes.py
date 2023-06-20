"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from datetime import timedelta
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import (
    db,
    User,
    TokenBlockedList,
    Restaurant,
    Pedidos,
    Platos,
    Restaurantplatos,
    Suscriptions,
)
from api.utils import generate_sitemap, APIException
from flask_bcrypt import Bcrypt
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    jwt_required,
    get_jwt_identity,
    get_jwt,
    get_jti,
)
import os,json, tempfile
import openai
from firebase_admin import storage
from api.sendmail import sendMail, recoveryPasswordTemplate
openai.api_key = os.getenv("OPENAI_API_KEY")
api = Blueprint("api", __name__)
app = Flask(__name__)
bcrypt = Bcrypt(app)
@api.route("/login", methods=["POST"])
def user_login():
    user_email = request.json.get("email")
    user_password = request.json.get("password")
    # buscar usuario por correo
    user = User.query.filter_by(email=user_email).first()
    if user is None:
        return jsonify({"message": "user not found"}), 401
    # Verificar la clave
    if not bcrypt.check_password_hash(user.password, user_password):
        return jsonify({"message": "Wrong Password"}), 401
    # Generar el token
    access_token = create_access_token(identity=user.id)
    access_jti = get_jti(access_token)
    refresh_token = create_refresh_token(
        identity=user.id, additional_claims={"accessToken": access_jti}
    )
    # Retornar el token
    return jsonify({"accessToken": access_token, "refreshToken": refresh_token, "userInfo":user.serialize()})
# Refrescar el token
@api.route("/refresh", methods=["POST"])
@jwt_required(refresh=True)
def user_refresh():
    # Identificadores de tokens viejos
    jti_refresh = get_jwt()["jti"]
    jti_access = get_jwt()["accessToken"]
    # Bloquear los tokens viejos
    accessRevoked = TokenBlockedList(jti=jti_access)
    refreshRevoked = TokenBlockedList(jti=jti_refresh)
    db.session.add(accessRevoked)
    db.session.add(refreshRevoked)
    db.session.commit()
    # Generar nuevos tokens
    user_id = get_jwt_identity()
    access_token = create_access_token(identity=user_id)
    refresh_token = create_refresh_token(
        identity=user_id, additional_claims={"accessToken": access_jti}
    )
    # Retornar el token
    return jsonify({"accessToken": access_token})
@api.route("/logout", methods=["POST"])
@jwt_required()
def user_logout():
    jwt = get_jwt()["jti"]
    tokenBlocked = TokenBlockedList(jti=jwt)
    db.session.add(tokenBlocked)
    db.session.commit()
    return jsonify({"msg": "Token revoked"})
# Preguntarle a Arnaldo
@api.route("/register", methods=["POST"])
def user_create():
    data = request.get_json()
    print(data)
    existing_user = User.query.filter_by(email=data.get("email")).first()
    if existing_user is not None:
        return jsonify({"msg": "Email already registered"}), 400
    secure_password = bcrypt.generate_password_hash(
        data.get("password"), rounds=None
    ).decode("utf-8")
    print(existing_user)
    new_user = User(
        email=data.get("email"),
        password=secure_password,
        first_name=data.get("first_name"),
        last_name=data.get("last_name"),
        birthday=data.get("birthday"),
        gender=data.get("gender"),
        phone=data.get("phone"),
        address=data.get("address"),
        address_details=data.get("address_details"),
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 201
@api.route("/changepassword", methods=["POST"])
@jwt_required()
def change_password():
    new_password = request.json.get("password")
    user_id = get_jwt_identity()
    secure_password = bcrypt.generate_password_hash(new_password, rounds=None).decode(
        "utf-8"
    )
    user = User.query.get(user_id)
    user.password = secure_password
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "Clave actualizada"})
@api.route("/recoverypassword", methods=["POST"])
def recovery_password():
    user_email = request.json.get("email")
    user = User.query.filter_by(email=user_email).first()
    if user is None:
        return jsonify({"message": "user not found"}), 401
    # Generar el token temporal para el cmbio de clave
    access_token = create_access_token(
        identity=user.id, additional_claims={"type": "password"}
    )
    # Enviar el token via email para el cambio de clave
    recoveryPasswordTemplate(access_token, user_email)
    return jsonify({"msg": "Correo enviado"})
@api.route("/helloprotected", methods=["GET"])
@jwt_required()
def hello_protected_get():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return jsonify({"user_id": user.serialize(), "message": "Hello protected route"})
@api.route("/restaurant", methods=["GET"])
def get_restaurants():
    restaurants = Restaurant(
        name="McDonalds", platos="Hamburguesa", ubicaciones="Colombia"
    )
    db.session.add(restaurants)
    restaurants1 = Restaurant(
        name="Burger King", platos="Hamburguesa", ubicaciones="Colombia"
    )
    db.session.add(restaurants1)
    restaurants2 = Restaurant(
        name="Wendys", platos="Hamburguesa", ubicaciones="Colombia"
    )
    db.session.add(restaurants2)
    db.session.commit()
    return "ok"
@api.route("/hello", methods=["POST", "GET"])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200
# se crea nuevo restaurante
@api.route("/restaurant", methods=["POST"])
def register_restaurant():
    name = request.json.get("name")
    url = request.json.get("url")
    ubicaciones = request.json.get("ubicaciones")
    new_restaurant = Restaurant(name=name, url=url, ubicaciones=ubicaciones)
    db.session.add(new_restaurant)
    db.session.commit()
    response = {"msg": "Restaurante creado exitosamente"}
    return jsonify(response), 200
# Se obtienen los restaurantes
@api.route("/restaurant", methods=["GET"])
def get_restaurant():
    restaurant = Restaurant.query.all()
    results = list(map(lambda x: x.serialize(), restaurant))
    # print (results)
    return jsonify(results), 200
# se crea nuevo plato
@api.route("/platos", methods=["POST"])
def register_platos():
    name = request.json.get("name")
    url = request.json.get("url")
    price = request.json.get("price")
    description = request.json.get("description")
    new_platos = Platos(name=name, url=url, price=price, description=description)
    db.session.add(new_platos)
    db.session.commit()
    response = {"msg": "Plato creado exitosamente"}
    return jsonify(response), 200
# Se obtienen los platos
@api.route("/platos", methods=["GET"])
def get_platos():
    platos = Platos.query.all()
    results = list(map(lambda x: x.serialize(), platos))
    # print (results)
    return jsonify(results), 200
# Se obtienen los pedidos
@api.route("/pedidos", methods=["GET"])
def get_pedidos():
    pedidos = Restaurant.query.all()
    results = list(map(lambda x: x.serialize(), pedidos))
    # print (results)
    return jsonify(results), 200
# se crean los pedidos
@api.route("/pedidos", methods=["POST"])
def register_pedidos():
    id = request.json.get("id")
    restaurant = request.json.get("restaurant_id")
    usuario = request.json.get("usuario_id")
    platos = request.json.get("platos_id")
    new_pedidos = Pedidos(
        name=id, restaurant=restaurant, usuario=usuario, platos=platos
    )
    db.session.add(new_pedidos)
    db.session.commit()
    response = {"msg": "Pedido creado exitosamente"}
    return jsonify(response), 200
# Alta de los platos en los restaurants
@api.route("/restaurantsplatos", methods=["POST"])
def restaurantsplatos():
    body = json.loads(request.data)
    new_rp = Restaurantplatos(
        restaurant_id=body["restaurant_id"], platos_id=body["platos_id"]
    )
    db.session.add(new_rp)
    db.session.commit()
    return jsonify("Creado con exito"), 200
# Muestra todos la tabla aux entre platos y restaurants
@api.route("/restaurantsplatos", methods=["GET"])
def get_restaurantsplatos():
    rp = Restaurantplatos.query.all()
    results = list(map(lambda x: x.serialize(), rp))
    # print (results)
    return jsonify(results), 200
# creacion de foto
@api.route("profilepic", methods=["POST"])
@jwt_required()
def user_profile_pic():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    # Recibir el archivo
    file = request.files["profilePic"]
    # Extraer la extension del archivo
    extension = file.filename.split(".")[1]
    # Guardar en un archivo temporal
    temp = tempfile.NamedTemporaryFile(delete=False)
    file.save(temp.name)
    # cargar el archivo a Firebase
    bucket = storage.bucket(name="imagenes-4geeks.appspot.com")
    filename = "profilePics/" + str(user_id) + "." + extension
    resource = bucket.blob(filename)
    resource.upload_from_filename(temp.name, content_type="image/" + extension)
    # agregar la imagen de perfil al usuario
    user.profile_pic = filename
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "Profile pic updated", "pictureUrl": user.get_profile_pic()})
@api.route('/createDietChatGPT', methods=['GET','POST'])
def generateChatResponse():
    prompt = request.json.get("prompt")
    messages = [
        {"role": "system", "content": "genera un esquema de alimentacion semanal, dividido por días, desayuno, almuerzo, y comida. Necesito que asistas a un cliente que te respondera en tu siguiente interacción y te pedira un consejo de dieta. Ten su consideración en cuenta e incluye pollo frito, pizza, lasagna, gnochi, ramn, arroz japones, sushi y comida rápida como hamburguesa o papas. da una explicación breve diaria para que el usuario pueda saber que comer cada día en desayuno, almuerzo y cena, teniendo una dieta balanceada y saludable"},
        {"role": "user", "content": prompt}
    ]
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    try:
        answer = response.choices[0].message.content
    except:
        answer = "Oops you beat the AI, try a different question, if the problem persists, come back later."
    return answer
if __name__ == "__main__":
    app.run(debug=True)