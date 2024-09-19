import React from "react";
import heroImg from '../assets/hero.png'

const Hero = () => {
  return (
    <div className="w-full relative h-[260px] rounded-3xl">
      <img src={heroImg} className="w-full h-full object-cover rounded-3xl"  alt="" />
      <div className="absolute top-[30%] left-[50%] translate-x-[-50%]">
        <h1 className="text-8xl text-primary-dark text-center font-gothic">
          Viribus <span className="text-primary-light">Unitis</span> 2.0
        </h1>
        <p className="text-primary-dark mt-3 text-center">
          Il primo passo verso il fondo.
        </p>
      </div>
    </div>
  );
};

export default Hero;
