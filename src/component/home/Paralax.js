import React from "react";
import "./Home.css";
import { Container, Box } from "@mui/material";
import { Parallax, Background } from "react-parallax";
import wImage from "../../assets/w.png";

export default function Paralax({ logo, background, title }) {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          height: "100vh",

          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${wImage})`, // Use wImage as background
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.2, // Adjust opacity for a subtle background effect
            zIndex: 1, // Ensure it's behind all content and parallax
          },
        }}
      >
        <Parallax strength={300}>
          <Background className="custom-bg">
            <img
              src={background}
              alt="Winsa Logo"
              style={{
                filter: "brightness(50%)",
                height: "100vh", // Resmin yüksekliğini tam ekran yapar
                objectFit: "cover", // Resmi kapsayıcı olarak boyutlandırır (tam ekran kaplar)
              }}
            />
          </Background>
          <Container maxWidth="xl">
            <div
              style={{
                height: "100vh",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "10%",
              }}
            >
              <img src={logo} style={{ filter: "brightness(0) invert(1)" }} />
              <h1 className="text-lines">
                {title[0]}
                <br />

                <span style={{ position: "relative", zIndex: 1 }}>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "30%",
                      backgroundColor: "#FE5001",
                      zIndex: -1,
                    }}
                  ></span>
                  {title[1]}
                </span>
              </h1>
            </div>
          </Container>
        </Parallax>
      </Box>
    </div>
  );
}
