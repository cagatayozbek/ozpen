import React from "react";
import Card from "react-bootstrap/Card";

export default function Hero({ hero, title, isBright }) {
  const imageBrightness = isBright ? "brightness(0.62)" : "brightness(0.9)";
  const overlayBackground = isBright
    ? "linear-gradient(180deg, rgba(7, 12, 24, 0.58), rgba(7, 12, 24, 0.5))"
    : "linear-gradient(180deg, rgba(7, 12, 24, 0.28), rgba(7, 12, 24, 0.22))";

  return (
    <>
      <Card
        className="text-white"
        style={{ height: "55vh", overflow: "hidden", border: "none" }}
      >
        <Card.Img
          src={hero}
          alt="Hero image"
          className="page-hero-image"
          style={{
            filter: imageBrightness,
            height: "100%",
            objectFit: "cover",
            width: "100%",
          }}
        />
        <div
          aria-hidden="true"
          className="page-hero-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background: overlayBackground,
            zIndex: 1,
          }}
        />
        <Card.ImgOverlay
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{ zIndex: 2 }}
        >
          <Card.Title
            className="display-4"
            style={{
              fontWeight: 700,
              margin: 0,
              textShadow: "0 3px 18px rgba(0, 0, 0, 0.55)",
            }}
          >
            {title}
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
