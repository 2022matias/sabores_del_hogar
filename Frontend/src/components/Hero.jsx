import React from "react";
import taco from '../assets/taco.png'
import cereza from '../assets/cereza.png'
import frutilla from '../assets/fresa.png'
import uva from '../assets/uva.png'
import sushi from '../assets/sushi.png'
import pasta from '../assets/pasta.png'

const HeroSection = () => {
  return (
    <section className="bg-green p-16 py-2">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center">
        <div className=" p-14 w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className=" text-4xl md:text-4xl font-semibold text-navy mb-4">Crea platillos con los </h3>
          <h3 className=" text-4xl md:text-4xl  font-semibold text-navy mb-4">ingredientes de tu nevera </h3>
          
          
          <a href="#" className="inline-flex items-center justify-center text-2xl text-navy font-normal text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
            Comienza a Cocinar
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center pl-8">
          <div className="grid grid-cols-2 gap-7  ">
            {/* Columna 1 */}
            <div className="bg-white  rounded-3xl shadow-md w-32 h-32">
              
              <img src={taco} alt="Card 1" className="" />              
            </div>

            <div className="bg-white  rounded-3xl shadow-md w-32 h-32">
              
              <img src={uva} alt="Card 2" className=" object-cover  rounded-md mx-auto" />
              
            </div>

            <div className="bg-white  rounded-3xl shadow-md w-32 h-32">
              
              <img src={cereza} alt="Card 3" className=" object-cover  rounded-md mx-auto" />
              
            </div>

            {/* Columna 2 */}
            <div className="bg-white  rounded-3xl shadow-md w-32 h-32">
              
              <img src={sushi} alt="Card 4" className=" object-cover  rounded-md mx-auto" />
              
            </div>

            <div className="bg-white  rounded-3xl shadow-md w-32 h-32">
              
              <img src={pasta} alt="Card 5" className="bject-cover  rounded-md mx-auto" />
              
            </div>

            <div className="bg-white  rounded-3xl shadow-md w-32 h-32">
              
              <img src={frutilla} alt="Card 6" className="object-cover  rounded-md mx-auto" />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
