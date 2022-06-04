import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import Img1 from "../../assets/customer1.png";
import Img2 from "../../assets/customer2.png";
import Img3 from "../../assets/customer3.png";
import Img4 from "../../assets/customer4.png";
import Customer from "./Customer";
import "./Story.css";

const Story = () => {
	return (
		<div className="story container-md">
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Customer
						img={Img1}
						name="Dragos Gontariu"
						title="Mareting Manager"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Customer
						img={Img2}
						name="Emily grant"
						title="Product Advisor"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Customer
						img={Img3}
						name="John Davidson"
						title="Product Distributor"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Customer
						img={Img4}
						name="Sabastine Moore"
						title="Managing Director"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Story;
