const Meio1 = ({ texto, titulo, imagemSrc }) => {
  return (
    <div className="flex flex-col justify-center mt-10 mx-auto h-[30%] w-[90%] rounded-[1.5em] bg-gradient-to-r from-[#ffffff] to-[#2e8b561a] text-black">
      <div className="flex flex-row">
        <img
          className="float-left w-[40%] max-h-[40%] ml-0 mt-0  rounded-[12px] drop-shadow-lg max-sm:h-[30%] max-sm:w-[40%]"
          src={imagemSrc}
          alt=""
        />
        <div className="ml-8 max-sm:ml-4">
          <h1 className="text-center text-[2.5em] font-bold max-sm:text-[1em]">{titulo}</h1>
          <p className="max-sm:text-sm">{texto}</p>
        </div>
      </div>
    </div>
  );
};
export default Meio1;