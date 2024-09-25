import React, { useState } from 'react'

import img1 from '../assets/fondo-1.png'
import img2 from '../assets/fondo-2.png'
import img3 from '../assets/fondo-3.png'
import { motion, useAnimation } from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


const items = [
    {
        img: img1,
        title: "Perché il fondo?",
        text: ""
    },
    {
        img: img2,
        title: "Le motivazioni",
        text: ""
    },
    {
        img: img3,
        title: "Perché noi?",
        text: ""
    }
]

const Fondo = () => {

   

  const [currentIndex, setCurrentIndex] = useState(0);
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
      const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <div className='pt-10'>
        <h1 className='text-center font-bold font-gothic text-2xl text-primary-dark'>Virbus <span className='text-primary-light'>Unitis</span> 2.0</h1>
        <motion.div
        key={currentIndex}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        // animate={controls}
         // Inizializzazione e animazione di entrata/uscita con scaling e fade
         initial={{  scale: 0.8 }} // Partenza con trasparenza e scalata ridotta
         animate={{  scale: 1 }}   // Entrata a piena opacità e dimensione
        //  exit={{ opacity: 0, scale: 1.2 }}    // Uscita con aumento leggero della scala
         
         // Transizione più fluida
         transition={{ duration: 0.4, ease: 'easeInOut' }} 
        style={{
          width: '100%',
          padding: '20px',
        }}
      >
        <img src={items[currentIndex].img} alt="" />
        <div className='flex items-center justify-center gap-2 mt-2 mb-6'>
            <div className={`w-3 h-3 rounded-full ${currentIndex === 0 ? "bg-primary-dark" : "bg-[#D9D9D9]"}`} />
            <div className={`w-3 h-3 rounded-full ${currentIndex === 1 ? "bg-primary-dark" : "bg-[#D9D9D9]"}`} />
            <div className={`w-3 h-3 rounded-full ${currentIndex === 2 ? "bg-primary-dark" : "bg-[#D9D9D9]"}`} />
        </div>
        <h2 className='text-3xl text-center font-gothic'>{items[currentIndex].title}</h2>
        <p className='mt-10 text-sm text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ullam, totam ad, suscipit maxime, nobis debitis consequatur odio eum facilis officia expedita qui doloribus nesciunt quis molestias consectetur repudiandae. Est!</p>
      </motion.div>


      <button
        onClick={nextSlide}
        style={{
          marginTop: '40px',
          padding: '10px 20px',
          borderRadius: '50%',
          backgroundColor: '#70183A',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
        }}
        className='mx-auto flex items-center justify-center'
      >
            <FaArrowRightLong className='text-white text-xl' />
      </button>
    </div>
  )
}

export default Fondo