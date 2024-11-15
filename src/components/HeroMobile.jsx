import React from "react";

import img from "../assets/sam-3d.png";
import { FaArrowRight } from "react-icons/fa";
import TransitionLink from "../utils/TransitionLink";

import Fixbar from './Fixbar'
import { BiHomeAlt2 } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";

const HeroMobile = () => {
  // Crea un nuovo oggetto Date usando i componenti estratti
  const targetDate = new Date(2024, 10, 24, 10, 0, 0);
  const now = new Date();

  // Differenza in millisecondi
  const diffInMillis = targetDate - now;

  // Conversione in giorni, ore, minuti e secondi
  const millisecondsInADay = 24 * 60 * 60 * 1000;
  const millisecondsInAnHour = 60 * 60 * 1000;
  const millisecondsInAMinute = 60 * 1000;

  // Calcola i giorni
  const days = Math.floor(diffInMillis / millisecondsInADay);

  // Calcola le ore rimanenti (tolti i giorni)
  const hours = Math.floor(
    (diffInMillis % millisecondsInADay) / millisecondsInAnHour
  );

  // Calcola i minuti rimanenti (tolti i giorni e le ore)
  const minutes = Math.floor(
    (diffInMillis % millisecondsInAnHour) / millisecondsInAMinute
  );

  return (
    <div className="md:hidden h-[100vh] py-[10px]">
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
      <div>
        <img
          src={img}
          className="w-[430px] h-[430px] object-cover"
          alt="zio sam"
        />
        <h2 className="text-center mt-5 text-6xl text-primary-dark">
          {days}G {hours}:{minutes}H
        </h2>
        <p className="text-primary-dark text-sm text-center">
          Il primo passo verso il fondo....
        </p>
      </div>
      <TransitionLink
        href="/home"
        className="bg-primary-dark hover:bg-[#5f1531] p-5 rounded-3xl w-fit mx-auto flex items-center justify-center mt-[30px]"
      >
        <FaArrowRight className="text-white text-2xl" />
      </TransitionLink>
    </div>
  );
};

export default HeroMobile;
