import React from "react";

import stripe from "../../assets/stripe.png";
import IBM from "../../assets/IBM.png";
import "./Clients.css";

const Clients = () => {
	return (
		<div className="clients container-lg">
			<p className="dark">SOME OF OUR TRUSTED CLIENTS</p>
			<div className="client-list">
				<div className="client-list-img">
					<img src={stripe} alt="" />
				</div>
				<div className="client-list-img">
					<img src={IBM} alt="" />
				</div>
				<div className="client-list-img">
					<img src={stripe} alt="" />
				</div>
				<div className="client-list-img">
					<img src={IBM} alt="" />
				</div>
				<div className="client-list-img">
					<img src={stripe} alt="" />
				</div>
				<div className="client-list-img">
					<img src={IBM} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Clients;
