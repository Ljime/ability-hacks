import Heading from './Heading.js'
import classes from "./Banner.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css" 
import { Carousel } from "react-responsive-carousel"
import kanna1 from '../assets/kanna1.jpg'
import kanna2 from '../assets/kanna2.jpg'

export default function Banner() {
	return (
        <div className={classes.banner}>
            <Heading>
                The Best Place For The Visually Impaired To Hear Their News!
            </Heading>
            <Carousel autoPlay infiniteLoop showIndicators={false} showThumbs={false} showStatus={false} showArrows={false}>
                <div>
                    <img src={kanna1} alt='1'></img>
                </div>
                <div>
                    <img src={kanna2}alt='2'></img>
                </div>
            </Carousel>
        </div>
    )
}
