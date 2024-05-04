// Header.js
import React from "react";
import "../style/style.css";
import {
  Container,
  Nav,
  NavLink as BootstrapNavLink,
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
} from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Header() {
  // NavLink with dynamic href based on the text
  function Navi({ text, href }) {
    const [hover, setHover] = React.useState(false);

    return (
      <Link
        as={BootstrapNavLink}
        className={`text-secondary p-2 fs-5  fw-bold ${
          hover ? "custom-hover-class" : ""
        }`}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      to={href}
      >
        {text}
  </Link>
    );
  }

  return (
    <Navbar
      expand="lg"
      className="top"
      style={{ backgroundColor: "rgba(65, 213, 10, 0.525)" }}
    >
      <Container>
        <NavbarBrand href="/" className="fs-5 p-2 text-primary-50 fw-bold">
          Michuyim dotUK
        </NavbarBrand>

        <NavbarToggle aria-controls="basic-navbar-nav">
          <FaBars />
        </NavbarToggle>

        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           <Navi href='/' text='Home' />
           <Navi href='/about' text='About'/>
           <Navi href='/projects' text='Projects' />
           <Navi href='/photos' text='Photos' />
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default Header;
