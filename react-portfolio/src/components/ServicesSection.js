  import React,{useContext} from 'react';
  import { MyContext } from '../App';
  import styled from 'styled-components';
  import { InnerLayout } from '../styles/Layouts';
  import Title from './Title';
  import ServicesCard from './ServicesCard';
  import web from '../images/web.png';
  import web2 from '../images/web-2.png';
  import pwa from '../images/pwa.png';
  import pwa2 from '../images/pwa-2.png';
  import mobile from '../images/mobile.png';
  import mobile2 from '../images/mobile-2.png';


  const ServicesStyled = styled.div`
      .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
      }
  `;

  export default function ServicesSection() {
    const {theme} = useContext(MyContext);

    return (
      <InnerLayout>
        <ServicesStyled>
            <Title title={'Servicios'} span={'servicios'}/>
            <div className="services">
                <ServicesCard
                  image={
                    theme === 'dark-theme'?web:web2
                  }
                  title={"Diseño Web"}
                  paragraph={
                    "Diseño de interfaces de usuario modernas e intuitivas en Figma, además de plasmar la arquitectura del software."
                  }
                />
                
                <div className="mid-card">
                    <ServicesCard
                      image={
                        theme === 'dark-theme'?pwa:pwa2
                      }
                      title={"Desarrollo Web"}
                      paragraph={
                        "Dessarrollo de proyectos fullstack utilizando MERN, trabajamos con patrones de diseño y frameworks muy interesantes."
                      }
                    />
                </div>
                
                <ServicesCard
                  image={
                    theme === 'dark-theme'?mobile:mobile2
                  }
                  title={"Desarrollo Movil"}
                  paragraph={
                    "Desarrollo de aplicaciones moviles nativas, utilizando React Native (próximamente)."
                  }
                />

                
            </div>
        </ServicesStyled>    
      </InnerLayout>
    )
  }
  