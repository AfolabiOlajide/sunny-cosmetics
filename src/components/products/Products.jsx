import React from "react";
import Button from "../../UI/Button";

import GosImage from "../../assets/gos.png";
import HdMicro from "../../assets/hdmicro.png";
import SemiCircle from "../../assets/semi-circle-dotted.png";
import "./Products.css";

const Products = () => {
	return (
		<div className="products container-md" id="products">
			<div className="about">
				<h2>Best Cosmetic Products</h2>
				<p className="dark" id="about">
					Launched in 2002, Makeup City has brought renowned
					international personal care brands under one roof for the
					first time in Pakistan. from a journey of a few stores, we
					have grown significantly, by making our brands available to
					almost every where a person can think off.
				</p>
			</div>
			<div className="product">
				<div className="products-img">
					<img
						className="semi-circle"
						src={SemiCircle}
						alt="semi-circle"
					/>
					<img className="product-img" src={GosImage} alt="" />
				</div>
				<div className="product-info">
					<h2>GOS- Primer Plus 30 ML</h2>
					<p className="dark">
						GOSH COPENHAGEN offers a wide selection of products in
						different categories: Cosmetics, Fragrances, Hair Care,
						Face Care, Body Care. GOSH Cosmetics are available
						online.
					</p>
					<Button className="primary">Load More</Button>
				</div>
			</div>
			<div className="product">
				<div className="product-info">
					<h2>HD Micro Foundation Matifying Liquid</h2>
					<p className="dark">
						HD Micro Foundation Matifying Liquid is a micronized and
						gently mattifying foundation with vitamin E for the most
						natural look.
					</p>
					<Button className="primary">Load More</Button>
				</div>
				<div className="products-img">
					<img className="product-img" src={HdMicro} alt="" />
					<img
						className="semi-circle"
						src={SemiCircle}
						alt="semi-circle"
					/>
				</div>
			</div>
		</div>
	);
};

export default Products;
