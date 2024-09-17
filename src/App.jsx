import { useState } from "react";
import Hero from "./components/Hero";

function App() {
  const [activeBox, setActiveBox] = useState(1);

  return (
    <div className="py-[150px]">
      <div className="w-[95%] lg:w-[1245px] mx-auto">
        <Hero />
        <div className="mt-[60px] flex justify-between items-start gap-10">
          <div
            className="bg-white py-3 px-5 cursor-pointer flex-1 rounded-[20px] shadow-lg flex flex-col items-center"
            onMouseOver={() => setActiveBox(0)}
          >
            <h4
              className={`text-primary-dark ${
                activeBox === 0 ? "font-bold text-2xl" : "font-[400] text-xl"
              } text-center`}
            >
              il fondo
            </h4>
            <h2 className="font-gothic font-bold text-4xl text-primary-dark text-center my-[40px]">
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
            className="bg-white py-3 px-5 cursor-pointer flex-1 rounded-[20px] shadow-lg flex flex-col items-center"
            onMouseOver={() => setActiveBox(1)}
          >
            <h4
              className={`text-primary-dark ${
                activeBox === 1 ? "font-bold text-2xl" : "font-[400] text-xl"
              } text-center`}
            >
              il fondo
            </h4>
            <ul className="my-[30px] list-disc flex flex-col gap-3">
              <li className="text-primary-dark font-semibold text-lg">
                Distributori di acqua gratis
              </li>
              <li className="text-primary-dark font-semibold text-lg">
                Distributori di assorbenti
              </li>
              <li className="text-primary-dark font-semibold text-lg">
                Buona organizzazione GDA
              </li>
              <li className="text-primary-dark font-semibold text-lg">
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
            className="bg-white py-3 px-5 cursor-pointer flex-1 rounded-[20px] shadow-lg flex flex-col items-center"
            onMouseOver={() => setActiveBox(2)}
          >
            <h4
              className={`text-primary-dark ${
                activeBox === 2 ? "font-bold text-2xl" : "font-[400] text-xl"
              } text-center`}
            >
              il fondo
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
      </div>
    </div>
  );
}

export default App;
