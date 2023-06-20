import React, { Component } from "react";

export const Footer = () => (
	<footer className=" footer text-center bg-transparent sticky-bottom" style={{zIndex: "9999", marginTop:"4rem"}}>
		<p className="text-dark p-0 m-0">
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
		<a href="#ia-verduras"><button className="btn btn-info p-0 m-0" style={{borderRadius:"50% 50% 50% 50% / 95% 95% 5% 5%", width:"8rem", height:"1rem"}}></button></a>
			<h2 className="text-success p-0 m-0" style={{fontSize:"1rem"}}>¿Sha tenés hambre?</h2>
		<a href="#tienda"><button className="btn btn-info p-0 m-0" style={{borderRadius:"50% 50% 50% 50% / 12% 12% 88% 88% ", width:"8rem", height:"1rem"}}></button></a>
		<p className="bg-light text-light">Soy un texto secreto, gracias por pasarte por nuestra pagina! n.n</p>
	</footer>
);