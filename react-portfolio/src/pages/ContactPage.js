import React, {useState,useRef} from 'react';
import { MainLayout,InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from '../components/Title';
import PrimaButton from '../components/PrimaButton';
/* import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../components/ContactItem'; */
import Particle from '../components/Particle';
import emailjs from '@emailjs/browser';
import VoxelDog from '../components/VoxelDog';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';


const ContactPageStyled = styled.section`
  color: var(--colorWhite);
  .contact-section{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      grid-column-gap: 2rem;
      @media screen and (max-width:978px){
        grid-template-columns: repeat(1,1fr);
        .form-button{
          margin-bottom: .5rem;
        }
      }
      
       .right-content{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        @media screen and (max-width:502px){
          width:70%;
        }
      }
        
      .contact-title{
        h4{
          color: var(--colorWhite);
          padding: .8rem 0;
          font-size: 2.2rem;
        }
      }
      .form{
        width: 100%;
        @media screen and (max-width:502px){
          width: 100%;
        }
        .form-field{
          margin-top: 2.2rem;
          position: relative;
          width: 100%;
          label{
            position: absolute;
            left: 20px;
            top: -20px;
            display: inline-block;
            background: var(--backGroundDark);
            padding: .1rem .5rem; 
            font-weight: bold;
            border-radius: 5px;
            color: var(--colorWhite);
        
          }
          input{
            border: 2px solid var(--borderColor);
            outline: none;
            background: transparent;
            height: 3.6rem;
            padding: 0 15px;
            width: 100%;
            color: inherit;
          }
          textarea{
            background: transparent;
            color: inherit;
            border: 2px solid var(--borderColor);
            outline: none;
            width: 100%;
            padding:1.2rem 1rem;

          }
        }

      }
  }


`;

export default function ContactPage() {
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputSubject = useRef(null);
  const inputText = useRef(null);
  const formRef = useRef();

  const [data,setData] = useState({
    name:'',
    user_email:'',
    subject:'',
    message:''
  });

  const {name, user_email, subject, message} = data;

  const [isSubmit,setIsSubmit] = useState(false);
  
  //console.log(isSubmit);

  const handleSubmit = (event) =>{
    
    event.preventDefault();

    const datos = {...data}
    console.log('Hello',datos);

    emailjs.sendForm('service_flcrv6i', 'template_7e9mohm', formRef.current, 'user_Kb4oVVuXdpn6uZbhT6R5d')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    setIsSubmit(true);

    if(setIsSubmit){
      Swal.fire({
        icon: 'success',
        title: '¡Recibido! ¡Nos contactaremos pronto!',
        showConfirmButton: false,
        timer: 3000
      })      
    }
    
    
    
    inputName.current.value = '';
    inputEmail.current.value = '';
    inputSubject.current.value = '';
    inputText.current.value = '';
    
    home();
  };

  const handleOnChange = (event) =>{
    const {name,value} = event.target;
    setData({
      ...data,
      [name]:value
    })

  }

  const history = useHistory();

  const home = () => {
    history.push("/");
  }


  return (
    <MainLayout>
      
     
      <Title title={'Contacto'} span={'Contact'}/>
       
      
      <ContactPageStyled>
     
       
        <InnerLayout className={"contact-section"}>
          <div className="p-particles-js">
            <Particle />
          </div>
            <div className="left-content">
              <div className="contact-title">
                  <h4>¡Contáctanos!</h4>
              </div>
              <form className="form" ref={formRef} onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="name" id="name">Escriba su nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    ref={inputName}
                    onChange={handleOnChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="subject" id="subject">Asunto </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    ref={inputSubject}
                    onChange={handleOnChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email" id="email">Escriba su email </label>
                  <input
                    type="email"
                    id="email" 
                    name="user_email"
                    value={user_email}
                    ref={inputEmail}
                    onChange={handleOnChange}
                    required
                  />
                  {
                    //input validation
                    (user_email.length > 0 && !/\S+@\S+\.\S+/.test(user_email))?
                    <p>Email inválido! Por favor intente de nuevo</p>:
                    ''
                  }
                </div>


                <div className="form-field">
                  <label htmlFor="textarea">¿En qué podemos ayudarte? </label>
                  <textarea 
                    id="textarea" 
                    cols="30" rows="7.5"
                    name="message"
                    value={message}
                    ref={inputText}
                    onChange={handleOnChange}
                    required
                  ></textarea>
                </div>
                <div className="form-field form-button">
                    <PrimaButton title={"ENVIAR"} type="submit"/>
                </div>
              </form>
            </div>
            <div className="right-content">
                <VoxelDog/>
            </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  )
}
