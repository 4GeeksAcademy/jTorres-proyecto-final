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
					description: "Desde nuestros deliciosos sushi rolls, perfectamente enrollados y repletos de pescado fresco y crujientes vegetales, hasta nuestros exquisitos platos de ramen, donde los fideos se entrelazan con un caldo aromático y sabroso, cada bocado en Wok es una invitación a disfrutar de los sabores más auténticos de la cocina japonesa.",
					plates: [
						{
							plateName: "Ramen",
							price: "40",
							description: "¡Descubre el sabor auténtico del Oriente en cada sorbo! Nuestro exquisito plato de ramen te transportará a las calles bulliciosas de Japón con su caldo rico y reconfortante. Sus fideos al dente se entrelazan con delicadeza en un mar de sabores, acompañados de trozos tiernos de cerdo desmenuzado, verduras frescas y un huevo suave y seductor.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/2e56975e-3d9a-4cd7-ba95-362ae2e81927/DreamShaper_v6_ramen_black_table_elegant_delicious_steam_chops_0.jpg",
							restaurantName: "Wok"
						},
						{
							plateName: "Onigiri",
							price: "20",
							description: "¡Descubre el bocado perfecto de Japón en un solo bocado! Nuestros exquisitos Onigiri son pequeñas obras maestras de arroz rellenas de sabores irresistibles. Con una textura suave y pegajosa, cada onigiri es cuidadosamente moldeado a mano para garantizar una presentación impecable. ",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/5935ad7f-cc73-44bd-9b0b-0d5f96d38395/DreamShaper_v6_onigiri_black_table_elegant_delicious_steam_cho_1.jpg",
							restaurantName: "Wok"
						},
						{
							plateName: "Arroz",
							price: "4",
							description: "Nuestro arroz japonés es preparado con maestría por nuestros chefs expertos, quienes seleccionan cuidadosamente los ingredientes más frescos y auténticos para ofrecerte una experiencia culinaria única. Cada grano de arroz, perfectamente cocido y sazonado con una combinación de especias tradicionales, se transforma en una explosión de sabor en tu paladar.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/2d4d91ae-f36a-451a-9e9a-16f3fd7e95ae/DreamShaper_v6_japanese_rice_in_a_black_bowl_black_table_elega_0.jpg",
							restaurantName: "Wok"
						},
						{
							plateName: "Sushi",
							price: "20",
							description: "¡Descubre nuestro exquisito plato de sushi, una explosión de sabores en cada bocado! Nuestro sushi fresco y artísticamente presentado combina la suavidad del arroz con la frescura del pescado crudo y una cuidadosa selección de ingredientes. Cada pieza es una obra maestra culinaria, elaborada con maestría por nuestros expertos sushi chefs. ",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/366b9e90-63c9-429d-a771-e81025c2bce0/DreamShaper_v6_japanese_rice_with_sushi_black_table_elegant_de_0.jpg",
							restaurantName: "Wok"
						}
					],
					locations: [
						"Colombia",
						"Costa"
					],
					image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/809aa066-aac7-4b3c-98c1-3213597f0b14/variations/Default_wok_ramen_logo_on_top_right_elegant_marketing_0_809aa066-aac7-4b3c-98c1-3213597f0b14_0.png",
					image2: "https://cdn.leonardo.ai/users/d0ba26a1-1263-43bf-bcfd-25b0622efba2/generations/67e344d1-520c-4e15-808c-a04abca810b9/variations/Default_muted_chinese_ink_painting_muted_colors_rice_paper_tex_1_67e344d1-520c-4e15-808c-a04abca810b9_0.png",
					subscription: [
						{
							SubscriptionName: "Yamete Kudasai",
							description: "¡Yamete Kudasai: Una Experiencia Gastronómica Japonesa Cada Día de la Semana! Delicioso Ramen los Lunes, Sushi los Martes, Arroz Japonés los Miércoles, Bento los Jueves, ¡Y de Nuevo Ramen los Viernes! ¡Disfruta de Sushi los Sábados y Domingos!",
							price: "20",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/65d1d1eb-9819-4610-9871-6d8e0ff7a206/DreamShaper_v6_wok_ramen_logo_on_top_right_elegant_marketing_0.jpg",
						}
					]
				},
				{
					name: "BurgLand",
					description: "En BurgLand, nos enorgullece ofrecer hamburguesas jugosas y suculentas hechas con los ingredientes más frescos y de la más alta calidad. Nuestro compromiso con la excelencia se refleja en cada bocado que pruebes.",
					plates: [
						{
							plateName: "Hamburguesa",
							price: "15",
							description: "Prueba nuestra irresistible hamburguesa: un jugoso filete de carne cocinado a la perfección, envuelto en un pan suave y esponjoso. Acompañado de crujientes vegetales frescos y una explosión de sabores gracias a nuestra especial salsa secreta. ¡Una experiencia gourmet en cada mordisco!",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f2d4bab1-66ef-4549-b9db-3edb375a5a92/DreamShaper_v5_Delicious_hamburger_juicy_patty_steam_dark_eleg_0.jpg",
							restaurantName: "McDonalds"
						},
						{
							plateName: "Hamburguesa con queso",
							price: "19",
							description: "¡Prepárate para una explosión de sabor con nuestra hamburguesa con queso! Imagina un filete jugoso y sazonado a la perfección, acompañado de una suave fusión de quesos que se derriten en tu boca. El pan brioche tostado añade un toque de crujiente y la frescura de los vegetales complementa esta obra maestra. ¿Estás listo para una experiencia de hamburguesa irresistible?",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/bd5b796e-cc5a-4968-a432-eff627d518cd/DreamShaper_v5_Delicious_hamburger_with_a_lot_of_cheese_inside_1.jpg",
							restaurantName: "McDonalds"
						},
						{
							plateName: "Doble libra",
							price: "20",
							description: "¡Déjate seducir por nuestra increíble hamburguesa doble libra! Dos jugosos filetes de carne perfectamente sazonados, colocados entre dos capas de pan brioche tostado. Una explosión de sabor y satisfacción en cada bocado. Acompañada de crujientes hojas de lechuga, rodajas de tomate maduro y nuestra irresistible salsa especial. ¡Una experiencia gourmet en tu paladar!",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f521b433-17a4-4ba2-bc63-4f3f84ef305d/DreamShaper_v5_Delicious_double_big_hamburger_juicy_patty_stea_0.jpg",
							restaurantName: "McDonalds"
						},
						{
							plateName: "Big Mac",
							price: "25",
							description: "Imagina dos jugosas y sabrosas hamburguesas de carne 100% de res, perfectamente asadas y sazonadas, apiladas entre tres capas de panes suaves y esponjosos. En cada bocado, sentirás la deliciosa fusión de la carne, el queso cheddar fundido, los crujientes pepinillos, la cebolla fresca y nuestra inconfundible salsa secreta.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/ab3e02d0-42f2-4ddb-8476-29a888149470/DreamShaper_v5_Delicious_giant_hamburger_bacon_juicy_patty_ste_2.jpg",
							restaurantName: "McDonalds"
						}
					],
					locations: ["Colombia", "Costa"],
					image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/7db6248a-cf85-4563-a0a4-fc0e943265ff/variations/Default_McDonalds_food_hamburger_advertising_elegant_webpage_b_0_7db6248a-cf85-4563-a0a4-fc0e943265ff_0.png",
					image2: "https://cdn.leonardo.ai/users/b00a023f-d275-4a1a-a12b-5ac4d5cfe792/generations/cd791019-a67b-4b56-9bc6-5015824841ce/DreamShaper_v5_Splash_art_music_album_art_cover_drawing_a_woma_1.jpg",
					subscription: [
						{
							SubscriptionName: "Bien Librado",
							description: "Con Bien librado, tienes la opción de personalizar tu hamburguesa llamando a nuestro servicio al cliente. Si tienes algún antojo en particular o alguna restricción, estaremos encantados de adaptar tu hamburguesa a tus necesidades.",
							price: "20",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/65d1d1eb-9819-4610-9871-6d8e0ff7a206/DreamShaper_v6_wok_ramen_logo_on_top_right_elegant_marketing_0.jpg",
						}
					]
				},
				{
					name: "Kukulkan",
					description: "En Kukulkan, nuestro pollo es seleccionado con esmero, marinado con secretos ancestrales y frito a la perfección para que cada pieza sea digna de los dioses. Con cada orden, te transportamos a los sabores auténticos de México, donde los ingredientes frescos y las especias cautivan tus sentidos y despiertan tu apetito divino.",
					plates: [
						{
							plateName: "Pollo asado",
							price: "15",
							description: "¡Descubre la perfección en cada bocado con nuestro pollo asado! Jugoso, tierno y lleno de sabor, este plato te transportará a un festín irresistible. Cada porción está cuidadosamente sazonada con una mezcla de especias secretas que realza su sabor natural y lo convierte en una verdadera delicia.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/43708d93-6def-4e1f-84ee-22732705ad87/DreamShaper_v5_fried_chicken_with_fries_and_coke_served_in_a_p_0.jpg",
							restaurantName: "Kukulkan"
						},
						{
							plateName: "Medio pollo asado",
							price: "8",
							description: "Disfruta de nuestro medio pollo asado, una delicia jugosa y llena de sabor. Tierno y dorado en su exterior, cada bocado te transportará a un festival de sabores ahumados y especias exquisitas.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/e8f79622-0dbb-4844-9fe8-c5cc70d2b7dd/DreamShaper_v5_fried_chicken_served_in_a_plate_delicious_steam_3.jpg",
							restaurantName: "Kukulkan"
						},
						{
							plateName: "Cuarto de pollo asado",
							price: "6",
							description: " Este suculento manjar te transportará a un festín de sabores irresistibles. Nuestro pollo, cuidadosamente sazonado con hierbas y especias, se asa lentamente hasta alcanzar una jugosidad perfecta y una piel dorada y crujiente que te hará agua la boca.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/e0f0626b-1837-4fdc-b54a-0e6a17797f5a/DreamShaper_v5_fried_chicken_wing_pair_served_in_a_plate_delic_1.jpg",
							restaurantName: "Kukulkan"
						},
						{
							plateName: "Tortillas",
							price: "4",
							description: "¡Descubre nuestras tortillas, el platillo que te transportará a la tradición y el sabor auténtico! Deliciosas, esponjosas y llenas de ingredientes frescos, nuestras tortillas son un verdadero festín para tu paladar. Cada bocado te sorprenderá con su textura suave y su mezcla perfecta de sabores.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/2d225024-d9c6-45f7-bfa1-81f9aee09af4/DreamShaper_v6_Generate_an_enchilada_full_of_cut_meat_plate_im_0.jpg",
							restaurantName: "Kukulkan"
						}
					],
					locations: [
						"Colombia",
						"Costa"
					],
					image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/4c7f39cf-b346-48dc-85a6-ea73ba1c4221/variations/Default_chicken_roaster_smoked_advertising_elegant_webpage_blu_0_4c7f39cf-b346-48dc-85a6-ea73ba1c4221_0.png",
					image2: "https://cdn.leonardo.ai/users/8e6f9a73-8b28-4e58-b860-a95feb77eca9/generations/c5759f2e-6b42-4aa6-8bfa-99f11730de8e/variations/Default_A_surrealistic_ethereal_painting_of_a_goddess_of_death_3_c5759f2e-6b42-4aa6-8bfa-99f11730de8e_1.jpg",
					subscription: [
						{
							SubscriptionName: "El Kukulkan",
							description: "Desde los antiguos tiempos, Kukulkan ha sido venerado como el símbolo de la fuerza y la sabiduría, y ahora, esta magnificencia culinaria está al alcance de tu mano. Su sabor exquisito y su textura sublime te transportarán a un mundo donde la nutrición y el deleite se entrelazan en perfecta armonía.",
							price: "20",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/65d1d1eb-9819-4610-9871-6d8e0ff7a206/DreamShaper_v6_wok_ramen_logo_on_top_right_elegant_marketing_0.jpg",
						}
					]
				},
				{
					name: "La Bella Italia",
					description: "¡Descubre la deliciosa tradición de la auténtica cocina italiana en nuestro restaurante! Sumérgete en una experiencia gastronómica única y saborea nuestros exquisitos platos. Desde nuestra irresistible pizza de champiñones, con una masa crujiente y una combinación perfecta de sabores, hasta nuestra tradicional pasta bolognesa, con una salsa casera que te transportará a las calles de Italia. ¿Prefieres algo más cremoso? Prueba nuestro suculento fetuccini alfredo, con una salsa sedosa que te dejará sin palabras. Y si buscas una opción más reconfortante, no puedes perderte nuestros deliciosos gnocci, elaborados con amor y servidos con una selección de salsas irresistibles. ¡Ven a nuestro restaurante y déjate seducir por la auténtica cocina italiana en cada bocado!",
					plates: [
						{
							plateName: "Pizza con hongos",
							price: "5",
							description: "Nuestra pizza está cuidadosamente elaborada con los ingredientes más frescos y de la más alta calidad. Los champiñones, perfectamente cocidos, añaden una textura suave y un sabor terroso que se complementa a la perfección con el queso fundido y derretido.",
							image: "",
							restaurantName: "La Bella Italia"
						},
						{
							plateName: "Pasta bolognesa",
							price: "14",
							description: "Nuestra pasta al dente se combina con una salsa boloñesa casera, cuidadosamente preparada con carne de res jugosa, tomates maduros y una selección de hierbas aromáticas",
							image: "",
							restaurantName: "La Bella Italia"
						},
						{
							plateName: "Fetuccini Alfredo",
							price: "13",
							description: "¡Descubre el verdadero placer de la pasta con nuestro exquisito Fettuccini Alfredo! Sumérgete en un mundo de sabores seductores mientras los delicados fettuccini se entrelazan con una cremosa salsa Alfredo, enriquecida con mantequilla suave y queso parmesano fresco. ",
							image: "",
							restaurantName: "La Bella Italia"
						},
						{
							plateName: "Gnocchi",
							price: "20",
							description: "Nuestros Gnocchi son suaves y tiernos, hechos a mano con la receta tradicional que ha pasado de generación en generación. Cada uno de ellos se combina con una exquisita salsa, cuidadosamente elaborada con ingredientes frescos y sabrosos, que se adhieren perfectamente a la textura suave de la pasta.",
							image: "",
							restaurantName: "La Bella Italia"
						}
					],
					locations: ["Colombia", "Costa"],
					image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f0184b91-0af6-4288-938f-d80dd922d70f/variations/Default_italian_food_sphaguetti_pizza_lasagna_advertising_eleg_0_f0184b91-0af6-4288-938f-d80dd922d70f_0.png",
					image2: "https://cdn.leonardo.ai/users/69ecc9ef-db24-4b23-86c3-3d4249c1c0d0/generations/b1aaad11-b38c-461e-8713-3baa6a2a8f2d/variations/Default_Vase_of_flowers_clipart_white_background_scattered_wat_1_b1aaad11-b38c-461e-8713-3baa6a2a8f2d_0.png",
					subscription: [
						{
							SubscriptionName: "Italianisimo",
							description: "Sumérgete en un universo de deleite gastronómico, donde cada bocado es una obra maestra cuidadosamente elaborada. Nuestro enfoque principal es consentirte con los platos más destacados de Italia, comenzando con la realeza de la cocina italiana: la Pizza.",
							price: "20",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/65d1d1eb-9819-4610-9871-6d8e0ff7a206/DreamShaper_v6_wok_ramen_logo_on_top_right_elegant_marketing_0.jpg",
						}
					]
				},
				{
					name: "Don Pacino",
					description: "¡Bienvenidos a Don Pacino, la tienda de comida italiana que te hará temblar de placer! Entra en nuestro mundo oscuro y sofisticado, donde cada plato es un mensaje amenazante de sabor y calidad. Nuestros chefs expertos, vestidos con trajes impecables, te cautivarán con sus creaciones culinarias que están destinadas a conquistar tus papilas gustativas y a dejarte anhelando más. Desde nuestras pizzas, que están hechas con secretos ancestrales transmitidos solo en susurros, hasta nuestras pastas al dente, que te recordarán la fuerza y resistencia de la mafia, cada bocado te sumergirá en un abismo de sabores aterradoramente deliciosos. ¿Estás listo para desafiar a tu paladar y unirte a nuestra familia gastronómica? ¡Don Pacino te espera, pero ten cuidado, una vez que pruebes nuestros platos, no podrás escapar!",
					plates: [
						{
							plateName: "Tarta de peces",
							price: "5",
							description: 'Inspirada en la famosa frase "dormirás con los peces", esta creación culinaria te transportará a un sabor inolvidable. Imagina una base crujiente de masa horneada, que esconde un relleno exquisito de peces frescos, cuidadosamente seleccionados para brindarte una experiencia gastronómica única. Cada bocado revela la delicadeza de los sabores marinos, fusionados con hierbas y especias secretas que te harán suspirar.',
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/7fb8d766-1e33-4127-a0e6-fe026cdb0aa2/DreamShaper_v5_Fish_tart_mafia_theme_gambling_card_mafia_men_p_0.jpg",
							restaurantName: "Don Pacino"
						},
						{
							plateName: "Pasta destazada",
							price: "14",
							description: "Esta pasta, al igual que las transacciones clandestinas de la mafia, está llena de secretos. Deliciosos trozos de panceta ahumada y salchichas italianas picantes son combinados con una salsa pomodoro casera, que esconde un toque de chili para despertar tus sentidos.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/6e212d52-2ff4-42fb-8f97-b463ac7ba2b6/DreamShaper_v5_pasta_bolognese_ketchup_blood_aspect_delicious_0.jpg",
							restaurantName: "Don Pacino"
						},
						{
							plateName: "Puñalini Alfredo",
							price: "13",
							description: "¡Sumérgete en el oscuro mundo de la mafia con nuestro Puñalini Alfredo! Una fusión única entre la clásica pasta Alfredo y la intensidad de la vida criminal. Imagina un plato de tallarines suaves y cremosos, bañados en una irresistible salsa Alfredo que esconde un toque de peligro. Esta exquisita combinación de sabores te transportará a las calles sombrías de la mafia, donde el sabor intenso se entrelaza con la elegancia.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/5acce1b5-42f1-463c-8d0a-defef82d7932/DreamShaper_v6_Generate_a_plate_fettucine_pasta_delicious_mafi_0.jpg",
							restaurantName: "Don Pacino"
						},
						{
							plateName: "Pastel de arandanitos",
							price: "20",
							description: "este no es un pastel común y corriente. En cada mordisco, podrás saborear un toque de peligro, ya que los arándanos representan las sutiles transacciones de flores en las sombras. Cada bocado te invita a sumergirte en una experiencia clandestina y emocionante.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/e79008fa-42bb-4755-8557-9453b4bb9fa9/DreamShaper_v6_generate_a_cake_made_out_of_blueberries_very_el_0.jpg",
							restaurantName: "Don Pacino"
						}
					],
					locations: [
						"Colombia",
						"Costa"
					],
					image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/cfee3d8d-1164-4521-a5aa-631d492c5001/variations/Default_generate_a_cake_made_out_of_blueberries_very_elegant_r_0_cfee3d8d-1164-4521-a5aa-631d492c5001_0.png",
					image2: "https://cdn.leonardo.ai/users/5f209a3e-ed47-4ae0-a74c-d360204db237/generations/135363ea-d6ff-421e-86dc-39ecba705317/variations/Default_full_body_portrait_of_beautiful_female_1900s_gangster_1_135363ea-d6ff-421e-86dc-39ecba705317_0.png",
					subscription: [
						{
							SubscriptionName: "Almorzar con los peces",
							description: "Nuestros chefs, expertos en el arte de la cocina mafiosa, crean combinaciones de sabores únicas, mientras que nuestro ambiente íntimo y discreto te sumerge en la atmósfera intrigante de la mafia. Almorzar con los peces es el destino ideal para aquellos que buscan una experiencia culinaria sofisticada y cautivadora que transporta a un mundo de sabor y secretos bien guardados.",
							price: "20",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/65d1d1eb-9819-4610-9871-6d8e0ff7a206/DreamShaper_v6_wok_ramen_logo_on_top_right_elegant_marketing_0.jpg",
						}
					]
				},
				{
					name: "Los Ardientes",
					description: "¡Ay, güero! ¡Tenemos el antojito que te hará vibrar como mariachi en fiesta! En nuestra tienda de comida mexicana, traemos hasta tu boca los sabores más tradicionales y auténticos de México. Desde los suculentos tacos al pastor hasta las enchiladas bañadas en salsa picosita, cada bocado te transportará directito a las calles de Guadalajara.",
					plates: [
						{
							plateName: "Tacos al pastor",
							price: "5",
							description: "Imagina saborear tiernas y jugosas rebanadas de carne de cerdo marinadas con nuestras especias secretas, asadas a la perfección en un trompo giratorio. Cada bocado es una explosión de sabores, con el toquecito picante de nuestra salsa casera y el frescor de la piña caramelizada que coronan cada taco.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/413b3c46-0829-4fc4-873d-7ca1ceea6806/DreamShaper_v6_Generate_a_Taco_al_Pastor_plate_image_delicious_1.jpg",
							restaurantName: "Los Ardientes"
						},
						{
							plateName: "Tortillas corrosivas",
							price: "14",
							description: "Estas Tortillas Diablo son ideales para los valientes amantes del picante que buscan una experiencia culinaria auténtica. Acompáñalas con tus ingredientes favoritos, desde carnes asadas hasta guacamole fresco, y crea una combinación explosiva de sabores que despertará tus sentidos.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/19718b5b-2ac2-4d56-a608-54dad60ec30d/DreamShaper_v6_Generate_a_Tortilla_full_of_cut_meat_plate_imag_0.jpg",
							restaurantName: "Los Ardientes"
						},
						{
							plateName: "Burrito asado",
							price: "13",
							description: "Este burrito, cargado de autenticidad y sazón mexicano, te transportará directamente a las calles de México. Comienza con una tortilla de harina suave y calientita, rellena hasta el borde con jugosos trozos de carne asada marinada con nuestras especias tradicionales. El aroma ahumado y la textura tierna de la carne te harán agua la boca.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/eaf17847-a9ae-4383-b3e1-3fa61efabf77/DreamShaper_v6_Generate_a_burrito_full_of_cut_meat_plate_image_1.jpg",
							restaurantName: "Los Ardientes"
						},
						{
							plateName: "Enchilísimas",
							price: "20",
							description: "Aquí viene el verdadero desafío, amigos: nuestras Enchilísimas están bañadas en una salsa roja picante, elaborada a base de chiles habaneros y jalapeños, que te hará sudar y despertará tus papilas gustativas con su intensidad. Cada mordisco es una aventura llena de sabor y picor.",
							image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/2d225024-d9c6-45f7-bfa1-81f9aee09af4/DreamShaper_v6_Generate_an_enchilada_full_of_cut_meat_plate_im_1.jpg",
							restaurantName: "Los Ardientes"
						}
					],
					locations: [
						"Colombia",
						"Costa"
					],
					image: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/063fe351-8ef4-4a71-b52e-edf962517c8a/variations/Default_Generate_a_mexican_food_restaurant_logo_traditional_el_0_063fe351-8ef4-4a71-b52e-edf962517c8a_0.png",
					image2: "https://cdn.leonardo.ai/users/003e1798-6a33-4447-9b64-a5d8570269ed/generations/9f7f432a-5e31-4f2e-b9d9-d058f82fc29f/variations/Default_a_dad_fishing_with_son_in_a_river_with_a_sunset_backgr_1_9f7f432a-5e31-4f2e-b9d9-d058f82fc29f_0.png",
					subscription: [
						{
							SubscriptionName: "El Club del Fuego",
							description: "Cada mes, recibirás en tu puerta un paquete especial con una variedad de delicias ardientes. Desde nuestros famosos tacos al pastor, pasando por las irresistibles Tortillas Diablo, hasta llegar a los desafiantes Burritos Asados y las explosivas Enchilísimas, este paquete estará repleto de sabores auténticos y picantes que te harán vibrar.",
							price: "80",
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
					address: "",
					addressDetail: "",
					gender: "femenino",
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
			images: [
				{
					picture: "https://cdn.leonardo.ai/users/2439e3a0-d6fb-43f9-a9f5-670715dcb2d7/generations/60365bdb-0671-4718-831c-ca75cc2a8a07/variations/Default_cute_tiny_hyperrealistic_cat_with_Harry_Potter_look_c_0_60365bdb-0671-4718-831c-ca75cc2a8a07_1.jpg",
					text: "Aprender hechizos nuevos y explorar conocimientos fantasticos!",
				},
				{
					picture: "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/84bc26a6-b576-44cc-8a32-50816bbf8cd4/DreamShaper_v6_A_futuristic_cityscape_with_a_glowing_AI_core_1.jpg",
					text: "Y solo necesitas enviarle un mensaje a la IA de las verduras!"
				},
				{
					picture: "https://cdn.leonardo.ai/users/5ab6cf73-600e-4c6a-a430-6ce862ef9f6f/generations/be921f41-6049-479f-acb6-893634509405/variations/Default_cute_tiny_hyperrealistic_Anime_cute_kitten_from_pokemo_0_be921f41-6049-479f-acb6-893634509405_1.jpg",
					text: "Zugoi Kitty",
				},
				{
					picture: "https://cdn.leonardo.ai/users/d44ebd31-2a06-4a04-a694-11f873eacb2f/generations/52df68dd-07f5-4645-81e6-76d3996992bb/variations/Default_graphic_design_flat_design_Vw_Kombi_1968_offroad_passi_1_52df68dd-07f5-4645-81e6-76d3996992bb_1.jpg",
					text: "Dar un paseo!",
				},
				{
					picture: "https://cdn.leonardo.ai/users/4f514c36-58b1-448a-b91a-e071c5bd00ef/generations/ab72d9cd-aed4-4240-9676-aab9dfad098a/variations/Default_Splatter_Art_Fortnite_Style_Cute_Baby_Dog_Wearing_Sung_2_ab72d9cd-aed4-4240-9676-aab9dfad098a_1.jpg",
					text: "Creando Arte!",
				},
				{
					picture: "https://cdn.leonardo.ai/users/53ff737e-31f8-4381-8d9d-4b7442248bd2/generations/4e31017e-8537-4ebb-b4cc-f54ff3954936/variations/Default_sticker_An_adorable_cute_TRex_stickers_adorable_lovely_1_4e31017e-8537-4ebb-b4cc-f54ff3954936_1.jpg",
					text: "Investigar eras distantes",
				},
				{
					picture: "https://cdn.leonardo.ai/users/9982f9c7-b1dc-4760-8709-b9df5541b99d/generations/5df6149a-531b-4319-b024-f48c7cfb9db5/variations/Default_STICKER_A_detailed_illustration_a_print_of_vivid_cute_1_5df6149a-531b-4319-b024-f48c7cfb9db5_1.jpg",
					text: "Desbloquear una nueva mascota!"
				},
				{
					picture: "https://cdn.leonardo.ai/users/4c22d727-49c3-4fb3-b9ea-94f96f1a8246/generations/465ac22b-2a0c-4ebd-ac1c-712eeba3af35/Leonardo_Diffusion_a_silhouette_design_of_a_pirate_ship_sunse_1.jpg",
					text: "Carpar a mundos lejanos"
				},
				{
					picture: "https://cdn.leonardo.ai/users/da618dff-54c1-4e6a-b5d0-bba4fe702192/generations/b7fb3d1c-db79-40da-9f5b-975a475c8e0f/variations/Default_castle_natural_highlights_bright_colours_realistic_wid_0_b7fb3d1c-db79-40da-9f5b-975a475c8e0f_1.jpg",
					text: "Dejate llevar, y continua en tu expedicion hacia lo desconocido!"
				},
				{
					picture: "https://cdn.leonardo.ai/users/70785720-6178-47e1-af23-40aba66d6c57/generations/dd7736a8-e75d-44fc-88a7-7cd69603c980/variations/Default_anime_girl_walking_on_water_ripples_backdrop_of_dawn_s_0_dd7736a8-e75d-44fc-88a7-7cd69603c980_1.jpg",
					text: "Ve una serie de Anime!",
				},
				{
					picture: "https://cdn.leonardo.ai/users/13980a6a-d524-4113-8b52-0060bec60db5/generations/4f5ee152-9928-461a-926c-b7c0b70074b9/variations/Default_valley_fairytale_treehouse_village_covered_matte_painting_hi_1_4f5ee152-9928-461a-926c-b7c0b70074b9_1.jpg",
					text: "Visita mundos fantasticos",
				},
				{
					picture: "https://cdn.leonardo.ai/users/b262a9ee-48f3-4f96-a264-801f44a26ec7/generations/0fb9c226-58dc-458f-a4fe-a44c0f71da70/variations/Default_Chloe_Price_at_the_the_Grand_Central_Terminal_cinemati_0_0fb9c226-58dc-458f-a4fe-a44c0f71da70_1.jpg",
					text: "Conoce a tu nuevo crush cibernetico!"
				},
				{
					picture: "https://cdn.leonardo.ai/users/516ac6fc-3f9c-422f-af5b-1f3b4adb97f1/generations/15ff68c3-8b54-4202-bbe2-a63321f72e40/variations/Default_A_rabbit_with_a_long_and_thin_body_holding_a_teacup_in_3_15ff68c3-8b54-4202-bbe2-a63321f72e40_1.jpg",
					text: "Visita el país de las maravillas una vez mas!",
				},
				{
					picture: "https://cdn.leonardo.ai/users/1521da4a-ee36-4934-9398-7db17f7ca01c/generations/34c23a03-be95-47f4-9860-e2c73ef3dbb5/variations/Default_The_poster_depicts_a_futuristic_space_landscape_with_A_1_34c23a03-be95-47f4-9860-e2c73ef3dbb5_1.jpg",
					text: "Viajar a otro planeta!",
				},
				{
					picture: "https://cdn.leonardo.ai/users/d7faf84c-8093-4594-aa13-e3e0ea91fd95/generations/579645c6-4d77-4f71-8d07-c748f6a0ef3c/variations/Default_Anthropomorphic_cute_and_adorable_charming_smiling_pi_0_579645c6-4d77-4f71-8d07-c748f6a0ef3c_1.jpg",
					text: "Exporar, Volar y Viajar por el vasto mundo digital",
				},
				{
					picture: "https://cdn.leonardo.ai/users/5abd808b-76cb-45a7-bb98-1d788814ed17/generations/7f33c36b-ccde-4430-90d3-c2a2b27afec7/variations/Default_isometric_view_of_a_MINI_cute_hyperrealistic_futuristic_soldi_0_7f33c36b-ccde-4430-90d3-c2a2b27afec7_1.jpg",
					text: "Mejorar tu equipo!",
				},
				{
					picture: "https://cdn.leonardo.ai/users/9c8d859f-322d-41be-a972-492b67272818/generations/584666f2-7ef1-4e63-a7ae-24dd1f595c75/variations/Default_masterpiece_realistic_27yr_old_female_beautiful_face_w_2_584666f2-7ef1-4e63-a7ae-24dd1f595c75_1.jpg",
					text: "Incluso podrás invitar a tu crush!"
				},
				{
					picture: "https://cdn.leonardo.ai/users/0d7d3b2b-46c3-41da-b414-131ad0212abb/generations/55f6808c-f1ab-4d83-b89e-16a8cd2c18b8/variations/Default_European_young_woman_night_city_detailed_symmetric_cro_0_55f6808c-f1ab-4d83-b89e-16a8cd2c18b8_1.jpg",
					text: "Conocer personas de mundos lejanos"
				},
				{
					picture: "",
					text: ""
				},
				{
					picture: "",
					text: ""
				},
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
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/login`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							"Access-Control-Allow-Origin": "*"
						},
						body: JSON.stringify({ email, password })
					});
					if (response.ok) {
						const data = await response.json();
						return data;
					} else {
						console.error('Error in server response:', response.status, response.statusText);
					}
				} catch (error) {
					console.error('Error in request:', error);
				}
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
			userRegister: async (formData) => {
				try {
					// Make an API request to the back-end register endpoint
					const response = await fetch(`${process.env.BACKEND_URL}/api/register`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(formData)
					});

					if (response.ok) {
						// Registration successful
						console.log("Registration successful");
						// Redirect the user to the desired page
					} else {
						// Registration failed
						console.error("Registration failed:", response.statusText);
					}
				} catch (error) {
					console.error("Error in request:", error);
				}
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
			apiFetch: async (endpoint, method = "GET", body = {}) => {
				let resp = await fetch(apiUrl + endpoint, method == "GET" ? undefined : {
					method,
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json"
					}

				})
				if (!response.ok) {
					console.error(`${resp.status}: ${resp.statusText}`)
					return { code: resp.status, error: `{resp.status}: ${resp.statusText}` }
				}
				let data = await resp.json()
				return { code: resp.status, data }

			},
			apiFetchProtected: async (endpoint, method = "GET", body = {}) => {
				const apiUrl = process.env.BACKEND_URL
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
			},
			addCart: (plate, index) => {
				let store = getStore()
				let cart = store.cart
				// cart is pulling data correclty
				let newPlate = {
					plateName: plate.plateName,
					price: plate.price,
					description: plate.description,
					image: plate.image,
					restaurantName: plate.restaurantName,
					plateIndex: index,
				}
				setStore({ cart: [...cart, newPlate] })
				// console.log(store.cart) cart working as expected
			},
			deleteCartItem: (plate, index) => {
				let store = getStore();
				let cart = store.cart;
				//cart is pulling data properly
				let updatedCart = cart.splice(index, 1);
				console.log(updatedCart)

				setStore({ cart: updatedCart });
				console.log(cart)
			},
		}
	};
};




export default getState;