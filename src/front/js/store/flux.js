import React, { useState } from "react";
const getState = ({ getStore, getActions, setStore }) => {


	return {

		store: {
			message: [
				"Parece que funciona...  (?) valor anterior era null y no referenciaba al backend"
			],
			pictureUrl: null,
			restaurantes: [
				{
					name: "Wok",
					plates: [
						{
							plateName: "Ramen",
							price: "40000",
							description: "¡Descubre el sabor auténtico del Oriente en cada sorbo! Nuestro exquisito plato de ramen te transportará a las calles bulliciosas de Japón con su caldo rico y reconfortante. Sus fideos al dente se entrelazan con delicadeza en un mar de sabores, acompañados de trozos tiernos de cerdo desmenuzado, verduras frescas y un huevo suave y seductor.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/2e56975e-3d9a-4cd7-ba95-362ae2e81927/DreamShaper_v6_ramen_black_table_elegant_delicious_steam_chops_0.jpg",
							restaurantName: "Wok"
						},
						{
							plateName: "Onigiri",
							price: "20000",
							description: "¡Descubre el bocado perfecto de Japón en un solo bocado! Nuestros exquisitos Onigiri son pequeñas obras maestras de arroz rellenas de sabores irresistibles. Con una textura suave y pegajosa, cada onigiri es cuidadosamente moldeado a mano para garantizar una presentación impecable. ",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/5935ad7f-cc73-44bd-9b0b-0d5f96d38395/DreamShaper_v6_onigiri_black_table_elegant_delicious_steam_cho_1.jpg",
							restaurantName: "Wok"
						},
						{
							plateName: "Arroz",
							price: "4000",
							description: "Nuestro arroz japonés es preparado con maestría por nuestros chefs expertos, quienes seleccionan cuidadosamente los ingredientes más frescos y auténticos para ofrecerte una experiencia culinaria única. Cada grano de arroz, perfectamente cocido y sazonado con una combinación de especias tradicionales, se transforma en una explosión de sabor en tu paladar.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/2d4d91ae-f36a-451a-9e9a-16f3fd7e95ae/DreamShaper_v6_japanese_rice_in_a_black_bowl_black_table_elega_0.jpg",
							restaurantName: "Wok"
						},
						{
							plateName: "Sushi",
							price: "20000",
							description: "¡Descubre nuestro exquisito plato de sushi, una explosión de sabores en cada bocado! Nuestro sushi fresco y artísticamente presentado combina la suavidad del arroz con la frescura del pescado crudo y una cuidadosa selección de ingredientes. Cada pieza es una obra maestra culinaria, elaborada con maestría por nuestros expertos sushi chefs. ",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/366b9e90-63c9-429d-a771-e81025c2bce0/DreamShaper_v6_japanese_rice_with_sushi_black_table_elegant_de_0.jpg",
							restaurantName: "Wok"
						}
					],
					locations: [
						"Colombia",
						"Costa"
					],
					image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/65d1d1eb-9819-4610-9871-6d8e0ff7a206/DreamShaper_v6_wok_ramen_logo_on_top_right_elegant_marketing_0.jpg",
					subscription: [
						{
							SubscriptionName: "Yamete Kudasai",
							description: "¡Yamete Kudasai: Una Experiencia Gastronómica Japonesa Cada Día de la Semana! Delicioso Ramen los Lunes, Sushi los Martes, Arroz Japonés los Miércoles, Bento los Jueves, ¡Y de Nuevo Ramen los Viernes! ¡Disfruta de Sushi los Sábados y Domingos!",
							price: "20000",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/65d1d1eb-9819-4610-9871-6d8e0ff7a206/DreamShaper_v6_wok_ramen_logo_on_top_right_elegant_marketing_0.jpg",
						}
					]
				},
				{
					name: "McDonalds",
					plates: [
						{
							plateName: "Hamburguesa",
							price: "15000",
							description: "Prueba nuestra irresistible hamburguesa: un jugoso filete de carne cocinado a la perfección, envuelto en un pan suave y esponjoso. Acompañado de crujientes vegetales frescos y una explosión de sabores gracias a nuestra especial salsa secreta. ¡Una experiencia gourmet en cada mordisco!",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f2d4bab1-66ef-4549-b9db-3edb375a5a92/DreamShaper_v5_Delicious_hamburger_juicy_patty_steam_dark_eleg_0.jpg",
							restaurantName: "McDonalds"
						},
						{
							plateName: "Hamburguesa con queso",
							price: "19000",
							description: "¡Prepárate para una explosión de sabor con nuestra hamburguesa con queso! Imagina un filete jugoso y sazonado a la perfección, acompañado de una suave fusión de quesos que se derriten en tu boca. El pan brioche tostado añade un toque de crujiente y la frescura de los vegetales complementa esta obra maestra. ¿Estás listo para una experiencia de hamburguesa irresistible?",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/bd5b796e-cc5a-4968-a432-eff627d518cd/DreamShaper_v5_Delicious_hamburger_with_a_lot_of_cheese_inside_1.jpg",
							restaurantName: "McDonalds"
						},
						{
							plateName: "Doble libra",
							price: "20000",
							description: "¡Déjate seducir por nuestra increíble hamburguesa doble libra! Dos jugosos filetes de carne perfectamente sazonados, colocados entre dos capas de pan brioche tostado. Una explosión de sabor y satisfacción en cada bocado. Acompañada de crujientes hojas de lechuga, rodajas de tomate maduro y nuestra irresistible salsa especial. ¡Una experiencia gourmet en tu paladar!",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f521b433-17a4-4ba2-bc63-4f3f84ef305d/DreamShaper_v5_Delicious_double_big_hamburger_juicy_patty_stea_0.jpg",
							restaurantName: "McDonalds"
						},
						{
							plateName: "Big Mac",
							price: "25000",
							description: "Imagina dos jugosas y sabrosas hamburguesas de carne 100% de res, perfectamente asadas y sazonadas, apiladas entre tres capas de panes suaves y esponjosos. En cada bocado, sentirás la deliciosa fusión de la carne, el queso cheddar fundido, los crujientes pepinillos, la cebolla fresca y nuestra inconfundible salsa secreta.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/ab3e02d0-42f2-4ddb-8476-29a888149470/DreamShaper_v5_Delicious_giant_hamburger_bacon_juicy_patty_ste_2.jpg",
							restaurantName: "McDonalds"
						}
					],
					locations: ["Colombia", "Costa"],
					image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f58af186-c80a-417f-af68-a5680f639561/DreamShaper_v6_McDonalds_food_hamburger_advertising_elegant_we_0.jpg",
					subscription: [
						{
							SubscriptionName: "Bien Librado",
							description: "Con Bien librado, tienes la opción de personalizar tu hamburguesa llamando a nuestro servicio al cliente. Si tienes algún antojo en particular o alguna restricción, estaremos encantados de adaptar tu hamburguesa a tus necesidades.",
							price: "20000",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/65d1d1eb-9819-4610-9871-6d8e0ff7a206/DreamShaper_v6_wok_ramen_logo_on_top_right_elegant_marketing_0.jpg",
						}
					]
				},
				{
					name: "Kukulkan",
					plates: [
						{
							plateName: "Pollo asado",
							price: "15000",
							description: "¡Descubre la perfección en cada bocado con nuestro pollo asado! Jugoso, tierno y lleno de sabor, este plato te transportará a un festín irresistible. Cada porción está cuidadosamente sazonada con una mezcla de especias secretas que realza su sabor natural y lo convierte en una verdadera delicia.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/43708d93-6def-4e1f-84ee-22732705ad87/DreamShaper_v5_fried_chicken_with_fries_and_coke_served_in_a_p_0.jpg",
							restaurantName: "Kukulkan"
						},
						{
							plateName: "Medio pollo asado",
							price: "8000",
							description: "Disfruta de nuestro medio pollo asado, una delicia jugosa y llena de sabor. Tierno y dorado en su exterior, cada bocado te transportará a un festival de sabores ahumados y especias exquisitas.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/e8f79622-0dbb-4844-9fe8-c5cc70d2b7dd/DreamShaper_v5_fried_chicken_served_in_a_plate_delicious_steam_3.jpg",
							restaurantName: "Kukulkan"
						},
						{
							plateName: "Cuarto de pollo asado",
							price: "6000",
							description: " Este suculento manjar te transportará a un festín de sabores irresistibles. Nuestro pollo, cuidadosamente sazonado con hierbas y especias, se asa lentamente hasta alcanzar una jugosidad perfecta y una piel dorada y crujiente que te hará agua la boca.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/e0f0626b-1837-4fdc-b54a-0e6a17797f5a/DreamShaper_v5_fried_chicken_wing_pair_served_in_a_plate_delic_1.jpg",
							restaurantName: "Kukulkan"
						},
						{
							plateName: "Tortillas",
							price: "4000",
							description: "¡Descubre nuestras tortillas, el platillo que te transportará a la tradición y el sabor auténtico! Deliciosas, esponjosas y llenas de ingredientes frescos, nuestras tortillas son un verdadero festín para tu paladar. Cada bocado te sorprenderá con su textura suave y su mezcla perfecta de sabores.",
							image: "",
							restaurantName: "Kukulkan"
						}
					],
					locations: [
						"Colombia",
						"Costa"
					],
					image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/ea3c309b-a9b1-4e5a-aac4-35da60887158/DreamShaper_v6_chicken_roaster_smoked_advertising_elegant_webp_0.jpg",
					subscription: [
						{
							SubscriptionName: "El Kukulkan",
							description: "Desde los antiguos tiempos, Kukulkan ha sido venerado como el símbolo de la fuerza y la sabiduría, y ahora, esta magnificencia culinaria está al alcance de tu mano. Su sabor exquisito y su textura sublime te transportarán a un mundo donde la nutrición y el deleite se entrelazan en perfecta armonía.",
							price: "20000",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/65d1d1eb-9819-4610-9871-6d8e0ff7a206/DreamShaper_v6_wok_ramen_logo_on_top_right_elegant_marketing_0.jpg",
						}
					]
				},
				{
					name: "La Bella Italia",
					plates: [
						{
							plateName: "Pizza con hongos",
							price: "5000",
							description: "Nuestra pizza está cuidadosamente elaborada con los ingredientes más frescos y de la más alta calidad. Los champiñones, perfectamente cocidos, añaden una textura suave y un sabor terroso que se complementa a la perfección con el queso fundido y derretido.",
							image: "",
							restaurantName: "La Bella Italia"
						},
						{
							plateName: "Pasta bolognesa",
							price: "14000",
							description: "Nuestra pasta al dente se combina con una salsa boloñesa casera, cuidadosamente preparada con carne de res jugosa, tomates maduros y una selección de hierbas aromáticas",
							image: "",
							restaurantName: "La Bella Italia"
						},
						{
							plateName: "Fetuccini Alfredo",
							price: "13000",
							description: "¡Descubre el verdadero placer de la pasta con nuestro exquisito Fettuccini Alfredo! Sumérgete en un mundo de sabores seductores mientras los delicados fettuccini se entrelazan con una cremosa salsa Alfredo, enriquecida con mantequilla suave y queso parmesano fresco. ",
							image: "",
							restaurantName: "La Bella Italia"
						},
						{
							plateName: "Gnocchi",
							price: "20000",
							description: "Nuestros Gnocchi son suaves y tiernos, hechos a mano con la receta tradicional que ha pasado de generación en generación. Cada uno de ellos se combina con una exquisita salsa, cuidadosamente elaborada con ingredientes frescos y sabrosos, que se adhieren perfectamente a la textura suave de la pasta.",
							image: "",
							restaurantName: "La Bella Italia"
						}
					],
					locations: ["Colombia", "Costa"],
					image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/6d29df4b-801b-4bb5-9b3d-32c71d153902/DreamShaper_v6_italian_food_sphaguetti_pizza_lasagna_advertisi_0.jpg",
					subscription: [
						{
							SubscriptionName: "Italianisimo",
							description: "Sumérgete en un universo de deleite gastronómico, donde cada bocado es una obra maestra cuidadosamente elaborada. Nuestro enfoque principal es consentirte con los platos más destacados de Italia, comenzando con la realeza de la cocina italiana: la Pizza.",
							price: "20000",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/65d1d1eb-9819-4610-9871-6d8e0ff7a206/DreamShaper_v6_wok_ramen_logo_on_top_right_elegant_marketing_0.jpg",
						}
					]
				},
				{
					name: "Don Pacino",
					plates: [
						{
							plateName: "Tarta de peces",
							price: "5000",
							description: 'Inspirada en la famosa frase "dormirás con los peces", esta creación culinaria te transportará a un sabor inolvidable. Imagina una base crujiente de masa horneada, que esconde un relleno exquisito de peces frescos, cuidadosamente seleccionados para brindarte una experiencia gastronómica única. Cada bocado revela la delicadeza de los sabores marinos, fusionados con hierbas y especias secretas que te harán suspirar.',
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/7fb8d766-1e33-4127-a0e6-fe026cdb0aa2/DreamShaper_v5_Fish_tart_mafia_theme_gambling_card_mafia_men_p_0.jpg",
							restaurantName: "Don Pacino"
						},
						{
							plateName: "Pasta destazada",
							price: "14000",
							description: "Esta pasta, al igual que las transacciones clandestinas de la mafia, está llena de secretos. Deliciosos trozos de panceta ahumada y salchichas italianas picantes son combinados con una salsa pomodoro casera, que esconde un toque de chili para despertar tus sentidos.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/6e212d52-2ff4-42fb-8f97-b463ac7ba2b6/DreamShaper_v5_pasta_bolognese_ketchup_blood_aspect_delicious_0.jpg",
							restaurantName: "Don Pacino"
						},
						{
							plateName: "Puñalini Alfredo",
							price: "13000",
							description: "¡Sumérgete en el oscuro mundo de la mafia con nuestro Puñalini Alfredo! Una fusión única entre la clásica pasta Alfredo y la intensidad de la vida criminal. Imagina un plato de tallarines suaves y cremosos, bañados en una irresistible salsa Alfredo que esconde un toque de peligro. Esta exquisita combinación de sabores te transportará a las calles sombrías de la mafia, donde el sabor intenso se entrelaza con la elegancia.",
							image: "https://1.bp.blogspot.com/-R0CT562JZL4/YALVh_-qwDI/AAAAAAAAXx0/rt0gse_JkCg2lK46gYLKpp2UJfCqn0IZgCNcBGAsYHQ/s3200/espaguetis%2Bal%2Bcapone.jpg",
							restaurantName: "Don Pacino"
						},
						{
							plateName: "Pastel de arandanitos",
							price: "20000",
							description: "este no es un pastel común y corriente. En cada mordisco, podrás saborear un toque de peligro, ya que los arándanos representan las sutiles transacciones de flores en las sombras. Cada bocado te invita a sumergirte en una experiencia clandestina y emocionante.",
							image: "https://caudesucre.com/wp-content/uploads/2017/05/bizcocho_sin_harina-11.jpg",
							restaurantName: "Don Pacino"
						}
					],
					locations: [
						"Colombia",
						"Costa"
					],
					image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/7772b5c6-fc14-4b94-bcdc-8ee42ca9564f/DreamShaper_v6_Mafi_food_advertising_elegant_webpage_blue_gree_1.jpg",
					subscription: [
						{
							SubscriptionName: "Almorzar con los peces",
							description: "Nuestros chefs, expertos en el arte de la cocina mafiosa, crean combinaciones de sabores únicas, mientras que nuestro ambiente íntimo y discreto te sumerge en la atmósfera intrigante de la mafia. Almorzar con los peces es el destino ideal para aquellos que buscan una experiencia culinaria sofisticada y cautivadora que transporta a un mundo de sabor y secretos bien guardados.",
							price: "20000",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/65d1d1eb-9819-4610-9871-6d8e0ff7a206/DreamShaper_v6_wok_ramen_logo_on_top_right_elegant_marketing_0.jpg",
						}
					]
				}
			],
			user: [
				{
					displayName: "Alepina",
					firstName: "Alejandra",
					secondName: "Martinez",
					birthDay: "12",
					birthMonth: "6",
					birthYear: "2014",
					address: "",
					addressDetail: "",
					Gender: "femenino",
					email: "askingalessa@gfake.com",
					phone: "3005562343",
					login: false,
					image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/5d52955e-942f-44f3-8686-94611922d455/DreamShaper_v5_3_An_AIpowered_android_woman_with_celticlik_0.jpg",
					invoiceHistory: [
						{
							invoiceNumber: "39201",
							invoiceDate: "15/06/2021",
							Quantity: "30000",
							invoiceStatus: "Pending",
							refunded: false
						}
					],
					cardInfo: [
						{
							cardLastFour: "1234",
							cardExpiration: "04/2024", cardDefault: true
						},
					],
					subscriptionInfo: [
						{
							subscriptionName: "Italianisimo",
							subscriptionAmount: 20000,
							SubscriptionPayDay: 12
						},
					],
					emailNotification: [
						{
							accountChanges: false,
							newProducts: false,
							marketing: false,
							securityAlerts: false
						}
					],
					multiFactor: [
						{
							optIn: false,
							multiFactorEmail: "askingalessa@gfake.com"
						}
					]
				}
			],
			favorites: [

			],
			cart: [
				
			],
		},
		actions: {
			fetchChatGPT: async (prompt, setIaResponse) => {
				console.log(JSON.stringify({ prompt }))
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/createDietChatGPT`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							"Access-Control-Allow-Origin": "*"
						},
						body: JSON.stringify({ prompt })
					});
					if (response.ok) {
						const data = await response.text();
						setIaResponse(data.replace('\n', '<br>'));
					} else {
						console.error('Error en la respuesta del servidor:', response.status, response.statusText);
					}
				} catch (error) {

					console.error('Error en la solicitud:', error);
				}
			},

			userLogin: async (email, password) => {
				const resp = await getActions().apiFetch("/login", "POST", { email, password })
				if (resp.code >= 400) {
					return resp
				}
				setStore({ accessToken: resp.data.accessToken, pictureUrl: resp.data.userInfo.profilePic })
				localStorage.setItem("accessToken, resp.data.accessToken")
				return resp

			},
			userLogout: async () => {
				const resp = await getActions().apiFetchProtected("/logout", "POST")
				if (resp.code >= 400) {
					return resp
				}
				setStore({ accessToken: null, pictureUrl: null })
				localStorage.removeItem(accessToken)
				return resp

			},
			loadToken() {
				let token = localStorage.getItem("accessToken")
				setStore({ accessToken: token })
			},
			getMessage: async () => {
				try {
					//fetching data fom the backend
					const resp = await getActions().apiFetch("/hello")
					setStore({ message: resp.data.message })
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			requestPasswordRecovery: async (email) => {
				const resp = await getActions().apiFetch("/recoverypassword", "POST", { email })
				return resp

			},
			changePasswordRecovery: async (passwordToken, password) => {
				let resp = await fetch(apiUrl + "/changepassword", {
					method: "POST",
					body: JSON.stringify({ password }),
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${passwordToken}`
					}

				})
				if (!response.ok) {
					console.error(`${resp.status}: ${resp.statusText}`)
					return { code: resp.status, error: `{resp.status}: ${resp.statusText}` }
				}
				let data = await resp.json()
				return { code: resp.status, data }

			},
			// apiFetch: async (endpoint, method = "GET", body = {}) => {
			// 	let resp = await fetch(apiUrl + endpoint, method == "GET" ? undefined : {
			// 		method,
			// 		body: JSON.stringify(body),
			// 		headers: {
			// 			"Content-Type": "application/json"
			// 		}

			// 	})
			// 	if (!response.ok) {
			// 		console.error(`${resp.status}: ${resp.statusText}`)
			// 		return { code: resp.status, error: `{resp.status}: ${resp.statusText}` }
			// 	}
			// 	let data = await resp.json()
			// 	return { code: resp.status, data }

			// },
			apiFetchProtected: async (endpoint, method = "GET", body = {}) => {
				let params = {
					headers: {
						"Authorization": `Bearer ${getStore().accessToken}`
					}
				}
				if (method !== "GET") {
					params.method = method
					params.body = JSON.stringify(body)
					params.headers["Content-Type"] = "application/json"
				}
				let resp = await fetch(apiUrl + endpoint, params)
				if (!resp.ok) {
					console.error(`${resp.status}: ${resp.statusText}`)
					return { code: resp.status, error: `${resp.status}: ${resp.statusText}` }
				}
				let data = await resp.json()
				return { code: resp.status, data }
			},

			uploadProfilePic: async (formData) => {
				const apiUrl = process.env.BACKEND_URL
				console.log(apiUrl)

				let resp = await fetch(apiUrl + "/profilepic", {
					method: "POST",
					body: formData,
					headers: {

						"Authorization": `Bearer ${getStore().accessToken}`
					}
				})
				if (!resp.ok) {
					console.error(`${resp.status}: ${resp.statusText}`)
					return { code: resp.status, error: `${resp.status}: ${resp.statusText}` }
				}
				let data = await resp.json()
				setStore({ profilePic: data.pictureUrl })
				return { code: resp.status, data }
			},

			updateUserProfile: async (email, updatedProfile) => {
				try {
					//  Realizar una solicitud a la API para actualizar el perfil del usuario
					const response = await getActions().apiFetch(`/user/${email}`, "PUT", updatedProfile);
					const { code, data } = response;

					if (code === 200 && data) {
						// Actualizar el perfil en el estado de la aplicación
						const { store, setStore } = getStore();
						const updatedUser = { ...store.user[0], ...updatedProfile };
						const updatedStore = { ...store, user: [updatedUser] };
						setStore(updatedStore);
						return data;
					} else {
						console.error("Error:", response);
					}
				} catch (error) {
					console.error("Error:", error);
				}
			},
			apiFetch: async (endpoint, method = "GET", body = {}) => {
				const apiUrl = process.env.BACKEND_URL
				console.log(apiUrl)

				let resp = await fetch(apiUrl + endpoint, method == "GET" ? undefined : {
					method,
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json"
					}
				})
				if (!resp.ok) {
					console.error(`${resp.status}: ${resp.statusText}`)
					return { code: resp.status, error: `${resp.status}: ${resp.statusText}` }
				}
				let data = await resp.json()
				return { code: resp.status, data }
			},
			addFavorite: (index, name) => {
				let { favorites } = getStore();
				if (!favorites.some(item => item.index == index)) {
					setStore({ favorites: [...favorites, { id: index, name: displayName }] })
					console.log(getStore().favorites)
				}
				else {
					//if exisitng then delete
					let newFavorites = [...favorites]
					let itemIndex = favorites.findIndex(item => item.id == index)
					newFavorites.splice(itemIndex, 1);
					setStore({ favorites: newFavorites })
					console.log(itemIndex)
					console.log(favorites)
				}
			},
			deleteFavorite: (name) => {
				let { favorites } = getStore()
				let newFavorites = [...favorites]
				let itemIndex = favorites.findIndex(item => item.name == name)
				newFavorites.splice(itemIndex, 1);
				setStore({ favorites: newFavorites })
				console.log(itemIndex)
				console.log(favorites)
			},
			deleteAllFavorites: () => {
				let { favorites } = getStore()
				let newFavorites = [{}]
				setStore({ favorites: newFavorites })
				console.log(favorites)
			}
		}
	};
};



export default getState;

