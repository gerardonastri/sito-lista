import { useState } from "react";
import Hero from "../components/Hero";
import HeroMobile from "../components/HeroMobile";

import about1Img from "../assets/about-1.png";
import about2Img from "../assets/about-2.png";

function Home() {
  const [activeBox, setActiveBox] = useState(1);

  return (
    <div className="">
      <div className="hidden md:block w-[95%] lg:w-[1245px] mx-auto">
        <Hero />
        <div className="flex justify-center items-center">
          <div
            className={`w-3 h-3 rounded-full bg-primary-dark ${
              activeBox === 0 ? "scale-[1.8]" : ""
            }`}
          />
          <div className="w-6 h-[2px] bg-primary-dark" />
          <div
            className={`w-3 h-3 rounded-full bg-primary-dark ${
              activeBox === 1 ? "scale-[1.8]" : ""
            }`}
          />
          <div className="w-6 h-[2px] bg-primary-dark" />
          <div
            className={`w-3 h-3 rounded-full bg-primary-dark ${
              activeBox === 2 ? "scale-[1.8]" : ""
            }`}
          />
        </div>
        <div className="mt-[60px] flex justify-between items-start gap-10">
          <div
            className="bg-[#f8f8ee] py-3 px-5 cursor-pointer flex-1 rounded-[20px] shadow-lg flex flex-col items-center"
            onMouseOver={() => setActiveBox(0)}
          >
            <h4
              className={`text-primary-dark ${
                activeBox === 0 ? "font-bold text-2xl" : "font-[400] text-xl"
              } text-center`}
            >
              il fondo
            </h4>
            <h2 className="font-gothic font-bold text-4xl text-primary-light text-center my-[40px]">
              Il primo passo verso il fondo
            </h2>
            <button
              className={`py-2 px-4 ${
                activeBox === 0
                  ? "bg-primary-dark text-white border-none  mt-[30px]"
                  : "bg-white border border-primary-dark text-primary-dark"
              } rounded-[1.5rem]`}
            >
              scopri di più
            </button>
          </div>
          {/* SECONDO  */}
          <div
            className="bg-[#f8f8ee] py-3 px-5 cursor-pointer flex-1 rounded-[20px] shadow-lg flex flex-col items-center"
            onMouseOver={() => setActiveBox(1)}
          >
            <h4
              className={`text-primary-dark ${
                activeBox === 1 ? "font-bold text-2xl" : "font-[400] text-xl"
              } text-center`}
            >
              I nostri piani
            </h4>
            <ul className="my-[30px] list-disc flex flex-col gap-3">
              <li className="text-primary-light font-semibold text-lg">
                Distributori di acqua gratis
              </li>
              <li className="text-primary-light font-semibold text-lg">
                Distributori di assorbenti
              </li>
              <li className="text-primary-light font-semibold text-lg">
                Buona organizzazione GDA
              </li>
              <li className="text-primary-light font-semibold text-lg">
                Autogestione come si deve
              </li>
            </ul>
            <button
              className={`py-2 px-4 ${
                activeBox === 1
                  ? "bg-primary-dark text-white border-none mt-[30px]"
                  : "bg-white border border-primary-dark text-primary-dark"
              } rounded-[1.5rem]`}
            >
              scopri di più
            </button>
          </div>
          {/* TERZO  */}
          <div
            className="bg-[#f8f8ee] py-3 px-5 cursor-pointer flex-1 rounded-[20px] shadow-lg flex flex-col items-center"
            onMouseOver={() => setActiveBox(2)}
          >
            <h4
              className={`text-primary-dark ${
                activeBox === 2 ? "font-bold text-2xl" : "font-[400] text-xl"
              } text-center`}
            >
              Q&A
            </h4>
            <h2 className="font-gothic font-bold text-3xl text-center my-[40px]">
              Il primo passo verso il fondo
            </h2>
            <button
              className={`py-2 px-4 ${
                activeBox === 2
                  ? "bg-primary-dark text-white border-none  mt-[30px]"
                  : "bg-white border border-primary-dark text-primary-dark"
              } rounded-[1.5rem]`}
            >
              scopri di più
            </button>
          </div>
        </div>
        <div className="mt-[100px] flex gap-[100px]">
          <div className="">
            <img
              src={about2Img}
              className="w-[500px] h-[270px] object-cover rounded-3xl"
              alt=""
            />
            <h2 className="text-primary-dark mt-5 font-bold text-3xl pl-2">
              Sabatino <span className="text-primary-light">De Rosa</span>
            </h2>
            <p className="text-md mt-2 px-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              neque. Sed nesciunt accusantium quia rerum autem perspiciatis
              maiores aliquam dolorem. Aspernatur aperiam esse optio. Doloremque
              quos fugit iste dolor delectus.
            </p>
          </div>
          <div className="">
            <img
              src={about1Img}
              className="w-[500px] h-[270px] object-cover rounded-3xl"
              alt=""
            />
            <h2 className="text-primary-dark mt-5 font-bold text-3xl pl-2">
              Sabatino <span className="text-primary-light">De Rosa</span>
            </h2>
            <p className="text-md mt-4 px-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              neque. Sed nesciunt accusantium quia rerum autem perspiciatis
              maiores aliquam dolorem. Aspernatur aperiam esse optio. Doloremque
              quos fugit iste dolor delectus.
            </p>
          </div>
        </div>
      </div>
      <HeroMobile />
    </div>
  );
}

export default Home;
