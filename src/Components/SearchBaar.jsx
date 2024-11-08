import React, { useState } from 'react';
import Meio2 from './Meio2';
import { info } from 'autoprefixer';

const Pesquisa = () => {
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [resultados, setResultados] = useState([]);

  const dados = [
    {
      titulo: "Guia para abrir sua empresa",
      descricao: "Do sonho a Realidade",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1BNu9pRS_rKhhMhVmORL6-fosBQucTfwo/view?usp=drive_link",
      tags: "nicolas, empresa, começo, abrir, sonho, lucro"     
    },
    {
      titulo: "A importancia de diversificar",
      descricao: "Mais de um Ramo é mais Lucro",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1r6-r3MJPRRXctpiuB_POFlvYN3fs4NV_/view?usp=drive_link",
      tags: "nicolas, empresa, começo, abrir segundo, sonho, lucro, variar, expandir, diversificar"     
    },
    {
      titulo: "A importância da Identida Visual",
      descricao: "A Marca vende",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1OAGm8ku19HaS_scfMiGrX_aUyT3zQq9e/view?usp=drive_link",
      tags: "nicolas, design, identidade, visual, publicidade,"     
    },
    {
      titulo: "Como criar videos Intuitivos",
      descricao: "Colecionando seguidores",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1S9MkvrZ_saUADkUg6WzIw04vFh_-akZv/view?usp=drive_link",
      tags: "nicolas, design, identidade, visual, publicidade, video, instagram, tiktok, redes sociais"     
    },
    {
      titulo: "Crie um Site para empresa hoje",
      descricao: "Sem saber Programar",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1Q0WFYDbivRVHmFemawpDFYoTtfCwXc41/view?usp=drive_link",
      tags: "nicolas, empresa, começo, abrir segundo, sonho, lucro, variar, expandir, diversificar, site, criar, web, publicidade, marketing"     
    },
    {
      titulo: "Estrategias para empresas",
      descricao: "Se criando entre gigantes",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1twFpn8_DH23u5BksjfimAa1mW7WguBxg/view?usp=drive_link",
      tags: "nicolas, empresa, começo, abrir segundo, sonho, lucro, variar, expandir, diversificar, estrategia, lucro"     
    },
    
    {
      titulo: "Como Inovar na sua Area",
      descricao: "Criando novidades",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1l5nUQAOxKRHAp-tsLTAz2BGy_tWFh3IE/view?usp=drive_link",
      tags: "nicolas, empresa, começo, abrir segundo, sonho, lucro, variar, expandir, diversificar, site, criar, web, publicidade, marketing, inovar"     
    },
    {
      titulo: "Guia Sobre Sistemas de Loja",
      descricao: "Guia completo sobre PDV e ERP",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/10lgn9tGtBkrMwdMSc1JALE23bpgrQQPO/view?usp=drive_link",
      tags: "nicolas, empresa, Sistemas, Pdv, ERP, PDV, Erp começo, abrir segundo, sonho, lucro, variar, expandir, diversificar, estrategia, lucro"     
    },
    
    {
      titulo: "Ferramentas digitais",
      descricao: "Com um toque varias soluções",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1QlZEMgiv8jwOIEq67pHP71bSEsFdaI2e/view?usp=drive_link",
      tags: "nicolas, empresa, Ferramentas começo, abrir  expandir, diversificar, site, criar, web,"     
    },
    {
      titulo: "Gerenciar Remotamente",
      descricao: "Seja o chefe de Pijama",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1pkD5Cu73QahhZCKihoGQDlRiA_fuzlRg/view?usp=drive_link",
      tags: "nicolas, empresa, começo, abrir segundo, sonho, lucro, variar, expandir, diversificar, estrategia, Trabalhar, Remotamente, Remoto, Homeofice, Home"     
    },
    {
      titulo: " Google Analytics ",
      descricao: "o poder da análise de dado",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1cKuIVA14Zf5sW6bITG6elJBsSTQ3-NRw/view?usp=drive_link",
      tags: "camila google analytics, análise de dados, marketing digital, web analytics, pequenos negócios, SEO, tráfego, conversão, métricas, relatórios, segmentação, funil de vendas, e-commerce"     
    },
    {
      titulo: "Empreendimento focado na Tecnologia ",
      descricao: "Do zero à viralização",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1CKnQ_XjFEDlp0EIs0uVd2eAW1OC_YYf9/view?usp=drive_link",
      tags: "jonas void viado redes sociais, marketing digital, negócios de tecnologia, startups, crescimento, engajamento, conteúdo, estratégia, campanhas pagas, influenciadores, tendências"     
    },
    {
      titulo: "Introdução ao Similarweb ",
      descricao: "Ferramenta essencial",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/18TfuGyjzlqySwaFOE_ESeUgOYX8i2a34/view?usp=sharing",
      tags: "camila redes sociais, marketing digital, negócios de tecnologia, startups, crescimento, engajamento, conteúdo, estratégia, campanhas pagas, influenciadores, tendências"     
    },
    {
      titulo: " Ultilize o Instagram para Trabalhar ",
      descricao: "Ferramenta indispensavel",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1BTPgrHEBaSKd1F-XlG4DjFxj-7vQZLw9/view?usp=sharing",
      tags: " redes sociais, marketing digital, negócios de tecnologia, startups, crescimento, engajamento, conteúdo, estratégia, campanhas pagas, influenciadores, tendências"     
    },
    {
      titulo: "Transforme sua Empresa",
      descricao: "Traga grandes Mudanças",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1mj0KYuBrxLCOpA0DJBbHwnK-YWINYSZd/view?usp=sharing",
      tags: " redes sociais, marketing digital, negócios de tecnologia, startups, crescimento, engajamento, conteúdo, estratégia, campanhas pagas, influenciadores, tendências"     
    },
    {
      titulo: " Gestão de Relacionamento Com Cliente ",
      descricao: "Ganhe Clientes Constantemente",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1xnmTaiLjB2BPwAhoUZJvH5CbsPQBtukh/view?usp=sharing",
      tags: "redes sociais, marketing digital, negócios de tecnologia, startups, crescimento, engajamento, conteúdo, estratégia, campanhas pagas, influenciadores, tendências"     
    },
    {
      titulo: " IA para vendas ",
      descricao: "Ganhe um novo funcionario",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/19ZHvu839_AgR-ux3_kD8_olc_kTAJy6d/view?usp=sharing",
      tags: "redes sociais, marketing digital, negócios de tecnologia, ia, inteligencia, artificial startups, crescimento, engajamento, conteúdo, estratégia, campanhas pagas, influenciadores, tendências"     
    },
    {
      titulo: "Segurança na Tecnologia ",
      descricao: "Protegendo o mundo digital",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1UaVNcGA0tTtNvjYaUbcJ6eFwnoCHfb0-/view?usp=sharing",
      tags: " negócios de tecnologia, ia, inteligencia, artificial startups, crescimento, hack, hackers, segurança, defesa conteúdo, estratégia, campanhas pagas, influenciadores, tendências"     
    },
    {
      titulo: " Automatização de Vendas ",
      descricao: "Automatizando os Lucros",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1fqOm0Vm3O0R3j_pAoN3sYN_lEAAgRibQ/view?usp=sharing",
      tags: "redes sociais, dion, Dion, Samuel automatizar negócios de tecnologia, ia, inteligencia, artificial startups, crescimento, engajamento, conteúdo, estratégia, campanhas pagas, influenciadores, tendências"     
    },
    {
      titulo: " Analise SWOT ",
      descricao: "Aprimore suas Estratégias",
      imagemSrc: "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "https://drive.google.com/file/d/1_UDfv2smZ-gW-90mTz_afer617dW8CNQ/view?usp=sharing",
      tags: "redes sociais, SWOT, enos, Enos swot analise automatizar negócios de tecnologia, ia, inteligencia, artificial startups, crescimento, engajamento, conteúdo, estratégia, campanhas pagas, influenciadores, tendências"     
    },
      ];

  const handlePesquisa = () => {
    const termo = termoPesquisa.toLowerCase();

    if (!termo) {
      setResultados([]);
      return;
    }

    const novosResultados = dados.filter(dado => {
      const titulo = dado.titulo.toLowerCase();
      const descricao = dado.descricao.toLowerCase();
      const tags = dado.tags.toLowerCase();
      return titulo.includes(termo) || descricao.includes(termo) || tags.includes(termo);
    });

    setResultados(novosResultados);
  };

  return (
    <section className='flex flex-col items-center mt-[5vh]'>
      <input
        type="text"
        placeholder="Digite um Produto"
        value={termoPesquisa}
        onChange={e => setTermoPesquisa(e.target.value)}
        class=" input rounded-full px-[12vw] py-[3vh] border-2 border-transparent focus:outline-none focus:border-sky-500 placeholder-gray-400 transition-all duration-300 shadow-md"/>
      <button onClick={handlePesquisa} class=" mt-[2vh] text-xl w-32 h-12 rounded-[12px] bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
  <span
    class="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"
  ></span>
  <span
    class="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"
  ></span>
Pesquisar
      </button>
      <section className="resultados-pesquisa">
  {resultados.length === 0 ? (
    <p className='text-black'>Pesquise nossos Produtos</p>
  ) : (
    <div  className='grid grid-cols-1 max-sm:grid-cols-2 max-sm:gap-[2vh] md:grid-cols-3 lg:grid-cols-4 gap-8 max-sm:hover:gap-14 pt-[3vh] mt-[5%]'> {/* Div fora do map */}
      {resultados.map((dado, index) => (
        <Meio2
          key={index}
          imagemSrc={dado.imagemSrc}
          titulo={dado.titulo}
          texto={dado.descricao}
          style={{ width: "250px"  }}
          info={dado.info}
          
        />
      ))}
    </div> 
  )}
</section>
    </section>
  );
};

export default Pesquisa;