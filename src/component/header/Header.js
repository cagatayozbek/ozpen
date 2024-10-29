import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Outlet, useNavigate, Link } from "react-router-dom";
import logo from "./logo.png"; // Logo dosyanız

// Navbar bağlantılarını tanımlıyoruz
export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  /* 
  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  const handleTitleClick = () => navigate("/urunler"); */

  return (
    <>
      {/* Bootstrap Navbar yapısı */}

      <Navbar
        collapseOnSelect
        expand="sm"
        variant="light"
        className="shadow"
        sticky="top"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Container fluid="lg">
          {/* Marka ve logo */}
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="logo"
              style={{ height: "70px" }} // Logo boyutu ayarlanıyor
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ marginRight: "30px" }} href="/">
                Ana Sayfa
              </Nav.Link>
              <Nav.Link style={{ marginRight: "30px" }} href="/kurumsal">
                Kurumsal
              </Nav.Link>
              {/*               <Nav.Link style={{ marginRight: "30px" }} href="/urunler">
                Ürünler
              </Nav.Link> */}
              <NavDropdown
                style={{ marginRight: "30px" }}
                title="Ürünler"
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/urunler/pencere-ve-kapi-sistemleri"
                >
                  Pencere ve Kapı Sistemleri
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/urunler/surme-sistemleri">
                  Sürme Sistemleri
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/urunler/panjur-ve-kepenk-sistemleri"
                >
                  Kepenk ve Panjur Sistemleri
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/urunler/donanim-sistemleri">
                  Donanım Sistemleri
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/urunler/cambalkon-sistemleri">
                  Cambalkon Sistemleri
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link style={{ marginRight: "30px" }} href="/iletisim">
                İletişim
              </Nav.Link>
              <Nav.Link style={{ marginRight: "30px" }} href="/referanslar">
                Referanslar
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Item className="d-none d-md-block">0(312) 395 0696</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Outlet içerik bölgesi */}
      <div>
        <Outlet />
      </div>
    </>
  );
}
