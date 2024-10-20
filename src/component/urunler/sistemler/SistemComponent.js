import React from "react";
import { Box, Grid2 as Grid, Typography, Container } from "@mui/material";
import "./sistemComponent.css";
import wImage from "../../../assets/w.png";
import Form from "./Form";

export default function SistemComponent({ title, menuItem }) {
  return (
    <div>
      <Container
        className="container-fullscreen"
        sx={{
          backgroundImage: `url(${wImage})`, // Arka plan resmi
          backgroundSize: "cover", // Resmi tam olarak kapla
          backgroundRepeat: "no-repeat", // Tekrar etmesin
          backgroundPosition: "center", // Ortada konumlandır
          height: "100vh", // Yüksekliği tam ekran
        }}
      >
        <Box sx={{ marginTop: "7%", display: "flex" }}>
          <h1 className="header-text">
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
              {title[0]}
            </span>{" "}
            {title[1]}
          </h1>
        </Box>

        <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
          <Grid container>
            {menuItem.map((item, index) => (
              <Grid
                key={index}
                size={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  animationDelay: `${index * 0.5}s`, // Sırayla animasyon için gecikme
                }}
                className="grid-item"
              >
                <img
                  src={item.imgSource}
                  alt={item.title}
                  style={{
                    height: "auto",
                    width: "70%",
                  }}
                  loading="lazy"
                />
                <img
                  src={item.imgDesSource}
                  alt={item.title}
                  style={{
                    height: "auto",
                    width: "70%",
                    marginTop: "20px",
                  }}
                  loading="lazy"
                />
                <Typography sx={{ marginTop: "20px", fontWeight: "bold" }}>
                  {item.imgDesc}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Form />
      {/* Ücretsiz Keşif Formu Tam Ekran */}
    </div>
  );
}
