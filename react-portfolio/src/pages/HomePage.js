import React from 'react';
import styled from 'styled-components';
import Particle from '../components/Particle';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative; 
    
    .p-particles-js-main{
      position: absolute;
      top: 0;
      left:0;
    }

    .typography{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 70%;
      h1, p{
        color: var(--colorWhite);
      }
    }

    .icons{
      display: flex;
      justify-content: center;
      margin-top: 1rem;
        .icon{
          border: 2px solid var(--borderColor);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all .4s ease-in-out;
          cursor: pointer;
          color: var(--colorWhite);
          &:not(:last-child){
            margin-right: 1rem;
          }
          &:hover{
            background-color: var(--primaryColor);
            color: white;
          }
          svg{
            margin: .5rem;
          }
        }
    }

`;

export default function HomePage() {
  return (
    <HomePageStyled>
      <div className="p-particles-js-main">
        <Particle />
      </div>
      <div className="typography">
          <h1 >¡Hola!<span style={{color:"var(--primaryColor)"}}> Somos FalconDev</span></h1>
          <p>
          ¡Más que un equipo! Somos FalconDev, un par de locos por el desarrollo de
          software, dispuestos a llevar a cabo, o mejor dicho, llevar al código aquellas ideas
          que crearán valor y cambiarán las cosas.
          ¡Desarrolladores fullstack MERN Junior disponibles para trabajar remotamente!
            
          </p>
          <div className="icons">
              <a href="https://www.linkedin.com/in/joaqu%C3%ADn-ma%C3%BArtua-a4403a209/" className="icon i-linkdin">
                <LinkedInIcon />
              </a>
              <a href="https://github.com/JoacoMaurtua" className="icon i-github">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/stefano-quiroz-597403210/" className="icon i-linkdin">
                <LinkedInIcon />
              </a>
              <a href="https://github.com/StefanoQuiroz" className="icon i-github">
                <GithubIcon />
              </a>
          </div>
      </div>
      
    </HomePageStyled>
  )
}
