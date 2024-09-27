import React, { useEffect, useRef, useState } from "react";

import img from "../assets/sam-3d.png";
import { SlArrowRight } from "react-icons/sl";
import { motion, useAnimation } from "framer-motion";
import { RxDoubleArrowRight } from "react-icons/rx";

import TransitionLink from "../utils/TransitionLink";
import goalImg1 from "../assets/goals/goal-1.png";
import Fixbar from "../components/Fixbar";

//icons
import { BiHomeAlt2 } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
//goals
import img1 from "../assets/goals/goal-1.png";
import img2 from "../assets/goals/goal-2.png";
import img3 from "../assets/goals/goal-3.png";
import img4 from "../assets/goals/goal-4.png";
import img5 from "../assets/goals/goal-5.png";
import img6 from "../assets/goals/goal-6.png";
const goals = [
  {
    img: img1,
    title: "Portale scolastico per studenti",
    text: "Un portale accessibile solo agli alunni dove poter gestire gli eventi, condividere informazioni, opinioni e suggerimenti",
    bg: "#EBF0F4",
  },
  {
    img: img2,
    title: "I Distributori di acqua",
    text: "L’introduzione dei distributori di acqua è fondamentale per promuovere salute, sostenibilità e risparmio. Fornire acqua potabile facilmente accessibile aiuta a migliorare l’idratazione, aumentando concentrazione e benessere. Sul piano ambientale, riduce l’uso di bottiglie di plastica monouso, contribuendo a diminuire i rifiuti. Infine, è una scelta economica: i costi di gestione sono inferiori rispetto all’acquisto continuo di bottiglie. In breve, i distributori di acqua offrono una soluzione semplice e sostenibile per migliorare la qualità della vita e ridurre l’impatto ambientale. Motivi per i quali vorremo riuscire ad introdurre i distributori nel nostro contesto scolastico.",
    bg: "#F8F8EE",
  },
  {
    img: img3,
    title: "Distributori di assorbenti",
    text: "L'introduzione/mantenimento dei distributori di assorbenti nelle scuole è essenziale per garantire benessere e inclusività. Avere accesso gratuito e immediato ai prodotti igienici riduce l'ansia e l'imbarazzo. Questo aiuta a promuove un ambiente scolastico più equo. Inoltre, fornisce un supporto concreto alle studentesse. Introdurre/mantenere i distributori nella nostra scuola è un passo verso l'uguaglianza e il rispetto dei bisogni di tutte le studentesse.",
    bg: "#F4FBF3",
  },
  {
    img: img4,
    title: "Eventi Scolastici",
    text: "Gli eventi scolastici sono sicuramente una delle cose di cui la rappresentanza scolastica si deve curare di più, noi abbiamo in mente di realizzare eventi con collaborazioni che permetteranno di guadagnare fondi che andranno destinati a loro volta per la realizzazione di altri eventi tra cui la GDA. Gli eventi che abbiamo in mente di realizzare dovranno essere unici e nonostante le collaborazioni saranno completamente organizzati da noi.",
    bg: "#E9F8FB",
  },
  {
    img: img5,
    title: "Annuario online (costo 0)",
    text: "L’annuario scolastico è sempre stato un obiettivo delle scorse rappresentanze ma i costi di produzione di un annuario sono molto elevati, noi riusciremo a creare un annuario a costo zero completamente online e in pdf in maniera da ridurre i costi e poterlo offrire a tutti gli studenti in maniera completamente gratuita.",
    bg: "#FDFDFD",
  },
  {
    img: img6,
    title: "Partita di istituto ed eventi sportivi",
    text: "Gli eventi sportivi hanno sempre caratterizzato il fascino delle nostre rappresentanze e continuerà a farlo... la partita d’istituto dovrà essere svolta durante l’assemblea d’istituto con le solite modalità ma con l’introduzione di contenuti digitali che verranno pubblicati dopo e durante la partita.",
    bg: "#FDFDFD",
  },
];

const AboutCard = ({ title, text, bg, link }) => {
  return (
    <TransitionLink
      href={`/${link}`}
      className={`${
        bg === "white" ? "bg-white shadow-2xl" : "bg-primary-dark"
      } block flex-1 w-full rounded-3xl p-4`}
    >
      <h3
        className={`${
          bg === "white" ? "text-primary-dark" : "text-white"
        } font-semibold text-xl`}
      >
        {title}
      </h3>
      <p
        className={`${
          bg === "white" ? "text-primary-dark" : "text-white"
        } text-sm mt-2`}
      >
        {text}
      </p>
    </TransitionLink>
  );
};

const GoalCard = ({ title, bg, img, link }) => {
  return (
    <motion.a
      href={link}
      style={{ background: bg }}
      className="relative flex flex-col justify-between items-start min-w-[200px] min-h-[200px] rounded-[20px] shadow-2xl overflow-hidden p-[20px] text-center"
    >
      <img
        src={img}
        className="w-[120px] h-[120px] object-cover absolute bottom-0 right-[-15%]"
        alt="goal"
      />
      <div className="z-10">
        <h3 className="font-semibold text-xl text-left text-primary-dark">
          {title}
        </h3>
        {/* <p className="text-sm max-w-[80%] text-center">{text}</p> */}
      </div>
      <TransitionLink
        href="/goals"
        className="bg-primary-dark p-3 rounded-full flex items-center justify-center w-fit"
      >
        <RxDoubleArrowRight className="text-white text-3xl" />
      </TransitionLink>
    </motion.a>
  );
};

const HomeMobile = () => {
  const controls = useAnimation();
  const carouselRef = useRef();
  const [carouselWidth, setCarouselWidth] = useState(0);

  // Creiamo una copia duplicata per l'effetto infinito
  const duplicatedGoals = [...goals, ...goals];

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      setCarouselWidth(totalWidth - visibleWidth);
    }
  }, [carouselRef]);

  const handleDragEnd = (event, info) => {
    // Se il carosello è trascinato quasi alla fine, riportalo all'inizio
    if (Math.abs(info.point.x) >= carouselWidth) {
      controls.start({ x: 0, transition: { duration: 0 } });
    }
  };

  return (
    <div className="py-10 pb-[100px]">
      <Fixbar
        links={[
          {
            icon: <BiHomeAlt2 className="w-[28px] h-[28px] text-white" />,
            link: "home",
          },
          {
            icon: <CiTimer className="w-[28px] h-[28px] text-white" />,
            link: "",
          },
          {
            icon: <FaPeopleGroup className="w-[28px] h-[28px] text-white" />,
            link: "about",
          },
        ]}
      />
      <img
        src={img}
        className="w-[487px] h-[487px] object-cover"
        alt="zio sam"
      />
      <h1 className="text-primary-dark text-6xl font-gothic text-center">
        Viribus <span className="text-primary-light">Unitis</span> 2.0
      </h1>
      <p className="text-sm text-primary-dark text-center">
        il primo passo verso il fondo...
      </p>

      <TransitionLink
        href="/fondo"
        className="mt-8 block mx-auto w-fit py-3 px-8 gradient-1 text-white rounded-3xl"
      >
        Perché il fondo?
      </TransitionLink>
      <div className="px-[1rem] w-full flex gap-5 mt-[60px]">
        <AboutCard
          link="domande"
          title="Q&A"
          text="delle domande alle quali potrebbe piacerti vederci rispondere"
          bg="white"
        />
        <AboutCard
          link="about"
          title="Noi"
          text="delle informazioni su di noi e su cosa facciamo per pensare di poter essere votati"
          bg="primary-dark"
        />
      </div>
      <div className="mt-10 px-[1rem] flex items-center justify-between">
        <h3 className="text-semibold">Alcuni dei nostri obiettivi</h3>
        <a
          href="/goals"
          className="text-primary-dark font-semibold flex items-center gap-1"
        >
          vedi tutti <SlArrowRight />
        </a>
      </div>
      <div className="p-[20px] overflow-hidden" ref={carouselRef}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -carouselWidth }}
          className="flex gap-[20px] cursor-grab pr20"
          animate={controls}
          onDragEnd={handleDragEnd} // Aggiungiamo l'handler per l'evento di fine trascinamento
        >
          {goals.map((card, index) => (
            <motion.div className="card" key={index}>
              <GoalCard
                title={card.title}
                bg={card.bg}
                img={card.img}
                link="/goals"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeMobile;
