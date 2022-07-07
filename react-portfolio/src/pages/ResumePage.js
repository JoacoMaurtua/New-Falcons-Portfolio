import React, {useContext} from 'react';
import { MyContext } from '../App';
import Resume from '../components/Resume';
import Skills from '../components/Skills';
import { MainLayout } from '../styles/Layouts';
import Mern from '../images/Mern.png';
import Mern2 from '../images/Mern-2.png';
import styled from 'styled-components';
import Particle from '../components/Particle';

const ImgContainer = styled.div`
  float: right;
  margin-top: -1.875rem;
  margin-right: 7rem;
  img{
    width: 18.75rem;
  }
  @media screen and (max-width:549px){
    img, .p-particles-js{
      display: none;
    }
  }

`

export default function ResumePage() {
  const {theme} = useContext(MyContext);
  return (
    <MainLayout>
      <div className="p-particles-js">
            <Particle />
      </div>
      <Skills/>
      <ImgContainer>
        {
          theme === 'dark-theme'?<img src = {Mern} alt="MERN"/>:
          <img src = {Mern2} alt="MERN"/>
        }
      </ImgContainer>
      <Resume />
    </MainLayout>
  )
}

