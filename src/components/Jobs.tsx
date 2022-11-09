import React from "react";

const Jobs = () => {
  return (
    <div id="jobs" className="w-full bg-[#78a7ad] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              Tidlegare jobbar
            </p>
            <p className="my-4">
              Her vil komme meir info om tidlegare jobbar eg har hatt presentert på ein betre måte, med bilde og linkar til GIT. WIP. 
            </p>

            <p className="my-4">
              <li>Sommerjobb hos Kongsberg som full stack developer med mest fokus på backend med Pytjon og Django. </li>
              <li>Sommerjobb hos Bekk som full stack developer med mest fokus på frontend med React og Typescript, men også litt backend i .Net med C#. </li>
              <li>Deltidsjobb i Ada med arbeid retta mot å auke andelen kvinner i teknologibransjen. Ga mykje kunnskap innan arrangementplanlegging og organisering. </li>
              <li>Deltidsjobb som studentassistent ved ESDA ein gong, og Elsys GK to gongar. Har gitt god erfaring i å lære vekk kunnskap samt gitt meg betre tolmodigheit. </li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
