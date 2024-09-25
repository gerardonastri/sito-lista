import React, { useState } from "react";

import img from '../assets/domande.jpeg'
import { motion, AnimatePresence } from "framer-motion";

const BoxDomanda = ({text}) => (
    <div className="w-full py-8 px-5 shadow-2xl rounded-3xl">
        <h3 className="text-gray-800 font-[500] text-center mb-2 text-xl">Domanda 1</h3>
        <p className="text-gray-700 text-md text-center">{text}</p>
    </div>
)

const Domande = () => {


    const domande = [
        "come mai avete scelto di candidarvi come rappresentanti?",
        "Qual è il vostro obiettivo principale?",
        "Come intendete coinvolgere gli studenti nella vostra campagna?",
        "Quali sono le tue priorità principali per migliorare la vita studentesca?"
    ]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showOtherText, setShowOtherText] = useState(false)

  // Funzione per andare alla prossima domanda
  const nextQuestion = () => {
    if (currentQuestionIndex < domande.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Funzione per tornare alla domanda precedente
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="pt-8">
      <h1 className="text-primary-dark text-6xl font-gothic text-center">
        Virbus <span className="text-primary-light">Unitis</span> 2.0
      </h1>
      <div className={`${showOtherText ? "h-[250px]" : "h-[150px]"} w-[90%] mx-auto mt-10`}>
      <AnimatePresence mode="wait" className="h-full">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
         className="w-full h-full flex flex-col items-center justify-center shadow-2xl rounded-3xl"
         onClick={() => setShowOtherText(prev => !prev)}
        >
           <h3 className="text-gray-800 font-[500] text-center mb-2 text-xl">Domanda {currentQuestionIndex + 1}</h3>
           <p className="text-gray-700 text-md text-center">{domande[currentQuestionIndex]}</p>
           <p className={`${showOtherText ? "block" : "hidden"} text-center mt-4 mx-2 text-primary-dark text-md text-semibold`}>L’incompetenza e il non rispetto stanno diventanto un “must” in questa scuola e abbiamo scelto di provare a ridare dignità agli studenti</p>
        </motion.div>
      </AnimatePresence>
      </div>
      <div className="mt-4">
        <img src={img} alt="q & a" className="w-full h-[310px] object-cover" />
      </div>
      <div className="mt-12 flex flex-col items-center gap-2">
        <button   onClick={nextQuestion} disabled={currentQuestionIndex === domande.length - 1} className="bg-primary-dark rounded-[1.5rem] text-white py-2 px-8">Prossima domanda</button>
        <button onClick={prevQuestion} disabled={currentQuestionIndex === 0} className="text-gray-700 text-center">Indietro</button>
      </div>
    </div>
  );
};

export default Domande;
