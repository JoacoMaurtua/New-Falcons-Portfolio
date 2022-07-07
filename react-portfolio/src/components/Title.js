import React from 'react';
import styled from 'styled-components';

const TitleStyled = styled.div`
  position: relative;
  
  h2{
    color: var(--colorWhite);
    font-size: 3.5rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: .5rem;
  
    @media screen and (max-width:496px){
        font-size: 2.5rem;
    }

    @media screen and (max-width:370px){
        font-size: 1.5rem;
    }

    &::before{
      content: "";
      position: absolute;
      bottom: 0;
      width: 7.5rem;
      height: .33rem;
      background-color: #00919c;
      border-radius: 15px;
    }

    &::after{
      content: "";
      position: absolute;
      bottom: 0;
      width: 3.5rem;
      height: .33rem;
      background-color: var(--primaryColor);
      border-radius: 15px;
      left: 0;
    }

    span{
      font-weight: 900;
      color: rgba(25,29,43,.44);
      font-size: 3.5rem;
      position: absolute;
      left: 0;
      top: 30%;
      z-index: -1;
      @media screen and (max-width: 620px){
        font-size: 3rem;
      }
      @media screen and (max-width:496px){
        font-size: 2rem;
      }
      @media screen and (max-width:370px){
        font-size: 1.5rem;
    }
    }
  }
`;

export default function Title({title,span}) {
  return (
    <TitleStyled>
      <h2>{title}<span>{span}</span></h2>
    </TitleStyled>
  )
}
