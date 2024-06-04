import React from "react"

interface HeroProps {
    title: string;
    text: string;
}

const Hero: React.FC<HeroProps> = ({title, text}) => {
    return (
        <div className="text-white 2xl:container mx-auto py-4 px-3 lg:h-96 h-48 flex flex-col justify-center md:items-start items-center md:text-start text-center lg:gap-10 gap-5">
            <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-xl lg:font-bold font-semibold">{title}</h1>
            <p className="lg:text-4xl md:text-2xl sm:text-xl text-base">{text}</p>
        </div>
    )
}

export default Hero;