import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderCompProps {
    slidesToShow: number;
    autoplay: boolean;
    content: React.ReactNode[];
}

const SliderComp: React.FC<SliderCompProps> = ({slidesToShow, autoplay, content}) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow,
        slidesToScroll: 1,
        autoplay,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false
    };
    return (
        <div className="slider-container -z-10">
            <Slider {...settings}>
                {...content}
            </Slider>
        </div>
    )
}

export default SliderComp