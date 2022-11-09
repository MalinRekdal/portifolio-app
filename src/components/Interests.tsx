
import Event from "../assets/event-icon.png";

const Interests = () => {
  return (
    <div id="interests" className="w-full bg-[#edede9] ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-grey-500">
            Faglege interesser
          </p>
          <p className="py-4">Mine faglege interesser. Ikona i desse punkta er ikkje up to date, dette blir fiksa i framtida.</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 text-center py-8">
          
          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <img className="w-10 mx-auto" src={Event} alt="Event icon" />
            <p className="my-4 font-semibold">Innovasjon</p>
            <p className="my-4">
              Eg synast innovasjon er veldig interessant, og har erfaring innan innovasjon og kunnskap om gode metodar for å komme på idear for innovative løysningar. 
      
            </p>
          </div>

          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <img className="w-10 mx-auto" src={Event} alt="Event icon" />

            <p className="my-4 font-semibold">Medisin</p>
            <p className="my-4">
              Har ein høg interesse for medisinsk innovasjon. Har hatt eit verv i DRIV NTNU som fokuserar på medisinsk teknologi. Det har gitt 
              bekjentskap til fagfolk og studentar innen medisin, mykje tverfagleg arbeid og betre forståelse innen medisin. Har også 15 studiepoeng 
              innan medisin på NTNU. 
            </p>

          </div>

          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <img className="w-10 mx-auto" src={Event} alt="Event icon" />
            <p className="my-4 font-semibold">Kvinner i teknologi</p>
            <p className="my-4">
              Eg meinar det er alt for få kvinner som velgjer teknologi, og eg brenner hardt for å få fleire til å velgje ein teknologisk retning. 
              Har hatt jobb i Ada for å bidra til at kvinneanndelen på dei tekniske studia på NTNU aukar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;