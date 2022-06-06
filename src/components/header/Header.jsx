import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import FastdeliveryImg from "../../assets/fast delivery service.png";
import BackLine from "../../assets/back line.png";
import HeaderCosmetics from "../../assets/header cosmetics.png";
import PlayButton from "../../assets/play-button-how it work.png";
import Review from "../../assets/Review.png";
import Button from "../../UI/Button";
import "./Header.css";

const Header = () => {
	return (
		<div className="header" id="home">
			<div className="backline">
				<img src={BackLine} alt="" />
			</div>
			<div className="container-lg">
				<div className="header-info">
					<img src={FastdeliveryImg} alt="" />
					<h1>Foundation Matte & Poreless</h1>
					<p className="dark">
						Maybelline’s #1 foundation perfect for oily skin. No
						stickiness, no shine.
					</p>
					<div className="buttons">
						<Button className="primary max-content">
							Add to Cart
						</Button>
						<img src={PlayButton} alt="" />
					</div>
				</div>
				<div className="header-img">
					<img src={HeaderCosmetics} alt="" />
				</div>
				<div className="header-details">
					<div className="details">
						<span className="dark">Details</span>
						<h3 className="price">$100.45</h3>
						<span className="header-details-size">30ml</span>
						<img src={Review} alt="" />
						<div className="group-btn">
							<span className="left">
								<AiOutlineLeft />
							</span>
							<span className="right">
								<AiOutlineRight />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
