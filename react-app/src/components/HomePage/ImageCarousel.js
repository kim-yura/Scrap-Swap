import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './ImageCarousel.css';

const ImageCarousel = () => {
	return (
		<div className='carousel'>
			<Carousel showThumbs={false} showArrows={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={4000}>
				<div>
					<img src='/images/carousel_1.jpg'
					alt='Carousel 1: Multi-colored yarns'/>
				</div>
				<div>
					<img src='/images/carousel_2.jpg'
					alt='Carousel 2: Yarns in shades of green'/>
				</div>
				<div>
					<img src='/images/carousel_3.jpg'
					alt='Carousel 3: Yarns in shades of brown'
					style={{transform: 'scaleX(-1)'}}/>
				</div>
			</Carousel>
			<div className='overlay'>
				<h1 className='overlay-title'>SWAP YOUR SCRAPS!</h1>
				<h3 className='overlay-text'>Sometimes, we just need a few yards of a certain yarn. Scrap Swap is the hub for you to swap scraps and meet other yarny crafters!</h3>
			</div>
		</div>
	)
}

export default ImageCarousel;
