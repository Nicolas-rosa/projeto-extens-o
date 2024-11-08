import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Pesquisa from '../Components/SearchBaar';
import Meio2 from '../Components/Meio2';
function Produtos() {

    const navigate = useNavigate();
    navigate("/produtos")

    return(
        <div>
            <Pesquisa/>
   
   
            <div  className=' mt-[10%] grid grid-cols-1 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-sm:hover:gap-14 pt-[3vh]'>
            <Meio2 imagemSrc={"https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} titulo={"Guia para abrir sua empresa"} texto="Do sonho a Realidade" style={{ width: "250px" }} info={"https://drive.google.com/file/d/1BNu9pRS_rKhhMhVmORL6-fosBQucTfwo/view?usp=drive_link"} />
<Meio2 imagemSrc={"https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} titulo={"A importancia de diversificar"} texto="Mais de um Ramo é mais Lucro" style={{ width: "250px" }} info={"https://drive.google.com/file/d/1r6-r3MJPRRXctpiuB_POFlvYN3fs4NV_/view?usp=drive_link"} />
<Meio2 imagemSrc={"https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} titulo={"A importância da Identida Visual"} texto="A Marca vende" style={{ width: "250px" }} info={"https://drive.google.com/file/d/1OAGm8ku19HaS_scfMiGrX_aUyT3zQq9e/view?usp=drive_link"} />
<Meio2 imagemSrc={"https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} titulo={"Como criar videos Intuitivos"} texto="Colecionando seguidores" style={{ width: "250px" }} info={"https://drive.google.com/file/d/1S9MkvrZ_saUADkUg6WzIw04vFh_-akZv/view?usp=drive_link"} /> 

</div>
            
       

        </div>
    );
};

export default Produtos;