import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
 
    .light-theme {
    --navigation: #00919c;
    --navHover: #093a3e;
    --backGroundDark: #ececec;
    --backGroundItems: #093a3e;
    --primaryColor:#00919c;
    --secondaryColor: #292929;
    --backDarkColor: #F1F1F1;
    --borderColor:  #00919c;
    --backLightColor: #f1f1f1;
    --fontLight: #a4acc4;
    --fontDark: #313131;
    --fontDrak2: #151515;
    --sideDark: #9f9fa0;
    --colorWhite: #151515;
    --hoverFont: #fff;
    --colorBars: #e4e4e4;
    --colorBoton:#00919c;
    --hoverBoton: #60e9f8;
    --projectCard: #ffffff;
    --boxesShadow: #999;
    --contactBoX: #fff;
  }   

   .dark-theme{
    --navigation: #093a3e;
    --navHover:#00919c;
    --backGroundDark: #001011;
    --backGroundItems: #093a3e;
    --primaryColor:#60e9f8;
    --secondaryColor: #6c757d;
    --backDarkColor: #10121a;
    --borderColor:  #60e9f8;
    --backLightColor: #f1f1f1;
    --fontLight: #a4acc4;
    --fontDark: #313131;
    --fontDrak2: #151515;
    --sideDark: #093a3e;
    --colorWhite: #ffffff;
    --hoverFont: #fff;
    --colorBars: #093a3e;
    --colorBoton:#00919c;
    --hoverBoton: #60e9f8;
    --projectCard: #093a3e;
    --boxesShadow: #001011;
    --contactBoX: #093a3e;
  } 

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
  }

  h3{
    font-size: 1.5rem;
  }

  body{
    background-color: var(--backGroundDark);
    color:  white;  /* #a4acc4 */
    transition: all .4s ease-in-out;
    
  }

  body::-webkit-scrollbar{
    width: 9px;
    background-color: #001011;
  }

  body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #093a3e;
  }

  body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #6c757d;
  }

  a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
  }

  h1{
    font-size: 3rem;
    span{
      font-size: 3rem;
      @media screen and (max-width: 502px){
        font-size: 2rem;
      }
    }
    @media screen and (max-width: 502px){
     font-size: 2rem;
     
    }
  } 

  .p-particles-js{
      position: absolute;
      top: 0;
      left:0;
      margin-top: -30rem;
      margin-left: 17rem;

      @media screen and (max-width: 502px){
        display:none;
      }

  }

  .light-dark-mode{
    position: fixed;
    right: 0;
    top: 20%;
    background-color: #3aafb9;;
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }

  //Nav toggler

  @media screen and (max-width:1200px){
    
  }
  .ham-menu{
    position: absolute;
    right: 4%;
    top:3%;
    display: none;
    z-index: 15;
    svg{
      font-size: 2.5rem;
      color: var(--primaryColor);
    }
  }

  .nav-toggle{
    transform: translateX(0);
    z-index: 20;
  }

  @media screen and (max-width:1200px){
    .ham-menu{
      display: block;
    }
  }


`;

export default GlobalStyle;