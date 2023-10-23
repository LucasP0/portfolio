import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo-2.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/Github.png';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img className="img_nav" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'Habilidades' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Habilidades')}>Habilidades</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'Projetos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Projetos')}>Projetos</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/lucas-prestes-a59304253/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="linkDin" /></a>
                <a href="https://www.facebook.com/lucasprestes.pestes/" target="_blank" rel="noreferrer"><img src={navIcon2} alt="facebook" /></a>
                <a href="https://www.instagram.com/lucasprestesprestes/?hl=pt-br" ><img src={navIcon3} alt="insta" /></a>
                <a href="https://github.com/LucasP0" target="_blank" rel="noreferrer"><img src={navIcon4} alt="GitHub" /></a>
              </div>

              <a href="https://wa.me/5591987346007" target="_blank" rel="noreferrer" className="a_cont">
                <button className="vvd">
                  <span>Entrar em Contato</span>
                </button>
              </a>

            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
