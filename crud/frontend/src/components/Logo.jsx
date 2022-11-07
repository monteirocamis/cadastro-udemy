import React from 'react'
import logo from '../assets/images/LogoHorizontalPreto.png'
import './logo.css'

///export const  Logo  = () =>{
  export default props =>{
    return(

        <aside className="logo">
          <img src={logo} alt='escrito coletivo codivas em preto e roxo com sombra em verde'/>

        </aside>
        )
}
//export default Logo