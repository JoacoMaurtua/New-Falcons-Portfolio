import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: #00919c;
  padding: .8rem 2rem;
  font-size: inherit;
  color: var(--whiteColor);
  cursor: pointer;
  transition: all .4s ease-in-out;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: .6rem;
  &:active, &:focus{
    background-color: var(--hoverBoton);
    color: var(--sideDark);
  };
  &:not(:last-child){
    margin-right: 1rem;
  }
  &:hover{
    background-color: var(--hoverBoton);
    font-weight: bold;
  }

  @media screen and (max-width:670px){
    &:not(:last-child){
      margin-right: 0;
    }
  }
`;

const ButtonsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 2.5rem auto;

`;

export default function Button({filter,button}) {
  return (
    <ButtonsStyled>
      {
        button.map((button,index)=>{
          return <ButtonStyled key = {index} onClick={()=>filter(button)}>
            {button}
          </ButtonStyled>
        })
      }
    </ButtonsStyled>
  )
}
