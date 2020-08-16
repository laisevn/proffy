import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/icons/whatsapp.svg'

const TeacherItem = () => (
  <article className="teacher-item">
    <header>
      <img src="https://avatars3.githubusercontent.com/u/4587941?s=460&u=1f7e598b52a68beba7e71fbd3047a3c8ffbbc464&v=4" alt="Laise Viana"/>
      <div>
        <strong>Laise Viana</strong>
        <span>Química</span>
      </div>
    </header>

    <p>Entusiasta das melhores tecnologias de química avançada. </p>
    
    <br />
    <p>
      Apaixonado por explodir coisas em laboratório e por mudar a 
      vida das pessoas através de experiências. Mais de 200.000 
      pessoas já passaram por uma das minhas explosões.
    </p>

    <footer>
      <p>
        Preço/Hora 
        <strong>R$ 35,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherItem;