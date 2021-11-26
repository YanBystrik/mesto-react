import React from 'react';
import logo from '../images/header_logo.svg';

function Header() {
    return(
        <header className="header">
            <img className="header__logo" src={logo} alt="Лого" />
        </header>
    );
}

export default Header;