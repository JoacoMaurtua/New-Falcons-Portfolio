import React from 'react';
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from './Title';
import SmallTitle from './SmallTitle';
import CodeIcon from '@material-ui/icons/Code';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MPCER1 from '../images/MPCER1.PNG';
import MPCER2 from '../images/MPCER2.png';
import CDJ from '../images/CDJ.PNG';
import CDS from '../images/CDS.PNG';
import DownloadIcon from '@mui/icons-material/Download';


const ResumeStyled = styled.section`
  color: var(--colorWhite);
  .small-title {
    padding-bottom: 2rem;
  }

  .resume-container {
    border-left: 1px solid var(--borderColor);
    width: 80%;
  }

  .education-container {
  }
`;

const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 2rem;
  

  @media screen and (max-width:920px){
    grid-template-columns: repeat(2,1fr);
  }

  @media screen and (max-width:670px){
    grid-template-columns: repeat(1,1fr);
  }

  color: var(--colorWhite);
  .grid-item{
      transform: scale(0.87);
      transition: all .3s ease-in-out;
      background-color: var(--projectCard);
      box-shadow: 5px 12px 10px var(--boxesShadow);
      padding: 1.8rem .8rem;
      border-radius: 10px;
      
      &:hover{
        transform: scale(0.90)
      }
      h3{
        padding-bottom: 1rem;
        font-size: 1.3rem;
        color: var(--primaryColor);
      }
      .portfolio-content{
        display: block;
        position: relative;
        

        img{
          width: 100%;
          height: 27vh;
          object-fit: cover;
        }
        ul{
          display: none;
          transform: translateY(-100px);
          transition: all .4s ease-in-out;
          position: absolute;
          left: 50%;
          top: 30%;
        }

        .portfolio-image{
          &::before{
            content: "";
            position: absolute;
            left: 2%;
            top: 4%;
            transition: scale(0);
            height: 0;
            width: 0;
            transition: all .4s ease-in-out;

          }
          
        }
        .portfolio-image:hover{
          ul{
            transform: translateY(0);
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all .4s ease-in-out;
            li{
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 1rem;
              border-radius: 50%;
              margin: 0 .5rem;
              a{
                display: flex;
                align-items: center;
                justify-content: center;
              }
          
            }
            svg{
              font-size: 3rem;
              color: #00919c;
              cursor: pointer;
              transform: scale(0.80);
              &:hover{
                transform: scale(0.90);
                font-size: 3.5rem;
                color: var(--hoverBoton);
                transition: all .3s ease-in-out;
              }
            }
          }
          &::before{
            transform-origin: left;
            width: calc(100% - 4%);
            height: calc(100% - 50%);
            background-color: var(--backGroundDark);
            opacity: 0.9;
            
          
          }

      }
  }
  
  }`



export default function Resume() {
  const codeIcon = <CodeIcon />;
  const education = <SchoolIcon />;
  const certificado = <WorkspacePremiumIcon />;

  return (
    <ResumeStyled>
      <Title title={'Resumen'} span={'Resumen'} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={codeIcon} title={'Otras Tecnologías'} />
        </div>
        <div className="resume-container">
          <ResumeItem
            title={'Front-end'}
            text={
              'JQuery, LESS, SASS, BackBone.js, Bootstrap, Reactstrap, Material UI, RESTful API, React Motion, Three.js, React Three Fiber 3D, WebGL, GSAP.'
            }
          />
          <ResumeItem
            title={'Back-end'}
            text={
              'MVC, Firebase, JWT, Cookie Parser, Socket.io, AWS-EC2, Integración-Checkout PayPal, Integración-Checkout Pro de Mercado Pago, Postman.'
            }
          />
          <ResumeItem
            title={'Otras Herramientas'}
            text={'Bash, Git, GitHub, Trello, Jira, Figma, SCRUM'}
          />
        </div>

        <div className="small-title">
          <SmallTitle icon={education} title={'Educación'} />
        </div>
        <div className="resume-container education-container">
          <ResumeItem
            year={'2020'}
            title={'Computer Science BA'}
            text={'Ambos en Universidad Católica San Pablo, Arequipa(Perú)'}
          />
          <ResumeItem
            year={'2021'}
            title={'Coding Dojo Bootcamp'}
            text={
              'Ambos certificados como cinturón negro (rango más alto) en el desarrollo de fullstack MERN.'
            }
          />
          
        </div>
        <MenuItemStyled>
        <div className="grid-item">
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={CDJ} alt="" />
                <ul>
                  <li>
                    <a href='https://drive.google.com/drive/folders/1_nX9f1_yXdYumfA9H0rTxy8q8m1mS6Ij'>
                      <DownloadIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <h3>Certificado de Graduación</h3>
              <p>Graduado de Bootcamp Coding Dojo con el rango de Cinturón negro en MERN.</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={CDS} alt="" />
                <ul>
                  <li>
                    <a href='https://drive.google.com/drive/folders/1_nX9f1_yXdYumfA9H0rTxy8q8m1mS6Ij'>
                      <DownloadIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <h3>Certificado de Graduación</h3>
              <p>Graduado de Bootcamp Coding Dojo con el rango de Cinturón negro en MERN.</p>
            </div>
          </div>

        </MenuItemStyled>
        
        

        <div className="small-title" style={{marginTop:'2rem'}}>
          <SmallTitle icon={certificado} title={'Certificaciones'} />
        </div>
        <div className="resume-container education-container">
          <ResumeItem
            year={'2022'}
            title={'Checkout Pro Mercado Libre'}
            text={
              'Ambos certificados por Mercado Libre por haber logrado integrar la pasarela de pagos Checkout Pro de Mercado Pago en una tienda E-commerce desarrollada por nosotros.'
            }
          />
         
          
        </div>




        <MenuItemStyled>
        <div className="grid-item">
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={MPCER1} alt="" />
                <ul>
                  <li>
                    <a href='https://www.mercadopago.com.pe/developers/panel/certification/cert_4a1bb4befcc711ecbed90242ac130004'>
                      <DownloadIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <h3>Certificado Mercado Pago</h3>
              <p>Integración del Checkout Pro de Mercado Pago (pasarela de pagos) y miembro del dev program de Mercado Libre.</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={MPCER2} alt="" />
                <ul>
                  <li>
                    <a href='https://www.mercadopago.com.pe/developers/panel/certification/cert_dad2d71cfcc111ecbed90242ac130004'>
                      <DownloadIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <h3>Certificado Mercado Pago</h3>
              <p>Integración del Checkout Pro de Mercado Pago (pasarela de pagos) y miembro del dev program de Mercado Libre.</p>
            </div>
          </div>

        </MenuItemStyled>
        
      </InnerLayout>
    </ResumeStyled>
  );
}
