import React from "react";
import Card from "react-bootstrap/Card";

export default function Hero({ hero, title, isBright }) {
  return (
    <>
      <Card
        className="text-white"
        style={{ height: "55vh", overflow: "hidden", border: "none" }}
      >
        <Card.Img
          src={hero}
          alt="Hero image"
          className="hero-image"
          style={{ filter: isBright ? "brightness(0.4)" : "brightness(1)" }} // Parlaklık durumu burada kontrol ediliyor
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center">
          <Card.Title className="display-4" style={{ marginTop: "20vh" }}>
            {title}
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
