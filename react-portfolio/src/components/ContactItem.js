import React from 'react';
import styled from 'styled-components';

const ContactItemStyled = styled.div`
    border-top: 6px solid #00919c; 
    border-radius: 6px;
    transition: all .4s ease-in-out;
    box-shadow: 5px 12px 10px var(--boxesShadow);
    &:hover{
      border-top: 5px solid var(--borderColor); 
      transform: translateY(3px);
    }
    &:first-child{
      margin-top: 6.8rem;
      @media (max-width: 977px) {
        margin-top: 2.5rem;
      }
    }
    padding: 1.5rem 2rem;
    background-color: var(--contactBoX);
    display: flex;
    align-items: center;
    &:not(:last-child){
      margin-bottom: 2rem;
    }
    .left-content{
      padding: 1.5rem;
      border: 1px solid var(--borderColor);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1.5rem;
      svg{
        font-size: 2.2rem;
      }
    }
    .right-content{
      h6{
        color: var(--whiteColor);
        font-size: 1.3rem;
        padding-bottom: .6rem;
      }
      p{
        padding: .1rem 0;
      }
    }

`;

export default function ContactItem({icon, title, contact1, contact2}) {
  return (
    <ContactItemStyled>
      <div className="left-content">

         {icon}
 
      </div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{contact1}</p>
        <p>{contact2}</p>
      </div>
    </ContactItemStyled>
  )
}
