// eslint-disable-next-line no-unused-vars
import React from 'react';

import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from 'react';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import PageTransition from '../../components/PageTransition/PageTransition';

import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';

import ParticlesProjetos from '../../components/Particles/ParticlesProjetos';
import Navbar from '../../components/Navbar/Navbar';

import './Projetos.css';
import jfProjeto from '../../assets/jf-projeto.png';
import jfProjeto1 from '../../assets/portfolio/portfolio1.png';
import jfProjeto2 from '../../assets/portfolio/portfolio2.png';
import jfProjeto3 from '../../assets/portfolio/portfolio3.png';
import jfProjeto4 from '../../assets/portfolio/portfolio4.png';
import jfProjeto5 from '../../assets/portfolio/portfolio5.png';
import jfProjeto6 from '../../assets/portfolio/portfolio6.png';
import jfProjeto7 from '../../assets/portfolio/portfolio7.png';
import jfProjeto8 from '../../assets/portfolio/portfolio8.png';

register()

const projetos = [
  {
    nome: 'Jogo do número secreto',
    imagem: jfProjeto1,
    descricao: 'Descrição do Projeto 1',
    deployLink: 'https://jonathafabricio.github.io/jogo-do-numero-secreto/',
  },
  {
    nome: 'Landing page, trilha de CSS',
    imagem: jfProjeto2,
    descricao: 'Descrição do Projeto 2',
    deployLink: 'https://jonathafabricio.github.io/landing-page/',
  },
  {
    nome: 'Jogo Advinhe a Palavra',
    imagem: jfProjeto3,
    descricao: 'Descrição do Projeto 3',
    deployLink: 'https://jonathafabricio.github.io/advinhe-palavra/',
  },
  {
    nome: 'Coffee - Bootstrap',
    imagem: jfProjeto4,
    descricao: 'Descrição do Projeto 4',
    deployLink: 'https://jonathafabricio.github.io/bootstrap-coffee-shop/',
  },
  {
    nome: 'Simple page',
    imagem: jfProjeto5,
    descricao: 'Descrição do Projeto 5',
    deployLink: 'https://jonathafabricio.github.io/home-page-start/',
  },
  {
    nome: 'Clone página do discord',
    imagem: jfProjeto6,
    descricao: 'Descrição do Projeto 6',
    deployLink: 'https://jonathafabricio.github.io/clone-pagina-discord/',
  },
  {
    nome: 'Clone página do youtube',
    imagem: jfProjeto7,
    descricao: 'Descrição do Projeto 7',
    deployLink: 'https://jonathafabricio.github.io/youtube-page/',
  },
  {
    nome: 'Pokedex',
    imagem: jfProjeto8,
    descricao: 'Descrição do Projeto 8',
    deployLink: 'https://jonathafabricio.github.io/pokedex/',
  },
];

const Projetos = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [slidePerView, setSlidePerView] = useState()

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  };

  useEffect(() => {
    document.body.classList.add('body-projetos');
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerView(1)
      } else {
        setSlidePerView(2)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('body-projetos');
    }
  }, [])


  const FadeWords = () => {
    const words = ['Projetos', 'Hackathon', 'Desafios'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 2500);

      return () => clearInterval(intervalId);
    }, []);

    return (
      <span className="fade-word">
        {words.map((word, i) => (
          <span
            key={i}
            className={`word ${i === index ? 'show' : ''}`}
          >
            {word}
          </span>
        ))}
      </span>
    );
  };

  return (
    <PageTransition>
    <>
      <ParticlesProjetos />
      <Navbar />
      <div className="container">
        <div className="image-container">
          <img src={jfProjeto} alt="Descrição da Imagem" />
        </div>
        <div className="text-container">
          <h1><FadeWords /></h1>
          <p>Dê uma olhada nos projetos que eu tirei do papel! Aqui tem um pouco de tudo: a solução rápida que criei no hackathon, os exercícios práticos dos cursos que fiz e, claro, meus projetos pessoais. São trabalhos que me desafiaram, me ensinaram e me divertiram. Espero que curtam explorar esses projetos tanto quanto eu curti criá-los! Sempre busquei melhorar e implementar novas lógicas em todas as linhas que passei :)</p>
        </div>
      </div>
      <div className="carousel-container">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          slidesPerView={slidePerView}
          className="mySwiper"
          spaceBetween={30}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation, EffectCards]}
        >
          {projetos.map((item) => (
            <SwiperSlide key={item.nome}>
              <div
                className={`slide-item ${hoveredProject === item ? 'hovered' : ''
                  }`}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={item.imagem}
                  alt='Slider'
                  className='slide-image'
                />
                <div
                  className={`project-info ${hoveredProject === item ? 'show' : ''
                    }`}
                >
                  <div className='info-content'>
                    <h3>{item.nome}</h3>
                    <p>{item.descricao}</p>
                    {item.deployLink && (
                      <a href={item.deployLink} target="_blank" rel="noopener noreferrer">
                        Ver projeto
                      </a>
                    )}
                  </div>
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

export default Projetos;