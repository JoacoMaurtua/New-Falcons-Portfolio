import React from 'react';
import styled from 'styled-components';
import { MainLayout } from '../styles/Layouts';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import ServicesSection from '../components/ServicesSection';
import coder from '../images/coder.svg';
import joacoV from '../images/joacoPerfilR.jpg';
import stefanoV from '../images/stefanoPerfilR.jpg';
import JoacoCV from '../docs/FalconDevs_JMaurtua_CV.pdf';
import StefanoCV from '../docs/FalconDevs_SQuiroz_CV.pdf';
import Particle from '../components/Particle';

export default function AboutPage() {
  return (
    <MainLayout>
       <div className="p-particles-js">
            <Particle />
       </div>
      <AboutStyled>
          <Title title={"Nosotros"} span={"Nosotros"}/>
          <ImageSection 
                        titulo={'Joaquín Maúrtua'}
                        video={joacoV}
                        descripcion={'¡Hola Mundo! Soy Joaquín, me gustan los desafíos, la innovación y encontrar soluciones creativas a problemas interesantes, aspiro a liderar un gran equipo de personas con diferentes habilidades y sacar adelante un gran proyecto.'}
                        nombre={'Joaquín Maúrtua Diban'}                      
                        lenguajes={'Español, Inglés'}
                        hobbies={'Actuar, Dibujar, Deportes'}
                        doc = {JoacoCV}
          />
           <ImageSection 
                        titulo={'Stefano Quiroz'}
                        video={stefanoV}
                        descripcion={'¡Hola Mundo! Soy Stefano, me gusta analizar problemas y encontrar soluciones lógicas, nunca me doy por vencido y siempre encuentro una solución, me encanta ser parte de un equipo y aportar todas mis habilidades en pos de triunfar.'}
                        nombre={'Stefano Quiroz Chumbes'}
                        lenguajes={'Español, Inglés, Portugués'}
                        hobbies={'Tocar piano, Viajar, Deportes'}
                        doc = {StefanoCV}
          />
          <ServicesSection/>
          <ImageContainer>
              <img src={coder} alt=""/>
          </ImageContainer>
      </AboutStyled>
    </MainLayout>
  )
}

const AboutStyled = styled.section`
 

`;


const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--sideDark);
  box-shadow: 5px 12px 10px var(--boxesShadow);
  height: 22rem;
  img{
    width: 50%;
  }
`;