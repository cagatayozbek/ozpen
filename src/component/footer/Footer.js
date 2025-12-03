import React from "react";
import { Link } from "react-router-dom";
import logo from "./ozpen-pvc-dark-logo.png";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";
import urunler from "./urunData"; // Ürün verilerini içe aktar

const Footer = () => (
  <footer
    className="page-footer font-small pt-4"
    style={{ backgroundColor: "#636363", color: "#fff", marginTop: "100px" }}
  >
    <div
      className="container-fluid text-md-left"
      style={{ paddingTop: "40px" }}
    >
      <Row style={{ paddingBottom: "40px" }}>
        <Col md={3} className="mt-md-0 mt-3">
          <img src={logo} alt="logo" style={{ height: "40px" }} />
        </Col>
      </Row>
      <Row>
        {/*          */}

        <hr className="clearfix w-100 d-md-none pb-0" />

        {urunler.map((kategori, index) => (
          <Col md={3} className="mb-md-0 mb-3">
            <strong>{kategori.title}</strong>

            <ul>
              {kategori.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={`/${link.path}`} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
    </div>

    <div className="footer-copyright text-center py-3">
      © {new Date().getFullYear()} Tüm Hakları Saklıdır: Başken Özpen PVC
    </div>
  </footer>
);

export default Footer;
