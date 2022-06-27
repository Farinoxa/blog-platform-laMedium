import React from 'react';
import './Header.css';
import logo from '../../../assets/logo.svg';

function Header() {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img src={logo} alt="logo" />
        <h1>LikeMedium</h1>
      </div>
      <nav className="navMenu">
        <ul className="nav">
          <li className="navLink">
            <a href="1">About us</a>
          </li>
          <li className="navLink">
            <a href="2">Sign in</a>
          </li>
          <button type="button" className="navLinkGetStart">
            <a href="3">Get started</a>
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
