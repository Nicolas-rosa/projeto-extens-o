import { useState } from "react";

const Meio2 = ({ texto, titulo, imagemSrc, info }) => {
  const [showDetails, setShowDetails] = useState(false);

  const fundo = {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "0.5em",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div style={fundo} className="w-[20vw] bg-slate-50  max-h-[90vh] h-[100%]  max-sm:w-[40vw] max-sm:h-[30vh] rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out items-center place-self-center relative max-mb:h-[20vh] mb-[15%]">
      <img className="w-full h-[60%] object-cover rounded-t-lg" src={imagemSrc} alt="" />
      <div className="p-4 text-center">
        <h2 className="text-[90%] max-sm:text-[70%] font-bold">{titulo}</h2>
        <p className="text-slate-950 text-[65%] max-sm:text-[40%]">{texto}</p>
        <div className="flex justify-center items-center  max-sm:mt-0">
          <button className="bg-sky-500 hover:bg-sky-600 text-slate-800 px-[10%] py-[5%] h-[80%] rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400" onClick={handleDetailsClick}>
            Download
          </button>
        </div>
        {showDetails && (
          <div className="fixed top-0 left-0 w-full mt-[70%] max-sm:mt-40 flex items-center justify-center z-50">
          <div className="absolute mt-4 p-4 bg-gradient-to-r from-[#2e3232dc] to-[#000904b8]  rounded-lg shadow-md z-50 inset-x-0 mx-auto"> 
            <a className="text-white" href={info}>Click to Download</a>
          </div> 
        </div>
        )}
      </div>
    </div>
  );
};

export default Meio2;