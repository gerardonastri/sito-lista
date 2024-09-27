import React, { useState } from "react";

import img1 from "../assets/goals/goal-1.png";
import img2 from "../assets/goals/goal-2.png";
import img3 from "../assets/goals/goal-3.png";
import img4 from "../assets/goals/goal-4.png";
import img5 from "../assets/goals/goal-5.png";
import img6 from "../assets/goals/goal-6.png";

import { motion, useAnimation } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

import Fixbar from "../components/Fixbar";
import { BiHomeAlt2 } from "react-icons/bi";
import TransitionLink from "../utils/TransitionLink";

const items = [
  {
    img: img1,
    title: "Portale scolastico per studenti",
    text: "Un portale accessibile solo agli alunni dove poter gestire gli eventi, condividere informazioni, opinioni e suggerimenti",
    bg: "#EBF0F4"
  },
  {
    img: img2,
    title: "I Distributori di acqua",
    text: "L’introduzione dei distributori di acqua è fondamentale per promuovere salute, sostenibilità e risparmio. Fornire acqua potabile facilmente accessibile aiuta a migliorare l’idratazione, aumentando concentrazione e benessere. Sul piano ambientale, riduce l’uso di bottiglie di plastica monouso, contribuendo a diminuire i rifiuti. Infine, è una scelta economica: i costi di gestione sono inferiori rispetto all’acquisto continuo di bottiglie. In breve, i distributori di acqua offrono una soluzione semplice e sostenibile per migliorare la qualità della vita e ridurre l’impatto ambientale. Motivi per i quali vorremo riuscire ad introdurre i distributori nel nostro contesto scolastico.",
    bg: "#F8F8EE"
  },
  {
    img: img3,
    title: "Distributori di assorbenti",
    text: "L'introduzione/mantenimento dei distributori di assorbenti nelle scuole è essenziale per garantire benessere e inclusività. Avere accesso gratuito e immediato ai prodotti igienici riduce l'ansia e l'imbarazzo. Questo aiuta a promuove un ambiente scolastico più equo. Inoltre, fornisce un supporto concreto alle studentesse. Introdurre/mantenere i distributori nella nostra scuola è un passo verso l'uguaglianza e il rispetto dei bisogni di tutte le studentesse.",
    bg: "#F4FBF3"
  },
  {
    img: img4,
    title: "Eventi Scolastici",
    text: "Gli eventi scolastici sono sicuramente una delle cose di cui la rappresentanza scolastica si deve curare di più, noi abbiamo in mente di realizzare eventi con collaborazioni che permetteranno di guadagnare fondi che andranno destinati a loro volta per la realizzazione di altri eventi tra cui la GDA. Gli eventi che abbiamo in mente di realizzare dovranno essere unici e nonostante le collaborazioni saranno completamente organizzati da noi.",
    bg: "#E9F8FB"
  },
  {
    img: img5,
    title: "Annuario online (costo 0)",
    text: "L’annuario scolastico è sempre stato un obiettivo delle scorse rappresentanze ma i costi di produzione di un annuario sono molto elevati, noi riusciremo a creare un annuario a costo zero completamente online e in pdf in maniera da ridurre i costi e poterlo offrire a tutti gli studenti in maniera completamente gratuita.",
    bg: "#FDFDFD"
  },
  {
    img: img6,
    title: "Partita di istituto ed eventi sportivi",
    text: "Gli eventi sportivi hanno sempre caratterizzato il fascino delle nostre rappresentanze e continuerà a farlo... la partita d’istituto dovrà essere svolta durante l’assemblea d’istituto con le solite modalità ma con l’introduzione di contenuti digitali che verranno pubblicati dopo e durante la partita.",
    bg: "#FDFDFD"
  },
];

const Goals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(0);
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
    if (dir === "left") {
      if (currentIndex > 0) {
        const prevIndex =
          currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        setActive(1);
      }
    } else {
      nextSlide();
      setActive(0);
    }
  };

  return (
    <div className={`pt-10 bg-[${items[currentIndex].bg}] min-h-[100vh] pb-[150px]`}>
      <Fixbar
        links={[
          {
            icon: <BiHomeAlt2 className="w-[28px] h-[28px] text-white" />,
            link: "home",
          },
          {
            icon: <FaArrowLeftLong className="w-[28px] h-[28px] text-white" />,
            onClick: () => handleClick("left"),
            active: active === 1,
          },
          {
            icon: <FaArrowRightLong className="w-[28px] h-[28px] text-white" />,
            onClick: () => handleClick("right"),
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
        <img
          src={items[currentIndex].img}
          className="w-[421px] h-[412px] object-cover"
          alt=""
        />
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

export default Goals;
