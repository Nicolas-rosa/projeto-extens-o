const Meio = ({ texto, titulo }) => {
  return (
    <div className="justify-center mt-10 m-auto h-[40vh] w-[70vw] max-sm:h-[20vh]  rounded-[1.5em] border-[1px] border-[#248497] bg-gradient-to-r from-[#42a0e883] to-[#2e8b561a] text-pretty">
     <h1 className="justify-center text-center text-[3em] text-ellipsis overflow-hidden whitespace-nowrap max-sm:text-[1.0em] max-md:text-[0.6em]  max-lg:text-[2em]">{titulo}</h1>
      <img
        className="float-left w-auto h-auto max-w-[50%] max-h-[80%] max-sm:h-[70%] ml-4 mt-3 "
        src="https://i.ibb.co/h7TC71S/Ebook-pana.png" 
        alt=""
      />

      
      <p className="text-ellipsis overflow-hidden max-h-[80%] ">{texto}</p>
    </div>
  );
};

export default Meio;
