import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
       <header className='header'>
           <div className='container header-inner'>
               <h2>Quotes Central</h2>
               <nav className='main-nav'>
                   <ul>
                       <li><NavLink to='/'>Quotes</NavLink>|</li>
                       <li><NavLink to='/add-quote'>Submit new qoute</NavLink></li>
                   </ul>
               </nav>
           </div>
       </header>
    );
};

export default Header;