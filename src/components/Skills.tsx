import React from "react";
import Design from "../assets/design-icon.png";
import Developing from "../assets/developing-icon.png";
import { Link } from "react-scroll";

const Skills = () => {
  return (
    <div id="skills" className="w-full bg-[#78a7ad]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-grey-500">
            Ferdigheitar
          </p>
          <p className="py-4">Mine tekniske ferdigheitar.  Ikona i desse punkta er ikkje up to date, dette blir fiksa i framtida</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 text-center py-8">
          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <img
              className="w-10 mx-auto"
              src={Developing}
              alt="Developing icon"
            />
            <p className="my-4 font-semibold">Språk og rammeverk: </p>
            <p className="my-4">
              React, Typescript, Javascript, Python, Matlab .Net, c#, C++, C, Verilog, Spice,
              CSS, JSS, Django
            </p>
            <p className="my-4 font-semibold">Editors:</p>
            <p className="my-4">VScode, PyCharm, Webstorm, Rider </p>
            <p className="my-4 font-semibold">Anna:</p>
            <p className="my-4">Har også brukt Figma til designing, og Jest til testing.  </p>
            <Link to="projects" smooth={true} duration={500}>
              <button className="text-gray-700 group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white">
              Les meir om spesifikke prosjekt eg har fått erfaring fra her
              </button>
            </Link>
          </div>

          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <img className="w-10 mx-auto" src={Design} alt="Design icon" />
            <p className="my-4 font-semibold">Signalbehandling og maskinlæring</p>
            <p className="my-4">
              Har grei kunnskap innan signalbehandling både ved bruk av Python, men også Matlab. 
              <br/> <br/>
              Den siste perioda har eg også starta å opparbeide meg kunnskap innan 
              maskinlæring og neurale nettverk. Har blant anna brukt rammeverk som Tensorflow til prosjekt. 
            </p>
          </div>

          
          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <img className="w-10 mx-auto" src={Design} alt="Design icon" />
            <p className="my-4 font-semibold">Krets design og mikrokontrollera</p>
            <p className="my-4">
              Gjennom studiet har eg opparbeida meg grei erfaring av designing fysiske
              kretsar. Dette innebær planlegging av funksjonalitet, samankobling, feilsøking og testing av kretsane.
              <br/> <br/>
              Mykje av programmeringskunnskapen eg har er retta mot programmering av mikrokontrollera og sensorar. Har her 
              brukt Arduino og Raspberry Pi kobla opp til ulike sensorar.
              <p className="my-4 font-semibold">+ Fleire mikrokontrollarar enn Arduino og Pi.. WIP</p>
              Har derfor ein del kompetanse innan assemblykode. 
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;

//Programmeringsspråk
//Andre skills (Presentation) (kan klikke seg inn på bilder av foredrag og arbeid jeg har gjort)
//Design

//Arrangering
