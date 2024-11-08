const MeioVD = ({ texto, titulo, vd }) => {
    return (
      <div className="flex flex-col  items-center justify-center  mt-10 mx-auto h-[70vh] w-full max-sm:mr-0 max-sm:h-[50vh] rounded-[1.5em]  border-[#248497] bg-gradient-to-r from-[#42a0e883] to-[#2e8b561a] text-black">
        <div className="flex flex-row max-sm:flex-col ">
        <iframe width="708" height="397" src="https://www.youtube.com/embed/0KQ9P1VWn0Y?si=MH_8r__QOtYL8T-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="float-left w-[50vw] items-center max-sm:h-auto  max-sm:w-[75vw] ml-4 mt-3 rounded-[12px] drop-shadow-lg"></iframe>
          <div className="ml-8 mb-1">
            <h1 className="text-center text-[1.5em] font-bold max-sm:text-[1.5em]">{titulo}</h1>
            <p className=" max-sm:text-[0.5em]">{texto}</p>
          </div>
        </div>
      </div>
    );
  };
  export default MeioVD;  
