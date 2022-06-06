import React, { useState, useEffect } from "react";
import { BsCart2, BsPerson, BsSearch } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import "./Nav.css";
import Logo from "./Logo";

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScroll, setIsScroll] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		});
	}, []);

	return (
		<div className={`nav ${isScroll ? "sticky" : ""}`}>
			<Logo />
			<div className={`nav-items ${isOpen ? "active" : ""}`}>
				<AiOutlineClose className="nav-close" onClick={toggleNav} />
				<ul>
					<a href="#home" onClick={toggleNav}>
						<li className="nav-item">home</li>
					</a>
					<a href="#about" onClick={toggleNav}>
						<li className="nav-item">about us</li>
					</a>
					<a href="#products" onClick={toggleNav}>
						<li className="nav-item">products</li>
					</a>
					<a href="#faqs" onClick={toggleNav}>
						<li className="nav-item">faqs</li>
					</a>
					<a href="#contact" onClick={toggleNav}>
						<li className="nav-item">contact us</li>
					</a>
				</ul>
			</div>
			<div className="nav-icons">
				<BsSearch className="nav-icon" />
				<div className="cart">
					<BsCart2 className="nav-icon" />
					<div className="notification">2</div>
				</div>
				<BsPerson className="nav-icon" />
				<HiMenuAlt3 className="nav-icon ham" onClick={toggleNav} />
			</div>
		</div>
	);
};

export default Nav;
