import React from "react";

import { aboutDetails } from "../constants/about";
import { useParams } from "react-router-dom";
import Fixbar from "../components/Fixbar";
import { BiHomeAlt2 } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";

const AboutDetails = () => {
  const { id } = useParams();

  return (
    <div className="pt-8">
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

      <h3 className="text-primary-dark text-2xl font-gothic text-left mx-2">
        Virbus <span className="text-primary-light">Unitis</span> 2.0
      </h3>
      <h1 className="text-primary-dark mt-16 text-4xl font-gothic text-center mb-3">
        {aboutDetails[id - 1].name}
      </h1>
      <img
        src={aboutDetails[id - 1].img}
        className="block mx-auto rounded-full w-[200px] h-[200px] object-cover"
        alt=""
      />
      <h3 className="text-2xl text-center mt-8 text-primary-dark font-bold">
        Rappresentante
      </h3>
      <p className="text-center mt-2 max-w-[90%] mx-auto text-md">
        {aboutDetails[id - 1].text}
      </p>
    </div>
  );
};

export default AboutDetails;
