import React, { useState } from "react";
import { BsCart2, BsPerson, BsSearch } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import "./Nav.css";

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="nav">
			<div className="nav-logo">
				<h1>
					SUNNY <sup>TM</sup>
				</h1>
			</div>
			<div className={`nav-items ${isOpen ? "active" : ""}`}>
				<AiOutlineClose className="nav-close" onClick={toggleNav} />
				<ul>
					<li className="nav-item active">home</li>
					<li className="nav-item">about us</li>
					<li className="nav-item">products</li>
					<li className="nav-item">faqs</li>
					<li className="nav-item">contact us</li>
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
