import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
	FaInstagram,
	FaLinkedinIn,
	FaFacebookF,
	FaTwitter,
} from "react-icons/fa";

import Button from "../../UI/Button";
import Logo from "../nav/Logo";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer" id="contact">
			<div className="top">
				{/* reach us section */}
				<div className="us">
					<a href="#home">
						<Logo />
					</a>
					<p className="dark">
						Nor again is there anyone who loves or pursues or
						desires to obtain pain of itself.
					</p>
					<div className="mail">
						<input type="text" placeholder="Enter your Email" />
						<Button className="normal">
							<HiArrowNarrowRight />
						</Button>
					</div>
				</div>
				{/* links section */}
				<div className="links">
					<div className="about">
						<h3 className="secondary-font">About</h3>
						<ul>
							<li className="dark">Home </li>
							<li className="dark">Features </li>
							<li className="dark">FAQs</li>
							<li className="dark">Reviews</li>
							<li className="dark">Stories</li>
						</ul>
					</div>
					<div className="privacy">
						<h3 className="secondary-font">Privacy</h3>
						<ul>
							<li className="dark">Home </li>
							<li className="dark">Features </li>
							<li className="dark">FAQs</li>
							<li className="dark">Reviews</li>
							<li className="dark">Stories</li>
						</ul>
					</div>
				</div>
				{/* contact us section */}
				<div className="contact">
					<h3 className="secondary-font">Contact Us</h3>
					<div className="contact-info">
						<p className="dark">+01 234 567 8910 </p>
						<p className="dark">shakir260@gmail.com</p>
					</div>
					<div className="contact-icons">
						<a href="#home" className="icon">
							<FaInstagram />
						</a>
						<a href="#home" className="icon">
							<FaLinkedinIn />
						</a>
						<a href="#home" className="icon">
							<FaFacebookF />
						</a>
						<a href="#home" className="icon">
							<FaTwitter />
						</a>
					</div>
				</div>
			</div>
			<hr className="line" />
			{/* bottom start */}
			<div className="bottom">
				<div className="copy">
					<p className="dark">
						&copy; Copyright 2021 arshakir.com.All rights reserved.
					</p>
				</div>
				<div className="copy-link">
					<a className="dark" href="#home">
						Contact Us
					</a>
					<a className="dark" href="#home">
						Terms
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
