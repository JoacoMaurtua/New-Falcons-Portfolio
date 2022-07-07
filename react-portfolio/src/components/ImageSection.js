import React from 'react';
import styled from 'styled-components';
//import joaco from '../images/joaco.jpg'
import PrimaButton from './PrimaButton';

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    color: var(--colorWhite);
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
        .right-content{
            .info-title{
                margin-right: -40px;
            }
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--colorWhite);
            span{
                font-size: 2rem;
                color: var(--primaryColor);
            }
        }
        .paragraph{
            font-weight: 800;
            padding: 1rem 0;
        }
        .about-info{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: .1rem;
            padding-bottom: 1.4rem;
            .info-title{
                margin-right: 0;
                p{
                    font-weight: 600;
                    padding: .3rem 0;
                }
                span{
                    color: var(--primaryColor);
                    font-weight: 600;
                }
               
            }
        }
    }
`;


export default function ImageSection({video,titulo,descripcion,nombre,lenguajes,hobbies,doc}) {
  
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={video} alt=""/>
      </div>
      <div className="right-content">
          
          <h4>Yo soy<span> {titulo} </span></h4>
          
          <p className="paragraph">
              {descripcion}
          </p>
          <div className="about-info" >
              <div className="info-title">
                  {/* <p><span>Nombre:</span> {nombre} </p> */}
                  <p><span>Nacionalidad:</span> Peruano </p>
                  <p><span>Lenguajes:</span> {lenguajes} </p>
                  <p><span>Hobbies:</span>  {hobbies} </p>
                  <p><span>Ubicación:</span>  Arequipa, Perú</p>
                  <p><span>Profesión:</span> Desarrollador Full Stack MERN Junior</p>
              </div>
          </div>
          <PrimaButton 
            title={"Descargar CV"}
            doc ={doc}
          /> 
      </div>
    </ImageSectionStyled>
  )
}


