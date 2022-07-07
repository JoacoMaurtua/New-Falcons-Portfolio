import React from 'react';
import styled from 'styled-components';

const ResumeItemStyled = styled.div`
  display: flex;
  @media screen and (max-width:421px){
      p, h5, h6{
        font-size:80%;
      }
  }
  color: var(--colorWhite);
  margin-bottom: 3rem;
  
  .left-content{ //Cuando cambie a mi experiencia laboral
    width: 6%;
    position: relative;
    margin-left: 2rem;
    &::before{
      content: "";
      position: absolute;
      left: -45px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--borderColor);
      background-color: var(--backGroundDark);
    }
    
    p{
      display: inline-block;
    }
  }
  .right-content{
    margin-left: .5rem;
    padding-left: 6.5rem;
    position: relative;
  
    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 15px;
        height: 2px;
        width: 2rem;
        background-color: var(--borderColor);
        @media screen and (max-width:815px){
            margin-left: 2rem;
        }

    }
    h5{
      color: var(--primaryColor);
      font-size: 2rem;
      padding-bottom: .7rem;
    }
     
  }
`;

export default function ResumeItem({year,title,text}) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
         <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </ResumeItemStyled>
  )
}
