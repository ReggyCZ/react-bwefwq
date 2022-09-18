import { useState, useEffect } from "react";
import { NavBar, Container } from "react-bootstrap";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scolled, seScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => {
    if (window.scrollY > 50) {
      seScrolled(true);
    } else {
      seScrolled(false);
    }
  }

  window.addEventListener("scrolll", onscroll);

  return () => window.removeEventListener("scroll", onScroll);
}, [])

const onUpdateActiveLink = (value) => {
  setActiveLink(value);
}

  return {
    <NavBar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <NavBar.Brand href="#home">
          <img src={} alt="Logo" />
        </NavBar.Brand>
        <NavBar.Toogle aria-controls="basic-navbar-nav"> 
          <span className="navbar-toogle-icon"></span>
        </NavBar.Toogle>
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} OnClick={() => onUpdateActiveLink('home')}>Domů</Nav.Link>
          <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} OnClick={() => onUpdateActiveLink('about')}>O mně</Nav.Link>
          <Nav.Link href="#skill" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} OnClick={() => onUpdateActiveLink('skills')}>Grafika</Nav.Link>
          <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} OnClick={() => onUpdateActiveLink('contact')}>Kontakty</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={} alt="" /></a>
              <a href="#"><img src={} alt="" /></a>
              <a href="#"><img src={} alt="" /></a>
              <a href="#"><img src={} alt="" /></a>
            </div>
            <button className="vvd" OnClick={() => console.log('connect')}><span>Připoj se</span></button>
          </span>
        </NavBar.Collapse>
      </Container>
    </NavBar>


  }
}