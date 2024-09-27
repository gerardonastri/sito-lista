import React, { useState } from "react";

import img from "../assets/domande.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

import Fixbar from "../components/Fixbar";
import { BiHomeAlt2 } from "react-icons/bi";
import TransitionLink from "../utils/TransitionLink";

const BoxDomanda = ({ text }) => (
  <div className="w-full py-8 px-5 shadow-2xl rounded-3xl">
    <h3 className="text-gray-800 font-[500] text-center mb-2 text-xl">
      Domanda 1
    </h3>
    <p className="text-gray-700 text-md text-center">{text}</p>
  </div>
);

const Domande = () => {
  const domande = [
    "come mai avete scelto di candidarvi come rappresentanti?",
    "Qual è il vostro obiettivo principale?",
    "Come intendete coinvolgere gli studenti nella vostra campagna?",
    "Quali sono le tue priorità principali per migliorare la vita studentesca?",
  ];
  const risposte = [
    "L’incompetenza e il non rispetto stanno diventanto un “must” in questa scuola e abbiamo scelto di provare a ridare dignità agli studenti",
    "I nostri obiettivi hanno tutti la stessa importanza. Visitate la pagina obiettivi per scoprire quali sono.",
    "Il nostro piano prevede uno sportello di ascolto per gli studenti e idee per nuove realizzazioni.",
    "Vogliamo ridare un'unità studentesca persa in questi anni attraverso una organizzazione di eventi SOLO per la scuola.",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showOtherText, setShowOtherText] = useState(false);

  const [active, setActive] = useState(0);
  // Funzione per andare alla prossima domanda
  const nextQuestion = () => {
    if (currentQuestionIndex < domande.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setActive(0);
    }
  };

  // Funzione per tornare alla domanda precedente
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setActive(1);
    }
  };

  return (
    <div className="pt-8">
      <Fixbar
        links={[
          {
            icon: <BiHomeAlt2 className="w-[28px] h-[28px] text-white" />,
            link: "home",
          },
          {
            icon: <FaArrowLeftLong className="w-[28px] h-[28px] text-white" />,
            onClick: () => prevQuestion(),
            active: active === 1,
          },
          {
            icon: <FaArrowRightLong className="w-[28px] h-[28px] text-white" />,
            onClick: () => nextQuestion(),
            active: active === 0,
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
      <div
        className={`${
          showOtherText ? "h-[250px]" : "h-[150px]"
        } w-[90%] mx-auto mt-10`}
      >
        <AnimatePresence mode="wait" className="h-full">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col items-center justify-center shadow-2xl rounded-3xl"
            onClick={() => setShowOtherText((prev) => !prev)}
          >
            <h3 className="text-gray-800 font-[500] text-center mb-2 text-xl">
              Domanda {currentQuestionIndex + 1}
            </h3>
            <p className="text-gray-700 text-md text-center">
              {domande[currentQuestionIndex]}
            </p>
            <p
              className={`${
                showOtherText ? "block" : "hidden"
              } text-center mt-4 mx-2 text-primary-dark text-md text-semibold`}
            >
              {risposte[currentQuestionIndex]}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-4">
        <img src={img} alt="q & a" className="w-full h-[310px] object-cover" />
      </div>
      {/* <div className="mt-12 flex flex-col items-center gap-2">
        <button
          onClick={nextQuestion}
          disabled={currentQuestionIndex === domande.length - 1}
          className="bg-primary-dark rounded-[1.5rem] text-white py-2 px-8"
        >
          Prossima domanda
        </button>
        <button
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
          className="text-gray-700 text-center"
        >
          Indietro
        </button>
      </div> */}
    </div>
  );
};

export default Domande;
