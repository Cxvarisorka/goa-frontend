import React from "react";
import SliderComp from "../components/Slider";


const HomePage: React.FC = () => {
    const sliderContent = [
        <div key="1" className="p-4 bg-blue-200 h-full">Slide 1 Content</div>,
        <div key="2" className="p-4 bg-red-200 h-full">Slide 2 Content</div>,
        <div key="3" className="p-4 bg-green-200 h-full">Slide 3 Content</div>,
    ];
    return (
        <main className="2xl:container mx-auto py-4 px-3">
            <section>
                <SliderComp slidesToShow={1} autoplay={true} content={sliderContent}></SliderComp>
            </section>
            
        </main>
    )
}

export default HomePage;