// src/pages/Components/Header.jsx
import React from "react";
import '../index.css';
import { Link } from "react-router-dom";



const Head = () => {
return (
<div className="flex flex-col  border-b-slate-700-900 max-sm:mr-0 bg-gradient-to-br bg-[#ffffff82] shadow-lg h-[25vh] font-serif w-full" >

<div className="  text-center mb-1 bg-gradient-to-r  bg-[#000000] , bg-[#0b3c60] , bg-[#022660] bg-clip-text text-transparent text-3xl font-black ">
  <h1 class="text-[#000000] drop-shadow-[0_0_5px_#e0f2fe], drop-shadow-[0_0_15px_#e0f2fe], drop-shadow-[0_0_20px_#e0f2fe] mb-[3vh] mt-[7vh] text-[5vh] max-sm:text-[3vh] max-sm:mb-1 max-sm:mt-[8vh] ">Projeto Extensão</h1>
        </div>  
        <img src="" alt="" className="h-auto w-[12vw] flex object-center z-0 justify-center ml-[20vw] mt-[1vh] mb-[10vh] drop-shadow-[0_0_5px_#e0f2fe], drop-shadow-[0_0_15px_#e0f2fe], drop-shadow-[0_0_20px_#e0f2fe] absolute max-sm:w-[25vw] max-sm:ml-[4vw]  max-lg:ml-[5vw] max-lg:mt-[2vh] max-lg:w-[20vw] max-lg:flex" />
  <div className=" border-b-green-900 justify-center py-3 flex gap-[2vw] shadow-x4 rounded-full mt-1">
    <div className="group relative px-4 cursor-pointer  ">
<Link to="/">   
      <div className="flex h-10 w-10 items-center justify-center  rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="32"
          width="32"
        >
          <path
            stroke="currentColor"
            d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
          />
        </svg>
      </div>
      <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
        Inicio
      </span>
      </Link> 
    </div>
    <div className="group relative px-4 cursor-pointer">
    <Link to="/Contato">    
      <div className="flex h-10 w-10 items-center justify-center rounded-full hover:blue-yellow-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={1.5}
            stroke="currentColor"
            d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
          />
        </svg>
      </div>
      <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
        Contato
      </span>
      </Link>
    </div>
    <div className="group relative px-4 cursor-pointer">
    <Link to="/produtos">
      <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-200">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd classnamehover:text-yellow-200">
      <path d="M14 0v10l2-1.518 2 1.518v-10h4v24h-17c-1.657 0-3-1.343-3-3v-18c0-1.657 1.343-3 3-3h9zm6 20h-14.505c-1.375 0-1.375 2 0 2h14.505v-2z"/>
        </svg>
      </div>
      <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
       <a href="/produtos">Produtos</a>
      </span>
      </Link>
    </div>
    
  </div>
</div>

);
};
export default Head;