import React from 'react';
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub'
import LanguageIcon from '@material-ui/icons/Language';

const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
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
                margin-left: 1rem;
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

export default function Menu({menuItem}) {
  return (
    <MenuItemStyled >
    {
        menuItem.map((item)=>{
            return <div className="grid-item" key={item.id}>
                <div className="portfolio-content">
                    <div className="portfolio-image">
                        <img src={item.image} alt=""/>
                        <ul>
                            <li>
                                <a href={item.link}>
                                    <GitHub />
                                </a>
                                <li>
                                <a href={item.link2}>
                                    <LanguageIcon />
                                </a>
                            </li>
                            </li>
                        </ul>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            </div>
        })
    }
</MenuItemStyled>
  )
}

