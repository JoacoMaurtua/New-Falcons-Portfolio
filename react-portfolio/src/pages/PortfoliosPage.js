import React, {useState} from 'react';
import Title from '../components/Title';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Menu from '../components/Menu';
import projects from '../data/projects';
import Button from '../components/Button';
import Particle from '../components/Particle';
//import styled from 'styled-components';

const allButtons = ['Todos', ...new Set(projects.map(item => item.category))]

export default function PortfoliosPage() {
  const [menuItem, setMenuItems] = useState(projects);
  const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if(button === 'Todos'){
            setMenuItems(projects);
            return;
        }

        const filteredData = projects.filter(item => item.category === button);
        setMenuItems(filteredData);
    }

    console.log(setButtons);

  return (
    <MainLayout>
        <Title title={'Proyectos'} span={'Proyectos'} />
        <InnerLayout>
            <div className="p-particles-js">
                <Particle />
            </div>
            <Button filter={filter} button={button} />
            <Menu menuItem={menuItem} />
        </InnerLayout>
    </MainLayout>
  )
}
