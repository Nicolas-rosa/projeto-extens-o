import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Newcol from '../Components/Newcol';
import Meio from '../Components/Meio';
import Meio1 from '../Components/Meio1';
import Meio2 from '../Components/Meio2';
import MeioVD from '../Components/MeioVideo';
import Spline from '@splinetool/react-spline';

function Home() {

  const navigate = useNavigate();
  navigate("/produtos")
return (
  
<div >


<MeioVD
titulo="Oque nos faz Especial?"
texto="Venha nos conhecer!!! realizamos mudanças incriveis no seu negocio!!"
vd="src\video\videoextensão.mp4"

/>

<Newcol/>
<h1 className="text-[8vh] max-sm:text-[5vh] font-bold text-center bg-gradient-to-r from-[#3150ff] to-[#4220ffc8] bg-clip-text text-transparent">Nossas Especialidades</h1>            
<div className="mt-10 flex flex-row gap-4 justify-center center w-full ">
          <div  className='grid grid-cols-1 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-sm:hover:gap-14 pt-[3vh]'>
            <Meio2 imagemSrc={"https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} titulo={"Analise SWOT"} texto="Aprimore suas Estratégias" info={"https://drive.google.com/file/d/1_UDfv2smZ-gW-90mTz_afer617dW8CNQ/view?usp=sharing"} style={{ width: "250px" }} />
            <Meio2 imagemSrc={"https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} titulo={"IA para vendas"} texto="Ganhe um novo funcionario" info={"https://drive.google.com/file/d/19ZHvu839_AgR-ux3_kD8_olc_kTAJy6d/view?usp=sharing"} style={{ width: "250px" }} /> 
            <Meio2 imagemSrc={"https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} titulo={"Ultilize o Instagram para Trabalhar"} texto="Ferramenta indispensavel" info={"https://drive.google.com/file/d/1BTPgrHEBaSKd1F-XlG4DjFxj-7vQZLw9/view?usp=sharing"} className="mt-2"/>
            <Meio2 imagemSrc={"https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} titulo={"Guia Sobre Sistemas de Loja"} texto="Guia completo sobre PDV e ERP" info={"https://drive.google.com/file/d/10lgn9tGtBkrMwdMSc1JALE23bpgrQQPO/view?usp=drive_link"} className="mt-2"/>  
            </div>

</div>

            <Meio  texto = "Você é um pequeno empreendedor com grandes sonhos, mas sente que a tecnologia é um bicho de sete cabeças? Nós entendemos! Por isso, a turma de ADS criou este site. " titulo = "Dê um salto no seu negócio!"/>
            <Meio1 imagemSrc={"https://www.freepik.com/free-photo/book-headphones-with-blue-background_32879600.htm#fromView=search&page=1&position=47&uuid=a2c205d7-6bd5-4185-b18c-1035a8bca735"
      } titulo={"Tecnologia para todos: Conhecimento gratuito para impulsionar seu negócio!"} texto="Acreditamos que o acesso à informação e à tecnologia deve ser para todos, especialmente para os pequenos empreendedores."/>
           
</div>
  );
};

export default Home;



    
    
