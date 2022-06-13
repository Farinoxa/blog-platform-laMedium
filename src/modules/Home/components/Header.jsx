import React from "react";
import SearchBar from "material-ui-search-bar";
import './Header.css';
import logo from '../../../assets/logo.svg';


function Header (){
    return (
        <div className="HeaderContainer">
            <div className="LogoContainer">
                <img src={logo} alt="logo" />
                <h1>LikeMedium</h1>
            </div>
            <SearchBar />
            <nav className="nav__menu">
                <ul className="nav">
                    <li className="nav-link">
                        <a href='1'>About us</a>                    
                    </li>
                    <li className="nav-link">
                        <a href='2'>Sign in</a>
                    </li>
                    <button type='button' className="nav-link getStart">
                        <a href="3">Get started</a>
                    </button>
                </ul>
            </nav>
      </div>          
    )
}


export default Header;