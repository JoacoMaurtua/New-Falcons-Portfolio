import React from 'react';
import styled from 'styled-components';

const ServiceCardStyled = styled.div`
  background-color: var(--projectCard);
  box-shadow: 5px 12px 10px var(--boxesShadow);
  border-top: 6px solid #00919c; 
  border-radius: 6px;
  transition: all .4s ease-in-out;
  &:hover{
    border-top: 5px solid var(--borderColor); 
    transform: translateY(3px);
  }
  img{
    width: 9rem;
  }
  .container{
    padding: 1rem;
    h4{
      color: var(--primaryColor);
      font-size: 1.6rem;
      padding: 1rem 0;
      position: relative;
      
      &:after{
        content: "";
        width: 5rem;
        background-color: var(--borderColor);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }
    p{
      padding: .8rem 0;
      color: var(--colorWhite);
    }
  }


`;

export default function ServicesCard({image,title,paragraph}) {
  return (
    <ServiceCardStyled>
      <div className="container">
          <img src={image} alt=""/>
          <h4>{title}</h4>
          <p>{paragraph}</p>
      </div>
      
    </ServiceCardStyled>
  )
}
