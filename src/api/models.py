from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from firebase_admin import storage
import datetime
db = SQLAlchemy()
class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    #is_active = db.Column(db.Boolean(), nullable=False)
    first_name = db.Column(db.String(120), nullable=False)
    last_name = db.Column(db.String(120), nullable=False)
    birthday = db.Column(db.String(120), nullable=False)
    gender = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    address = db.Column(db.String(300), unique=False, nullable=False)
    address_details = db.Column(db.String(300), unique=False, nullable=False)
    # suscription = db.Column(db.Boolean(), nullable=False)
    Pedidos = relationship("Pedidos", back_populates="user")
    profile_pic = db.Column(db.String(500))
    def __repr__(self):
        return f"<User {self.id}>"
    def get_profile_pic(self):
        bucket=storage.bucket(name="imagenes-4geeks.appspot.com")
        resource=bucket.blob(self.profile_pic)
        return resource.generate_signed_url(version="v4", expiration =datetime.timedelta(minutes=15), method="GET")
    def serialize(self):
        bucket = storage.bucket(name="imagenes-4geeks.appspot.com")
        if self.profile_pic is not None:
            resource = bucket.blob(self.profile_pic)
            picture_url = resource.generate_signed_url(version="v4", expiration=datetime.timedelta(minutes=15), method="GET")
        else:
            picture_url = None
        return {
            "id": self.id,
            "email": self.email,
            #"is_active": self.is_active,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "birthday": self.birthday,
            "gender": self.gender,
            "phone": self.phone,
            #"suscription": self.suscription,
            "address": self.address,
            "address_details": self.address_details,
            "profile_pic": picture_url
        }
class Restaurant(db.Model):
    __tablename__ = "restaurant"
    id = db.Column(db.Integer, primary_key=True)
    # user_id=db.Column(db.Integer, db.Foreignkey = ("User.id"))
    name = db.Column(db.String(120), unique=True, nullable=False)
    url = db.Column(db.String(500), unique=True, nullable=False)
    ubicaciones = db.Column(db.String(80), unique=False, nullable=False)
    restaurantplatos = db.relationship("Restaurantplatos")
    # platos=db.Column(db.Integer, db.Foreignkey ("Platos.id"))
    pedido = db.relationship("Pedidos")
    # detalles_de_pedido=db.relationship("DetalleDePedidos")
    def __repr__(self):
        return f"<Restaurant {self.name}>"
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "url": self.url,
            "ubicaciones": self.ubicaciones,
        }
class Platos(db.Model):
    __tablename__ = "platos"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(500), unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    url = db.Column(db.String(500), unique=True, nullable=False)
    # restaurant_id = db.Column(db.Integer, db.ForeignKey("restaurant.id"))
    restaurantplatos = db.relationship("Restaurantplatos")
    # detalles_de_pedido=db.relationship("DetalleDePedidos")
    def __repr__(self):
        return f"<Platos {self.name}>"
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "description": self.description,
            "url": self.url
            # "platos":self.description,
            # "restaurant_id":self.restaurant_id
        }
class Pedidos(db.Model):
    __tablename__ = "pedidos"
    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, ForeignKey("restaurant.id"))
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship("User", back_populates="Pedidos")
    platos_id = db.Column(db.Integer, ForeignKey("platos.id"))
    # platos=db.relationship(Platos)
    # usuario=relationship("User")
    def __repr__(self):
        return f"<Pedidos {self.id}>"
    def serialize(self):
        return {
            "id": self.id,
            "restaurant_id": self.restaurant_id,
            "usuario_id": self.usuario_id,
            "platos_id": self.platos_id,
            # "platos": self.platos
        }
class Restaurantplatos(db.Model):
    __tablename__ = "restaurantplatos"
    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, ForeignKey("restaurant.id"))
    # restaurant=db.relationship(Restaurant)
    platos_id = db.Column(db.Integer, ForeignKey("platos.id"))
    # platos=db.relationship(Platos)
    # usuario=relationship("User")
    def __repr__(self):
        return f"<Restaurantplatos {self.id}>"
    def serialize(self):
        return {
            "id": self.id,
            "restaurant_id": self.restaurant_id,
            # "usuario_id": self.usuario_id,
            "platos_id": self.platos_id,
            # "platos": self.platos
        }
class Suscriptions(db.Model):
    __tablename__ = "suscriptions"
    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, ForeignKey("restaurant.id"))
    # restaurant=db.relationship(Restaurant)
    user_id = db.Column(db.Integer, ForeignKey("user.id"))
    # platos=db.relationship(Platos)
    # usuario=relationship("User")
    def __repr__(self):
        return f"<Suscriptions {self.id}>"
    def serialize(self):
        return {
            "id": self.id,
            "restaurant_id": self.restaurant_id,
            # "usuario_id": self.usuario_id,
            "user_id": self.user_id,
            # "platos": self.platos
        }
class DetalleDePedidos(db.Model):
    __tablename__="detalleDePedidos"
    id = db.Column(db.Integer, primary_key=True)
    platos_id=db.Column(db.Integer, ForeignKey("platos.id"))
    platos=db.relationship(Platos)
    pedido_id = db.Column(db.Integer, ForeignKey('pedidos.id'))
    pedido=relationship("Pedidos")
    restaurant_id=db.Column(db.Integer, ForeignKey("restaurant.id"))
    restaurant=db.relationship("Restaurant")
    pedidos = db.relationship("Pedidos", backref="detalle_pedidos")
    def __repr__(self):
        return f'< DetalleDePedidos {self.id}>'
    def serialize(self):
        return {
            "id":self.id,
            "restaurant_id":self.restaurant_id,
            "platos_id": self.platos_id,
            "restaurant":self.restaurant,
            "platos": self.platos
        }
class TokenBlockedList(db.Model):
    __tablename__="token_blocked_list"
    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(40), nullable=False)
    def __repr__(self):
        return f"< TokenBlockedList {self.id}>"
    def serialize(self):
        return {
            "id": self.id,
            "jti": self.jti,
        }