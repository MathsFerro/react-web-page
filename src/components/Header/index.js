import React from 'react';
import header from './header.css';
import responsive from './responsive.js';

const Header = () => {
    return (
        <header className="main-header">
            <section className="container-header">
                <div className="logo-header"><a href=""></a></div>
                <div className="menu-toggle"></div>
                <nav className="main-nav">
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a href="">SOBRE</a></li>
                        <li><a href="">GALERIA</a></li>
                        <li><a href="">CONTATO</a></li>
                    </ul>
                </nav>


            </section>
        </header>
    );
}

export default Header;
