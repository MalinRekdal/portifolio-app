import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#22333b] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              Om meg
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl ">
            <p>4. års student ved Elektronisk Systemdesign og Innovasjon 
              ved NTNU i Trondheim. 
            </p>
          </div>
          <div>
            <p>Spesialiseringa mi på masteren er innen signalbehandling og kommunikasjon. Eg har ein generell interesse for teknologi, spesielt innen 
              utvikling og maskinlæring. Brenner hardt for helseinnovasjon og meinar at er dette er eit viktig satsingsområde 
              innen teknologisk utvikling. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
