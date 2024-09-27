import React, { useState } from "react";

import img1 from "../assets/fondo-1.png";
import img2 from "../assets/fondo-2.png";
import img3 from "../assets/fondo-3.png";
import { motion, useAnimation } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

import Fixbar from "../components/Fixbar";
import { BiHomeAlt2 } from "react-icons/bi";
import TransitionLink from "../utils/TransitionLink";


const items = [
  {
    img: img1,
    title: "Perché il fondo?",
    text: "Il fondo è libertà. È il momento in cui smetti di aggrapparti a ciò che il mondo ti dice che dovresti essere, e inizi a vedere chi sei veramente. Perché solo quando hai perso tutto, sei finalmente libero di fare qualsiasi cosa.",
  },
  {
    img: img2,
    title: "Le motivazioni",
    text: "Toccare il fondo è l’atto di demolizione necessario, è ripulire il terreno per poi ricostruire dalle radici. Solo quando non resta più nulla, sei libero di diventare ciò che vuoi",
  },
  {
    img: img3,
    title: "Perché noi?",
    text: "Perché crediamo nella trasparenza e nell'onestà. Abbiamo imparato che solo affrontando la realtà senza maschere si può costruire qualcosa di solido e duraturo.",
  },
];

const Fondo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(0)
  const controls = useAnimation();

  // Funzione per cambiare slide manualmente (con il pulsante)
  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
  };

  // Funzione per gestire lo swipe
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      // Swipe a sinistra
      nextSlide();
    } else if (info.offset.x > 50) {
      // Swipe a destra
      const prevIndex =
        currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      setCurrentIndex(prevIndex);
    }
  };

  const handleClick = (dir) => {
    if(dir === 'left'){
      if(currentIndex > 0){
        const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        setActive(1)
      } 
    } else {
      nextSlide()
      setActive(0)
    }
  }

  return (
    <div className="pt-10 pb-[100px]">
      <Fixbar
        links={[
          {
            icon: <BiHomeAlt2 className="w-[28px] h-[28px] text-white" />,
            link: "home",
          },
          {
            icon: <FaArrowLeftLong className="w-[28px] h-[28px] text-white" />,
            onClick: () => handleClick("left"),
            active: active === 1
          },
          {
            icon: <FaArrowRightLong className="w-[28px] h-[28px] text-white" />,
            onClick: () => handleClick("right"),
            active: active === 0
          },
        ]}
      />

      <div className="flex flex-row-reverse items-center justify-between">
        <h1 className="text-left mx-2 font-bold font-gothic text-2xl text-primary-dark">
        Viribus <span className="text-primary-light">Unitis</span> 2.0
        </h1>
        <TransitionLink href="/home" className="pl-4">
          <FaArrowLeftLong className="text-3xl font-gothic text-primary-dark" />
        </TransitionLink>
      </div>
      <motion.div
        key={currentIndex}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        // animate={controls}
        // Inizializzazione e animazione di entrata/uscita con scaling e fade
        initial={{ scale: 0.8 }} // Partenza con trasparenza e scalata ridotta
        animate={{ scale: 1 }} // Entrata a piena opacità e dimensione
        //  exit={{ opacity: 0, scale: 1.2 }}    // Uscita con aumento leggero della scala

        // Transizione più fluida
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{
          width: "100%",
          padding: "20px",
        }}
      >
        <img src={items[currentIndex].img} alt="" />
        <div className="flex items-center justify-center gap-2 mt-2 mb-6">
          <div
            className={`w-3 h-3 rounded-full ${
              currentIndex === 0 ? "bg-primary-dark" : "bg-[#D9D9D9]"
            }`}
          />
          <div
            className={`w-3 h-3 rounded-full ${
              currentIndex === 1 ? "bg-primary-dark" : "bg-[#D9D9D9]"
            }`}
          />
          <div
            className={`w-3 h-3 rounded-full ${
              currentIndex === 2 ? "bg-primary-dark" : "bg-[#D9D9D9]"
            }`}
          />
        </div>
        <h2 className="text-3xl text-center font-gothic">
          {items[currentIndex].title}
        </h2>
        <p className="mt-10 text-sm text-center">
          {items[currentIndex].text}
        </p>
      </motion.div>
    </div>
  );
};

export default Fondo;
