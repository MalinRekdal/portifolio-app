import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="w-full bg-[#22333b] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              Prosjekt
            </p>
            <p className="my-4">
              Her vil komme meir info om prosjekt eg har hatt gjennom studiet og privat presentert på ein betre måte, med bilde og linkar til GIT. WIP. 
            </p>

            <p className="my-4 font-semibold">Prosjekt fra studiet: </p>
            <p className="my-4">
               Fag som har gitt relevant erfaring:  Sensor lab, estimering, maskinlæring, Elsys GK og Elsys prosjekt, esda prosjekt, IC, digital signalbehandling, webutvikling, heislab i tilpdat. Spesifikke prosjekt vil bli oppdatert ved eit seinare tidspunkt. 
            </p>


            <p className="my-4 font-semibold">Egne prosjekt: </p>
            <p className="my-4">
                <li>Denne sida</li>
                <li>WIP</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
