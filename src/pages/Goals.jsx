import React, { useState } from "react";

import img1 from "../assets/goals/goal-1.png";
import img2 from "../assets/goals/goal-2.png";
import img3 from "../assets/goals/goal-3.png";
import { motion, useAnimation } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

import Fixbar from "../components/Fixbar";
import { BiHomeAlt2 } from "react-icons/bi";


const items = [
  {
    img: img3,
    title: "I Distributori di acqua",
    text: "L’introduzione dei distributori di acqua è fondamentale per promuovere salute, sostenibilità e risparmio. Fornire acqua potabile facilmente accessibile aiuta a migliorare l’idratazione, aumentando concentrazione e benessere. Sul piano ambientale, riduce l’uso di bottiglie di plastica monouso, contribuendo a diminuire i rifiuti. Infine, è una scelta economica: i costi di gestione sono inferiori rispetto all’acquisto continuo di bottiglie. In breve, i distributori di acqua offrono una soluzione semplice e sostenibile per migliorare la qualità della vita e ridurre l’impatto ambientale. Motivi per i quali vorremo riuscire ad introdurre i distributori nel nostro contesto scolastico.",
  },
  {
    img: img2,
    title: "Le motivazioni",
    text: "",
  },
  {
    img: img3,
    title: "Perché noi?",
    text: "",
  },
];

const Goals = () => {
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
    <div className="pt-10 bg-[#F8F8EE] min-h-[100vh]">
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

      <h1 className="text-left mx-2 font-bold font-gothic text-2xl text-primary-dark">
      Viribus <span className="text-primary-light">Unitis</span> 2.0
      </h1>
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
        <img src={items[currentIndex].img} className="w-[421px] h-[412px] object-cover" alt="" />
        <h2 className="text-3xl text-center font-gothic">
          {items[currentIndex].title}
        </h2>
        <p className="mt-10 text-sm text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          ullam, totam ad, suscipit maxime, nobis debitis consequatur odio eum
          facilis officia expedita qui doloribus nesciunt quis molestias
          consectetur repudiandae. Est!
        </p>
      </motion.div>
    </div>
  );
};

export default Goals;