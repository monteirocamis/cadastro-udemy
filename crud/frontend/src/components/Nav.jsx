import React from 'react'
import './nav.css'

//export const  Nav  = () =>{
  export default props => 
  <aside className='menu-area'>
    <nav  className='menu'>
      <a href="#/"> 
        <i className='fa fa-home'> </i> inicio
      </a>

      <a href="#/"> 
        <i className='fa fa-users'> </i> usuarios
      </a>

    </nav>
  </aside>
           
//export default Nav