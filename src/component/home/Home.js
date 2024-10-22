import React from "react";
import { Parallax, Background } from "react-parallax";
import logo1 from "../../assets/1logo.png"; // İlk arka plan resmi
import logo2 from "../../assets/2logo.png"; // İkinci arka plan resmi
import Header from "../header/Header";
import { Box, Container } from "@mui/material";
import "./Home.css";
import Grids from "./Grids";
import wImage from "../../assets/w.png";
const Home = () => {
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
        {/* Birinci Parallax İçeriği */}
        <Parallax strength={300}>
          <Background className="custom-bg">
            <img
              src={logo1}
              alt="Winsa Logo"
              style={{
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
              <h1 className="text-line">
                Hayata
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
                  Winsa
                </span>
                'dan
                <br />
                bak
              </h1>
            </div>
          </Container>
        </Parallax>
        <Grids />
      </Box>
    </div>
  );
};

export default Home;
