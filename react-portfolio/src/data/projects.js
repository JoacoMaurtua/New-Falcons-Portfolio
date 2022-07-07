import chifaApp from '../images/chifa-app.PNG';
import gameApp from '../images/game-app.PNG'
import google from '../images/google.PNG';
import netflix from '../images/netflix.PNG';
import ctc from '../images/ctc.PNG';
import nike from '../images/nike.PNG';
import task from '../images/task.PNG';
import whats from '../images/whats.PNG';
import table from '../images/table.PNG';
import crypto from '../images/crypto.PNG';
import dog from '../images/dog.PNG';
import tierra from '../images/tierra.PNG';
import ecommerceMP from '../images/ecommerceMP.PNG';


const projects = [
  {
    id:1,
    category: 'Frontend',
    image: google,
    link: 'https://github.com/JoacoMaurtua/Google-search-simulator',
    link2: 'https://simple-search-simulator.web.app/',
    title: 'Simulador de Google',
    text: 'Una replica de la interfaz principal de Google creada en React.js'
  },

  {
    id:2,
    category: 'Frontend',
    image: chifaApp,
    link: 'https://github.com/JoacoMaurtua/ChifaPage',
    link2: 'https://chifa-kaiken.netlify.app/',
    title: 'Pagina de Chifa',
    text: 'Pagina de restaurante hecha en HTML,CSS y JS'
  },

  {
    id:3,
    category: 'Frontend',
    image: netflix,
    link: 'https://github.com/StefanoQuiroz/NetflixCloneReact',
    link2: 'https://netflix-clone-64280.web.app/',
    title: 'Clon de Netflix',
    text: 'Una replica de Netflix Rest API muy similar a la plataforma original.'
  },

  {
    id:4,
    category: 'Frontend',
    image: ctc,
    link: 'https://github.com/StefanoQuiroz/CTC',
    link2: 'https://ctc-demo-efdbf.web.app/',
    title: 'Pagina de cursos',
    text: 'Pagina de cursos creada en React.js para el test de una empresa.'
  },

  {
    id:5,
    category: 'Frontend',
    image: nike,
    link: 'https://github.com/JoacoMaurtua/3d-animated-card',
    link2:'https://parallaxshoes.firebaseapp.com/',
    title: 'Tarjeta en 3D!',
    text: 'Tarjeta de zapatilla nike air jordan creada con framer motion.'
  },

  {
    id:6,//
    category: 'Fullstack',
    image: ecommerceMP,
    link: 'https://github.com/JoacoMaurtua/Prueba-Mercado-Pago',
    link2:'http://107.22.126.62/',
    title: 'CheckoutPro Mercado Pago',
    text: 'Prueba para certificacion de pasarela de pagos de Mercado Libre.'
  },

  {
    id:7,
    category: 'Fullstack',
    image: task,
    link: 'https://github.com/JoacoMaurtua/Complete-task-manager',
    link2:'http://18.224.96.131/',
    title: 'Task Manager',
    text: 'Aplicacion para crear tareas en MERN, se utilizo JWT para la autorizacion del user.'
  },

  {
    id:8,
    category: 'Fullstack',
    image: whats,
    link: 'https://github.com/StefanoQuiroz/MyOwnChat',
    link2:'https://chatwsp.web.app/',
    title: 'Chat WhatsApp',
    text: 'Replica de chat de whatsApp utilizando MERN.'
  },

  {
    id:9,
    category: 'Fullstack',
    image: table,
    link: 'https://github.com/StefanoQuiroz/Kanban-Board',
    link2:'http://18.224.23.223/',
    title: 'Kanban App',
    text: 'Aplicacion MERN para administrar tiempos, tareas y proyectos .'
  },


  {
    id:10,
    category: 'Frontend',
    image: crypto,
    link: 'https://github.com/JoacoMaurtua/Bitcoin-Cryptocurrency-',
    link2:'https://cryto-tracker.web.app/',
    title: 'Crypto Tracker',
    text: 'Aplicacion REST API que rastrea en tiempo real los datos de cryptomonedas.'
  },


  {
    id:11,
    category: 'Ideas Locas',
    image: nike,
    link: 'https://github.com/JoacoMaurtua/3d-animated-card',
    link2:'https://parallaxshoes.firebaseapp.com/',
    title: 'Tarjeta en 3D!',
    text: 'Tarjeta de zapatilla nike air jordan creada con framer motion.'
  },

  {
    id:12,
    category: 'Ideas Locas',
    image: gameApp,
    link: 'https://github.com/JoacoMaurtua/JS-Games/tree/master/ChewAdventure',
    link2:'https://chewadventure-7ddaf.web.app/',
    title: 'Chew Adventure',
    text: 'Juego simple utilizando js y html canvas, tematica de Star Wars!'
  },

  {
    id:13,
    category: 'Ideas Locas',
    image: dog,
    link: 'https://github.com/JoacoMaurtua/Sprite-Animation',
    link2:'https://dog-animation.web.app/',
    title: 'Perrito sprite',
    text: 'Animacion tipo juego que le da vida a un sprite utilizando JS.'
  },


  {
    id:14,
    category: 'Ideas Locas',
    image: tierra,
    link: 'https://github.com/StefanoQuiroz/Mundo-3D',
    link2:'https://mundo-three-d.web.app/',
    title: 'Planeta en 3D!',
    text: 'Animacion en 3d del planeta Tierra hecha en React.js con Three.js.'
  }

  
]

export default projects;