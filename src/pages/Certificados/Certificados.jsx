// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/scrollbar';

import { Typewriter } from 'react-simple-typewriter';

import PageTransition from '../../components/PageTransition/PageTransition';


import { EffectCoverflow, Pagination } from 'swiper/modules';

import ParticleCertificados from '../../components/Particles/ParticlesCertificados';
import Navbar from '../../components/Navbar/Navbar';

import './Certificados.css';
import jfProjetoCertificados from '../../assets/jf-projeto2.png';

import certificado01 from '../../assets/certificados/alura_técnicas-para-seu-autodesenvolvimento.jpg';
import certificado02 from '../../assets/certificados/dio-dev-frontend-angular.jpg';
import certificado03 from '../../assets/certificados/alura-trazendo-mais-resultados-para-o-dia-a-dia.jpg';
import certificado04 from '../../assets/certificados/alura-Curso-Git-e-GitHub- compartilhando-e-colaborando-em-projetos.jpg';
import certificado05 from '../../assets/certificados/alura-Hábitos-da-produtividade-às-metas-pessoais.jpg';
import certificado06 from '../../assets/certificados/alura-LinkedIn-como-fazer-o-seu-perfil-trabalhar-para-você.jpg';
import certificado07 from '../../assets/certificados/alura-Curso-Lógica-de-programação-explore-funções-e-listas.jpg';
import certificado08 from '../../assets/certificados/alura-mergulhe-em-programação-com-JavaScript.jpg';
import certificado09 from '../../assets/certificados/React-do-zero-a-maestria.jpg';
import certificado10 from '../../assets/certificados/Banco-de-dados-sql.jpg';
import certificado11 from '../../assets/certificados/Formação-CSS-Web-Developer.jpg';
import certificado12 from '../../assets/certificados/Start-front-end-developer.jpg';
import certificado13 from '../../assets/certificados/SocioEmocional_page-0001.jpg';
import certificado14 from '../../assets/certificados/Formação-JavaScript.jpg';
import certificado15 from '../../assets/certificados/Formação-HTML-Web.jpg';
import certificado16 from '../../assets/certificados/Algoritmos-logica-de-programacao.jpg';
import certificado17 from '../../assets/certificados/tech-academy-full-stack.jpg';

const Certificados = () => {
  const [certificados, setCertificados] = useState([
    {
      instituicao: 'Alura',
      imagem: certificado01,
      nomeCurso: 'Aprender a aprender: técnicas para seu autodesenvolvimento',
      duracao: '8 horas',
      habilidades: 'Aprendizagem contínua · Gestão de tempo · Disciplina pessoal',
      linkCertificado: 'https://cursos.alura.com.br/certificate/bd23f21d-386a-4e31-92c2-ede8e5d8fdd5',
      // linkCurso: '',
    },
    {
      instituicao: 'DIO',
      imagem: certificado02,
      nomeCurso: 'Desenvolvimento Frontend com Angular',
      duracao: '68 horas',
      habilidades: 'TypeScript · Angular (Framework) · JavaScript',
      linkCertificado: 'https://www.dio.me/certificate/5A635462/share',
      // linkCurso: '',
    },
    {
      instituicao: 'Alura',
      imagem: certificado03,
      nomeCurso: 'Foco: trazendo mais resultados para o dia a dia',
      duracao: '10 horas',
      habilidades: 'Gestão de foco',
      linkCertificado: 'https://cursos.alura.com.br/certificate/0da10079-ec03-41cc-b4d1-5b8af4e2fa11',
      // linkCurso: '',
    },
    {
      instituicao: 'Alura',
      imagem: certificado04,
      nomeCurso: 'Git e GitHub: compartilhando e colaborando em projetos',
      duracao: '8 horas',
      habilidades: 'GitHub · Git',
      linkCertificado: 'https://cursos.alura.com.br/certificate/36126e45-a776-4fc1-84b9-66b825070157',
      // linkCurso: '',
    },
    {
      instituicao: 'Alura',
      imagem: certificado05,
      nomeCurso: 'Hábitos: da produtividade às metas pessoais',
      duracao: '8 horas',
      habilidades: 'Gestão de hábitos · Autodisciplina',
      linkCertificado: 'https://cursos.alura.com.br/certificate/e41d0a30-4825-451d-bba8-4f5b47e97fbe',
      // linkCurso: '',
    },
    {
      instituicao: 'Alura',
      imagem: certificado06,
      nomeCurso: 'LinkedIn: como fazer o seu perfil trabalhar para você',
      duracao: '4 horas',
      habilidades: 'Linkedin',
      linkCertificado: 'https://cursos.alura.com.br/certificate/69c1ac8e-5f43-4b70-b818-9c17f39176c3',
      // linkCurso: '',
    },
    {
      instituicao: 'Alura',
      imagem: certificado07,
      nomeCurso: 'Lógica de programação: explore funções e listas',
      duracao: '6 horas',
      habilidades: 'Lógica de programação · JavaScript',
      linkCertificado: 'https://cursos.alura.com.br/certificate/2efed289-7630-40cc-aa10-b913c6c72cbf',
      // linkCurso: '',
    },
    {
      instituicao: 'Alura',
      imagem: certificado08,
      nomeCurso: 'Lógica de programação: mergulhe em programação com JavaScript',
      duracao: '6 horas',
      habilidades: 'Lógica de programação · JavaScript',
      linkCertificado: 'https://cursos.alura.com.br/certificate/c5b8346d-c27c-4bcc-8f32-991c760b06c5',
      // linkCurso: '',
    },
    {
      instituicao: 'Udemy',
      imagem: certificado09,
      nomeCurso: 'React do Zero a Maestria (c/ hooks, router, API, Projetos)',
      duracao: '30,5 horas',
      habilidades: 'React · TypeScript · JavaScript',
      linkCertificado: 'https://www.udemy.com/certificate/UC-853bb079-275e-436e-8d47-9b26d8b5495a/',
      // linkCurso: '',
    },
    {
      instituicao: 'Udemy',
      imagem: certificado10,
      nomeCurso: ' Banco de Dados SQL do Zero ao Avançado',
      duracao: '8 horas',
      habilidades: 'Banco de dados · MySQL · SQL',
      linkCertificado: 'https://www.udemy.com/certificate/UC-59041c51-a988-4ce1-b294-6f94b8d41c5b/',
      // linkCurso: '',
    },
    {
      instituicao: 'DIO',
      imagem: certificado11,
      nomeCurso: 'Formação CSS Web Developer',
      duracao: '43 horas',
      habilidades: 'Bootstrap · CSS3',
      linkCertificado: 'https://www.dio.me/certificate/E39AE5EA/share',
      // linkCurso: '',
    },
    {
      instituicao: 'Start - Rede Cidadã',
      imagem: certificado12,
      nomeCurso: 'Formação Frontend',
      duracao: '280 horas',
      habilidades: 'GitHub · Scrum · React.js · Git · Lógica de programação · HTML5 · Banco de dados · MySQL · Node.js · JavaScript · CSS3',
      linkCertificado: '#',
      // linkCurso: '',
    },
    {
      instituicao: 'Start - Rede Cidadã',
      imagem: certificado13,
      nomeCurso: 'Socioemocional',
      duracao: '28 horas',
      habilidades: 'Inteligência emocional · Comprometimento · Flexibilidade cognitiva · Pensamento crítico e analítico · Autoconhecimento · Comunicação · Agente de solução ',
      linkCertificado: 'https://www.linkedin.com/posts/jonatha-fabricio_start-activity-7106262937677238272-Ji8O?utm_source=share&utm_medium=member_desktop',
      // linkCurso: '',
    },
    {
      instituicao: 'DIO',
      imagem: certificado14,
      nomeCurso: 'Formação JavaScript Developer',
      duracao: '39 horas',
      habilidades: 'JavaScript',
      linkCertificado: 'https://www.dio.me/certificate/995FF633/share',
      linkCurso: '',
    },
    {
      instituicao: 'DIO',
      imagem: certificado15,
      nomeCurso: 'Formação HTML Web Developer',
      duracao: '21 horas',
      habilidades: 'HTML5 · HTML',
      linkCertificado: 'https://www.dio.me/certificate/54C0AC9B/share',
      // linkCurso: '',
    },
    {
      instituicao: 'Udemyy',
      imagem: certificado16,
      nomeCurso: 'Algoritmos e Lógica de Programação - O Curso COMPLETO',
      duracao: '30,5 horas',
      habilidades: 'Lógica de programação',
      linkCertificado: 'https://www.udemy.com/certificate/UC-d6708569-9494-4189-8843-e1a413faeea5/',
      // linkCurso: '',
    },
    {
      instituicao: 'StartSe - Tech Academy',
      imagem: certificado17,
      nomeCurso: 'Tech Academy - Fullstack Developer',
      duracao: '100 horas',
      habilidades: 'Git · HTML5 · Node.js · JavaScript · SQL · CSS3',
      linkCertificado: 'https://lms.startse.com/certificado/v2/630e4f246918c0556ac1c770?studentId=5e337ef299763dac88d29fad',
      // linkCurso: '',
    },
  ]);

  useEffect(() => {
    document.body.classList.add('body-certificados');

    return () => {
      document.body.classList.remove('body-certificados');
    };
  }, []);

  return (
    <PageTransition>
      <>
        <Navbar />
        <ParticleCertificados />
        <div className="container-certificados">
          <div className="image-container-certificados">
            <img src={jfProjetoCertificados} alt="Descrição da Imagem" />
          </div>
          <div className="text-container-certificados">
            <h1>
              <Typewriter
                words={['Certificados', 'Diplomas', 'Cursos', 'Especializações']}
                loop
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p>
              Esta página vai além de apenas coletar diplomas, esta é a vitrine dos meus avanços e conquistas. Esses certificados não são apenas títulos, mas marcos do meu compromisso contínuo com o aprendizado e o desenvolvimento profissional e pessoal. Cada documento aqui é uma história de desafios superados e habilidades adquiridas.
            </p>
          </div>
        </div>
        <div className="swiper-container-certificados">

          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={true}
            initialSlide={1}
            pagination={{ clickable: true }}
            loop={true}
            modules={[EffectCoverflow, Pagination]}
            spaceBetween={30}
            className="mySwiper"
          >
            {certificados.map((certificado, index) => (
              <SwiperSlide key={index}>
                <div className="certificado">
                  <img src={certificado.imagem} alt={certificado.nomeCurso} />
                  <div className="certificado-info">
                    <h3 className="nome-curso">{certificado.nomeCurso}</h3>
                    <p>Instituição: {certificado.instituicao}</p>
                    <p>Duração: {certificado.duracao}</p>
                    <p>Habilidades Adquiridas: {certificado.habilidades}</p>
                    <a href={certificado.linkCertificado} target="_blank" rel="noopener noreferrer">
                      Ver Certificado
                    </a>
                    <div className="border"></div>
                    {/* <a href={certificado.linkCurso} target="_blank" rel="noopener noreferrer">
                    Ver Curso
                  </a> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    </PageTransition>
  );
};

export default Certificados;