const MeioVD = ({ texto, titulo, vd }) => {
    return (
      <div className="flex flex-col  items-center justify-center  mt-10 mx-auto h-[70vh] w-full max-sm:mr-0 max-sm:h-[50vh] rounded-[1.5em]  border-[#248497] bg-gradient-to-r from-[#42a0e883] to-[#2e8b561a] text-black">
        <div className="flex flex-row max-sm:flex-col ">
          <video width="800" controls className="float-left w-[50vw] items-center max-sm:h-auto  max-sm:w-[75vw] ml-4 mt-3 rounded-[12px] drop-shadow-lg">
            <source src={vd} type="video/mp4"/> {/* Correção aqui */}
            Seu navegador não suporta a tag de vídeo.
          </video>
          <div className="ml-8 mb-1">
            <h1 className="text-center text-[1.5em] font-bold max-sm:text-[1.5em]">{titulo}</h1>
            <p className=" max-sm:text-[0.5em]">{texto}</p>
          </div>
        </div>
      </div>
    );
  };
  export default MeioVD;  