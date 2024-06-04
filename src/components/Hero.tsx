import React from "react"
import { useTranslation } from "react-i18next";

interface HeroProps {
    title: string;
    text: string;
}

const Hero: React.FC<HeroProps> = ({title, text}) => {
    const { t } = useTranslation();


    return (
        <div className="text-white 2xl:container mx-auto py-4 px-3 lg:h-96 h-48 flex">
            <div className="flex flex-col justify-center md:items-start items-center md:text-start text-center lg:gap-10 gap-5 md:w-4/5">
                <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl lg:font-bold font-semibold">{t(title)}</h1>
                <p className="lg:text-2xl md:text-xl sm:text-lg text-base">{t(text)}</p> 
            </div>
            
        </div>
    )
}

export default Hero;