import React from 'react'
import { Login } from '../components/Login';
import flixua from '../image/FLIXUA.png'
import './LoginPage.css'
import { auth_style } from '../components/login_style';
import Footer from '../../Footer/Footer';

const LoginPage = (props) => {
  return (
      <div>
        <img className='img' src={flixua} alt=""></img>
          <Login login_style = {auth_style} />
          <Footer lang={props.lang} changeLang={props.changeLang} text={props.text}/>
      </div>
  )
}

export default LoginPage
