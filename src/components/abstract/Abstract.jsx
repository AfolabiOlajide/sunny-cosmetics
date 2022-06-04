import React from "react";

import Button from "../../UI/Button";
import "./Abstract.css";

const Abstract = () => {
	return (
		<div className="abstract container-md">
			<div className="text">
				<h1>Enough talk, let's make you look beautiful</h1>
				<p>
					There are many variations of passages of lorem Ipsum
					available, but the
				</p>
			</div>
			<div className="cta">
				<Button className="normal">Let's Get Started</Button>
			</div>
		</div>
	);
};

export default Abstract;
