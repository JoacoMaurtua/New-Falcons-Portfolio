import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ProgressBar from './ProgressBar';
import Title from './Title';
const SkillsStyled = styled.section`
  .skills{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    color: var(--colorWhite);
    @media screen and (max-width:700px){
      grid-template-columns: repeat(1,1fr);
    }
  }
`;

export default function Skills() {
  return (
    <SkillsStyled>
      
        <Title title={'Principales'} span={'Principales'}/>
        <InnerLayout>
          <div className="skills">
            <ProgressBar
              title={'HTML5'}
              width={'80%'}
              text={'80%'}
            />

            <ProgressBar
              title={'MONGODB'}
              width={'70%'}
              text={'70%'}
            />

            <ProgressBar
              title={'CSS3'}
              width={'90%'}
              text={'90%'}
            />

            <ProgressBar
              title={'MONGOOSE'}
              width={'75%'}
              text={'75%'}
            />

            <ProgressBar
              title={'JAVASCRIPT'}
              width={'85%'}
              text={'85%'}
            />

            <ProgressBar
              title={'EXPRESS'}
              width={'70%'}
              text={'70%'}
            />

             <ProgressBar
              title={'REACT JS'}
              width={'85%'}
              text={'85%'}
            />

             <ProgressBar
              title={'NODE JS'}
              width={'75%'}
              text={'75%'}
            />
            
          </div>
        </InnerLayout>

    </SkillsStyled>
  )
}
