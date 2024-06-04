import React from "react";
import SliderComp from "../components/Slider";
import Hero from "../components/Hero";
// import slider1Img from '../../public/assets/ailecture1.png'


const HomePage: React.FC = () => {
    return (
        <main>
            <section className="bg-primary-black">
                <Hero title="Home" text="Goal Oriented Academy, Learn Programing"/>
            </section>
            
        </main>
    )
}

export default HomePage;