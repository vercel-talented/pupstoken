/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-scroll'
import logo from '../images/logo.png'
import { ReactComponent as MySVG } from '../images/new/6.svg';
import img_bk from '../images/new/6.png'

export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 100%)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                
                <nav className="Nav">
                    
                    <Link activeClass="active" to="home" onClick={toggleNav} spy={true} smooth={true} className="menu-link">
                        <img style={{ width: '260px', height: '80px', top: '0px', left: '500px', position:'initial' }} src={img_bk} alt=''></img>
                    </Link>
                    <Link activeClass="active" to="home" onClick={toggleNav} spy={true} smooth={true} className="menu-link">Home</Link>
                    <Link to="experience" spy={true} smooth={true} onClick={toggleNav} className="menu-link">About me</Link>
                    <Link to="mintonomics" spy={true} smooth={true} onClick={toggleNav} className="menu-link">Mintonomics</Link>
                    
                </nav>
            </CSSTransition>
            {/* <button onClick={toggleNav} className="Burger">
                <i className='fa fa-bars'></i>
            </button> */}
        </header>
    );
}
