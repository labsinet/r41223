import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "./logo.png";
import './Header.scss';

const Header = () => {
  const [title, setTitle] = useState("Please, login!");
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  }

  const changeTitle = () => {
    setTitle("is logged");
  }

  // const clickMe = (login) => {
  //   console.log('Clicked '+login);
  // }
 
    return (
    <div >
       <header className='header'>
          <div className='header-container'>
              <div className='logo-container'>
                  <img src={ logo } alt='logo' className='logo' />
              </div>
          </div>
       
       <nav className={ showMenu ? "nav nav-show" : "nav"} >
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/shop">Shop</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item">Contact</li>
          </ul>
       </nav>
       <div className="login-container">
          <button className="login-button" onClick={ () => changeTitle() }>Login</button>
       </div>
          <div className='burger-container' onClick={handleMenuToggle}>
            <div className='burger-line'></div>
            <div className='burger-line'></div>
            <div className='burger-line'></div>
          </div>

       </header>
       <h3>{ title }</h3>
    </div>
  );
}

export default Header;
