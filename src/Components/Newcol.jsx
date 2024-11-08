import { Link } from "react-router-dom";

const Newcol = () => {
    return (
        <div className=" m-auto mt-[5vh] relative flex h-[40vh] w-[80vw] max-sm:h-[60vh] items-center justify-center rounded-[1.5em] border-[1px] border-[#2174a865] bg-[rgba(33,116,168,0.24)] p-[1.5em] text-lime-300">
          <div className="group absolute left-1/2 top-1/2 flex h-[3em] w-[3em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] border-[#ffffffaa] bg-[#8988885c] backdrop-blur-[6px] duration-[500ms] hover:h-[40vh] hover:w-[80vw] max-sm:hover:h-[60vh] hover:rounded-[1.5em]">
            <svg
              className="h-[1.5em] w-[1.5em] duration-300 group-hover:opacity-0"
              viewBox="0 0 48 48"
              fill="none"
              height="48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#a)">
                <path
                  clipRule="evenodd"
                  d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z"
                  fillRule="evenodd"
                  fill="#fff"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path d="M0 0h48v48H0z" fill="#fff" />
                </clipPath>
              </defs>
            </svg>
            <div className="items-left duration-600 absolute left-0 top-0 flex h-[40vh] w-[80vw] max-sm:h-[60vh] translate-y-[100%] flex-col justify-between p-[1.5em] font-nunito text-[hsl(0,0%,0%)] group-hover:translate-y-0">
              <div className="items-left flex flex-col justify-center">
                <h1 className="text-[1.5em] font-bold leading-[0.8em]">Nossos Propositos</h1>
                <p className="text-[65%] font-bold max-sm:text-[50%] ">
                Nós, um grupo de alunos apaixonados por Análise e Desenvolvimento de Sistemas (ADS), acreditamos no poder da tecnologia para impulsionar negócios. Sabemos que dar os primeiros passos no mundo do empreendedorismo pode ser desafiador, especialmente quando se trata de dominar as ferramentas digitais.
                Pensando nisso, criamos o ADS Power Team, uma iniciativa dedicada a descomplicar a tecnologia para empreendedores iniciantes. Elaboramos uma série de eBooks gratuitos com linguagem clara e objetiva
                </p>
              </div>
              <Link to="/contato">
              <p className="cursor-pointer text-[0.7em] underline">Saiba Mais</p>
              </Link>
            </div>
          </div>
         
          <h1 className="text-center font-nunito text-[2em] font-black text-emerald-950">
            Saiba_____Mais
          </h1>
         
        </div>
      );
    };
  export default Newcol; 