import { div } from "framer-motion/client";
import React from "react";

import img1 from '../assets/about-1.png'
import img2 from '../assets/about-2.png'

const AboutCard = ({img, name, link}) => (
    <a href={`/about/${link}`} className="w-full rouned-t-[3rem]">
        <img src={img} className="w-full h-[250px] object-cover rounded-t-[3rem]" alt="" />
        <div className="bg-primary-dark w-full py-2 rounded-b-xl">
            <h3 className="text-white text-xl font-bold text-center">{name}</h3>
            <p className="max-w-[80%] mx-auto mt-1 text-[#f2f4f3] text-sm text-center">Canditato rappresentante d'istituto 2024 conn Virinus Unitis</p>
        </div>
    </a>
)

const About = () => {
  return (
    <div className="pt-8">
      <h1 className="text-primary-dark text-3xl font-gothic text-center">
        Virbus <span className="text-primary-light">Unitis</span> 2.0
      </h1>
      <div className="flex mt-8 flex-col items-center max-w-[90%] mx-auto">
        <h2 className="text-5xl text-primary-dark font-gothic mb-2">Noi</h2>
        <div className="flex flex-col w-full gap-5">
            <AboutCard link="1" img={img2} name="Sabatino De Rosa"  />
            <AboutCard link="2" img={img1} name="Gerardo Nastri" />
        </div>
      </div>
    </div>
  );
};

export default About;