import React, {useState,useEffect,createContext} from 'react';
import SideBar from './components/SideBar';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfoliosPage from './pages/PortfoliosPage';
import ContactPage from './pages/ContactPage';
import { Switch as Switching, Route } from 'react-router-dom';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';


export const MyContext = createContext();


const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
   margin-left: 0;
  }
`;



function App() {
  const [theme,setTheme] = useState('dark-theme');
  const [checked,setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(()=>{
    document.documentElement.className = theme;
  },[theme]);

  const themeToggler =()=>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false);
    }else{
      setTheme('light-theme');
      setChecked(true);
    }
  }

  return (
    <div className="App">
      <MyContext.Provider value={{theme,setTheme}}>
        <SideBar navToggle={navToggle}/>
        <div className='theme'>
          <div className="light-dark-mode" style={{top:'11%',right:'-7px'}}>
                <div className="left-content">
                  <Brightness4Icon/>
                </div>
                <div className="right-content">
                  <Switch
                    style={{color:'var(--primaryColor)'}}
                    value=""
                    checked={checked}
                    onClick={themeToggler}
                    inputProps={{'aria-label':''}}
                    size="medium"
                  
                  />  
                </div>
            </div>
        </div>

        <div className="ham-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
            <MenuIcon/>
          </IconButton>
          
        </div>
        
        <MainContentStyled>

            <Switching>
              <Route path="/" exact>
                  <HomePage />
              </Route>
              <Route exact path="/about">
                  <AboutPage /> 
              </Route>
              <Route exact path="/resume">
                  <ResumePage />
              </Route>
              <Route exact path="/portfolios">
                  <PortfoliosPage />
              </Route>
              <Route exact path="/contact">
                  <ContactPage />
              </Route>
            </Switching>
        </MainContentStyled>

      </MyContext.Provider>
      
    </div>
  );
}

export default App;
