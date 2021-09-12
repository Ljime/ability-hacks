import Heading from './Heading.js'
import classes from "./Banner.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css" 
import { Carousel } from "react-responsive-carousel"
import blue1 from '../assets/blue1.jpg'
import blue2 from "../assets/blue2.jpg"
import blue3 from "../assets/blue3.png"
import blue4 from "../assets/blue4.jpg"
export default function Banner(props) {
	return (
		<div className={classes.banner}>
			<Heading>The Best Place To Hear The News!</Heading>
			<Carousel
				autoPlay
				infiniteLoop
				showIndicators={false}
				showThumbs={false}
				showStatus={false}
				showArrows={false}
			>
				<div>
					<img src={blue3} alt="3"></img>
				</div>
				<div>
					<img src={blue1} alt="1"></img>
				</div>
				<div>
					<img src={blue4} alt="4"></img>
				</div>
				<div>
					<img src={blue2} alt="2"></img>
				</div>
			</Carousel>
		</div>
	)
}
