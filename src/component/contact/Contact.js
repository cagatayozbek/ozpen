import React from "react";
import Card from "react-bootstrap/Card";
import hero from "../../assets/ozpen-on.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Contact.css"; // Özel stiller için CSS dosyası
import { FaEnvelope, FaFax, FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  const apiKey = process.env.REACT_APP_MAP_API;
  return (
    <>
      {/* Hero Alanı */}
      <Card
        className="text-white"
        style={{ height: "55vh", overflow: "hidden", border: "none" }}
      >
        <Card.Img src={hero} alt="Hero image" className="hero-image" />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center">
          <Card.Title className="display-4" style={{ marginTop: "20vh" }}>
            Bize Ulaşın
          </Card.Title>
        </Card.ImgOverlay>
      </Card>

      {/* İçerik Bölümü */}
      <Container fluid="lg" style={{ marginTop: "80px" }}>
        <Row>
          <Col>
            <h1>Bize Ulaşın</h1>
            <p>
              Ürün ve hizmetlerimiz hakkında detaylı bilgi için bize ulaşabilir,
              en kısa sürede geri bildirim sağlayabilirsiniz.
            </p>
          </Col>
        </Row>

        {/* Adres ve Telefon Bilgileri */}
        <Row style={{ marginTop: "100px", marginBottom: "15px" }}>
          <Col className="d-flex align-items-center gap-2 mb-3">
            <FaLocationDot size={20} />
            <div>
              İvedik Organize Sanayi Bölgesi 1332.Sokak <br />
              No:84/86 Ostim / ANKARA
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: "30px" }}>
          {/* Telefon Numarası */}
          <Col className="d-flex align-items-center gap-2">
            <FaPhone size={20} />
            <a
              href="tel:+903123955603"
              style={{ color: "#000", textDecoration: "none" }}
            >
              0312 395 56 03
            </a>
          </Col>
        </Row>
        <Row style={{ marginBottom: "30px" }}>
          {/* Telefon Numarası */}
          <Col className="d-flex align-items-center gap-2">
            <FaFax size={20} />
            0312 395 46 72
          </Col>
        </Row>
        <Row>
          {/* E-posta */}
          <Col className="d-flex align-items-center gap-2">
            <FaEnvelope size={24} />
            <a
              href="mailto:ozpenpvc@ozpenpvc.com.tr"
              style={{ color: "#000", textDecoration: "none" }}
            >
              ozpenpvc@ozpenpvc.com.tr
            </a>
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Col>
            <iframe
              title="Başkent Özpen"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33252.626023460936!2d32.74253822149987!3d39.977539853831935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34988ac52cd5d%3A0x948ebc434c04eca2!2zQkHFnktFTlQgw5ZaUEVOIFBWQw!5e0!3m2!1str!2str!4v1730127193232!5m2!1str!2str"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Render the map here */}
          </Col>
        </Row>
      </Container>
    </>
  );
}
