import React from "react";
import "./TanıtımComponent.css";
import { Container, Box, Typography, Grid2 } from "@mui/material";
import { Parallax, Background } from "react-parallax";
import wImage from "../../../../../assets/w.png";

export default function TanıtımComponent({ background, description }) {
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
                filter: "brightness(30%)",
                height: "100vh", // Resmin yüksekliğini tam ekran yapar
                //objectFit: "cover", // Resmi kapsayıcı olarak boyutlandırır (tam ekran kaplar)
              }}
            />
          </Background>
          <Container maxWidth="lg">
            <Grid2 container spacing={2}>
              {description.map((item, index) => (
                <Grid2
                  item
                  size={{ xs: 12, md: 4 }} // Responsive sizing: full width on extra-small, half on medium screens
                  key={index}
                  sx={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    justifyContent: "center",
                    //   paddingLeft: "10%",
                    paddingBottom: "15vh",
                  }}
                >
                  <h1 className="text">
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
                      {item.title}
                      <br />
                    </span>
                  </h1>
                  <Typography
                    sx={{
                      color: "#d8d8d8",
                      //   fontWeight: "bold",
                      letterSpacing: "1px",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Grid2>
              ))}
            </Grid2>
          </Container>
        </Parallax>
      </Box>
    </div>
  );
}
