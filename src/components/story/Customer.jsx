import React from "react";

import ImgBg from "../../assets/img-background.png";
import "./Customer.css";

const Customer = (props) => {
	return (
		<div className="customer">
			<div className="customer-img">
				<img className="img-bg" src={ImgBg} alt="" />
				<img src={props.img} alt="" />
			</div>
			<div className="customer-story">
				<p className="blue">Customer Story</p>
				<h2>Quick and best results. You are the best!</h2>
				<p className="dark">
					“If you are going to use a passage of Lorem Ipsum, you need
					to be sure there isn't anything embarrassing hidden in the
					middle of text.
				</p>
				<p className="dark">
					There are many variations of passages of Lorem Ipsum
					available.”
				</p>
				<div className="customer-detail">
					<h4 className="customer-name">{props.name}</h4>
					<p className="customer-title dark">{props.title}</p>
				</div>
			</div>
		</div>
	);
};

export default Customer;
