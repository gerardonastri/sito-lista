import React from "react";

import img from "../assets/sam-3d.png";
import { SlArrowRight } from "react-icons/sl";
import { motion } from "framer-motion";
import { RxDoubleArrowRight } from "react-icons/rx";

import TransitionLink from '../utils/TransitionLink'
import goalImg1 from "../assets/goals/goal-1.png";

const AboutCard = ({ title, text, bg, link }) => {
  return (
    <a
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
    </a>
  );
};

const GoalCard = ({ title, text, img, link }) => {
  return (
    <motion.div className="relative flex flex-col justify-between items-start min-w-[200px] min-h-[200px] bg-white rounded-[20px] shadow-2xl overflow-hidden p-[20px] text-center">
      <img src={img} className="w-[120px] h-[120px] object-cover absolute bottom-0 right-[-15%]" alt="goal" />
      <div className="z-10">
        <h3 className="font-semibold text-xl text-left text-primary-dark">{title}</h3>
        {/* <p className="text-sm max-w-[80%] text-center">{text}</p> */}
      </div>
      <a href="/goals" className="bg-primary-dark p-3 rounded-full flex items-center justify-center w-fit"><RxDoubleArrowRight className="text-white text-3xl" /></a>
    </motion.div>
  );
};

const HomeMobile = () => {
  const cards = [
    {
      title: "Distributori di acqua gratuiti",
      text: "la fondamentale importanza dei ditributori",
      link: "/goals",
      img: goalImg1,
    },
    {
      title: "Distributori di acqua gratuiti",
      text: "la fondamentale importanza dei ditributori",
      link: "/goals",
      img: goalImg1,
    },
    {
      title: "Distributori di acqua gratuiti",
      text: "la fondamentale importanza dei ditributori",
      link: "/goals",
      img: goalImg1,
    },
    {
      title: "Distributori di acqua gratuiti",
      text: "la fondamentale importanza dei ditributori",
      link: "/goals",
      img: goalImg1,
    },
  ];

  return (
    <div className="py-10">
      <img
        src={img}
        className="w-[487px] h-[487px] object-cover"
        alt="zio sam"
      />
      <h1 className="text-primary-dark text-6xl font-gothic text-center">
        Virbus <span className="text-primary-light">Unitis</span> 2.0
      </h1>
      <p className="text-sm text-primary-dark text-center">
        il primo passo verso il fonto...
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
      <div className="p-[20px] overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -600 }}
          className="flex gap-[20px] cursor-grab"
        >
          {cards.map((card, index) => (
            <motion.div className="card" key={index}>
              <GoalCard
                title={card.title}
                text={card.text}
                img={card.img}
                link={card.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeMobile;
