import Slider from 'react-slick'
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { motion } from 'motion/react'

const NextArrow = ({ onClick }) => (
    <motion.button
        type="button"
        className="absolute top-1/2 right-2 transform -translate-y-1/2  text-black z-10 "
        onClick={onClick}
    >
        <FaChevronCircleRight className='text-rose-100' size={24} />
    </motion.button>
);

const PrevArrow = ({ onClick }) => (
    <motion.button
        type="button"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black z-10"
        onClick={onClick}
    >
        <FaChevronCircleLeft size={24} className='text-rose-100' />
    </motion.button>
);

const SliderContainer = ({ children }) => {
    const settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (<Slider {...settings}>
        {children}
    </Slider>)
}

export default SliderContainer