import React from "react";

import PieChart from "../../assets/pie-chart.png";
import WhyUseUs from "../../assets/why-use-us-img.png";
import Button from "../../UI/Button";
import "./Learn.css";

const Learn = () => {
	return (
		<div className="learn container-lg">
			<div className="section1">
				<div className="titles">
					<h4 className="dark">Why Choose Us ?</h4>
					<h1>
						How to use ? <br /> learn more details.
					</h1>
				</div>
				<div className="rate">
					<div className="rate-img">
						<img src={PieChart} alt="" />
					</div>
					<div className="rate-info">
						<span className="dark">Dose not contain alcohol.</span>
						<span>PH 3.5</span>
					</div>
				</div>
			</div>
			<div className="section2">
				<div className="section2-image">
					<img src={WhyUseUs} alt="" />
				</div>
				<div className="instructions">
					<h3>Apply & Ingredients</h3>
					<p className="dark">
						Give your face that gorgeous sun-kissed look with
						high-quality bronzers! Makeup city is a house to
						international brands that sell natural-looking bronzers.
						Bronzing is about giving your face the perfect dimension
						and warmth.
					</p>
					<p className="dark">
						If you are looking for ways to warm up your pale skin,
						apply bronzer, and see the difference. Bronzer face
						seems the smart way to add glamour to your otherwise
						simplistic look.
					</p>
					<Button className="primary">Learn More</Button>
				</div>
			</div>
		</div>
	);
};

export default Learn;
