import React from 'react';
import {useNavigate} from "react-router-dom";
import Meio from '../Components/Meio';
import Meio1 from '../Components/Meio1';
import MeioVD from '../Components/MeioVideo';
import Creditos from '../Components/Meritos';
function Contato() {

  const navigate = useNavigate();
  navigate("/produtos")
return (
  
<div>

            <Meio  texto = {<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63503.62525704503!2d-35.206878619441824!3d-5.858916519777623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff3f8bd1d317%3A0x7f4b691e3f5681de!2sUNINASSAU%20-%20Natal!5e0!3m2!1spt-BR!2sbr!4v1729199767166!5m2!1spt-BR!2sbr"
        width="100%"
        height="40%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        className='ml-[3vw] mt-[1vh] h-[60vh] max-sm:max-h-[15vh] max-sm:max-w-[70%]'
      />} titulo = "Conheça a nossa Faculdade"/>
            <Meio1 imagemSrc={"https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      } titulo={"Tecnologia para Crescer: E-books gratuitos para impulsionar seu negócio."} texto="Acreditamos que a tecnologia é uma ferramenta poderosa para impulsionar o crescimento de pequenos negócios. Por isso, criamos este projeto para oferecer e-books gratuitos com conteúdo prático e estratégico, desenvolvido por estudantes de Análise e Desenvolvimento de Sistemas. Nosso objetivo é democratizar o acesso à informação e ajudar empreendedores a utilizar a tecnologia a seu favor."/>
    
    <MeioVD 
  titulo="Conheça nosso trabalho" 
  texto="Abordamos temas essenciais para o sucesso do seu negócio no mundo digital.." 
  vd="src\video\videoextensão.mp4" // Caminho para o vídeo
/>
<h1 className="mt-[3vh] text-[5vw] max-lg:text-[5em] max-sm:text-[2em] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2e8b568d] to-[#008080] text-center">Colaboradores do Projeto</h1> 
<div className="mt-[5vh] grid grid-cols-4 gap-y-1  gap-x-2  max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-sm:hover:gap-14 w-full h-[100%] bg-gradient-to-r from-[#2e8b561a] to-[#008080] justify-center items-center">

<Creditos nome="Nicolas França Castro Rosa" funcao="Desenvolvedor do Site" funcao1="Planejamento inicial do Projeto" funcao2="Desenvolveu 10 E-Books" funcao3="Design Geral" imagem="https://i.ibb.co/X5v1mRh/Whats-App-Image-2024-06-08-at-21-41-41.jpg" linkGIT="https://github.com/Nicolas-rosa" linkGMAIL="mailto:nicolasfrancacastrorosa@gmail.com?subject=Projeto+Extens%C3%A3o" linkLIN="www.linkedin.com/in/nicolas-rosa-dev"  />

 
<Creditos nome="Camilla Marques Vieira de Morais" funcao="Planejamento inicial do Projeto" funcao2="Desenvolveu 1 E-Book"  imagem="https://i.ibb.co/rdf5FLm/camilaM.jpg"  linkGIT="https://github.com/kevellyangel" linkGMAIL="mailto:marxcamila00@gmail.com" linkLIN="https://www.linkedin.com/in/camila-marques-3b9248201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  />


<Creditos nome="Jonas Felipe D. S. Guimarães" funcao="Planejamento inicial do Projeto" funcao2="Desenvolveu 1 E-Book" imagem="https://i.ibb.co/rk4f917/VoidF.jpg" linkGIT="https://github.com/Fellps-collab" linkGMAIL="mailto:jjonasffelipefogo@gmail.com" linkLIN="http://www.linkedin.com/in/felipe-dsguimar%C3%A3es"  />


<Creditos nome="Rharyson Silva De Araújo" funcao="Desenvolveu 1 E-Book" imagem="https://i.ibb.co/bN9XM0P/AraujoR.jpg"  linkGIT="https://github.com/RharysonSilva" linkGMAIL="mailto:rharysonsilva@gmail.com" linkLIN="https://www.linkedin.com/in/rharyson-silva-4b7332303/"  />


<Creditos nome="Kildey Ruan Leonez de Lima" funcao="Desenvolveu 1 E-Book" imagem="https://i.ibb.co/9nKZpVt/KildeyR.jpg" linkGIT="https://github.com/gKild" linkGMAIL="mailto:kildeyrllm@gmail.com" linkLIN="https://www.linkedin.com/in/o-kildey-ruan/"  />


<Creditos nome="Ayrton Senna" funcao="Desenvolveu 1 E-Book" imagem="src\img\AirtonS.jpg" linkGIT="https://github.com/Ayrton1998" linkGMAIL="mailto:senninha764@gmail.com" linkLIN="https://www.linkedin.com/in/ayrton-senna-b67853335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"  />


<Creditos nome="Johnathan Robert" funcao="Desenvolveu 1 E-Book" imagem="https://i.ibb.co/fHnMVkV/jonathan.jpg" linkGIT="https://github.com/Jayz1n" linkGMAIL="mailto:johnathanjayjay123@gmail.com" linkLIN="https://www.linkedin.com/in/jayjay-undefined-0594a6337/"  />


<Creditos nome="Samuel Dion" funcao="Planejamento inicial do Projeto" funcao2="Desenvolveu 1 E-Book" imagem="https://i.ibb.co/4WRX9cN/dion.jpg" linkGIT="https://github.com/Diondev10" linkGMAIL="mailto:conta.dev.1010@gmail.com" linkLIN="https://www.linkedin.com/in/samuel-dion-a71b26327"  />


<Creditos nome="Enos Bezerra" funcao="Desenvolveu 1 E-Book" imagem="https://i.ibb.co/4mj1NFd/enos.jpg"  linkGIT="https://github.com/Enosbez" linkGMAIL="mailto:enosbezerra3@gmail.com" linkLIN="https://www.linkedin.com/in/enos-bezerra-5344841bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"  />



</div>
</div>
  );
};

export default Contato;
