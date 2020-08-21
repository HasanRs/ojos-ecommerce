import { useState, useRef, useEffect } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Navigation = () => {
  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "white" : "transparent",
      }}
      fixed="top"
      expand="md"
    >
      <Navbar.Brand
        style={{
          fontSize: "25px",
        }}
        href="/"
      >
        OJOS
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{
          border: "none",
        }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto"
          style={{
            maxWidth: "70vw",
          }}
        >
          <NavDropdown title="Shop">
            <Navbar>
              <Nav className="mr-auto">
                <Nav.Link href="/collections/new">New</Nav.Link>
                <Nav.Link href="/collections/tops">Tops</Nav.Link>
                <Nav.Link href="/collections/bottoms">Bottoms</Nav.Link>
                <Nav.Link href="/collections/accessories">Accessories</Nav.Link>
                <Nav.Link href="/collections/bags">Bags</Nav.Link>
                <Nav.Link href="/collections/jewelry">Jewelry</Nav.Link>
              </Nav>
            </Navbar>
          </NavDropdown>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse
        style={{
          maxWidth: "200px",
        }}
      >
        <Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              style={{
                width: "100%",
              }}
            />
          </Form>
          <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
