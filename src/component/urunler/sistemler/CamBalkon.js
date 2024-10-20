import React from "react";
import { Parallax, Background } from "react-parallax";
import logo1 from "./assets/camoda-bg.jpg"; // İlk arka plan resmi
import wImage from "../../../assets/w.png"; // Add the wImage
import { Container, Typography, Box } from "@mui/material";
import "./CamBalkon.css";
import Form from "./Form";

const CamBalkon = () => {
  return (
    <div>
      {/* Add wImage as a background layer */}
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
        {/* Parallax Section */}
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
              <h1 className="text-lines">
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
                </span>{" "}
                Cam
                <br />
                Balkon Sistemleri
              </h1>
              <div>
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  Daha canlı, daha geniş daha aydınlık...
                </Typography>
              </div>
            </div>
          </Container>
        </Parallax>
      </Box>
      <Form />
    </div>
  );
};

export default CamBalkon;
