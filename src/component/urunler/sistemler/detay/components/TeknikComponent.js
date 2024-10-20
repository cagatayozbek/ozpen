import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import wImage from "../../../../../assets/w.png";
//import logo from "../../assets/yeni-dorado-76png-29-01-2021-18-33-55png_12-03-2024_14-39-02.png";
export default function TeknikComponent({
  technicalData,
  logo,
  reddot,
  teknik,
  desc,
}) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${wImage})`, // Arka plan resmi
        backgroundSize: "cover", // Resmi tam olarak kapla
        backgroundRepeat: "no-repeat", // Tekrar etmesin
        backgroundPosition: "center", // Ortada konumlandır
        height: "100vh", // Yüksekliği tam ekran
      }}
    >
      <Container maxWidth={"lg"}>
        <Grid2
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Grid2 size={5}>
            <h1
              className="text"
              style={{ color: "black", fontSize: "60px", marginBottom: "20px" }}
            >
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
                Teknik
              </span>
              <br />
              Bilgiler
            </h1>
            <img src={logo} alt="Dorado" style={{ marginBottom: "30px" }} />
            <Typography sx={{ paddingBottom: "30px" }}>{desc}</Typography>
            <Box>
              {technicalData.map((item, index) => (
                <Box
                  key={index}
                  sx={
                    {
                      //display: "flex", // Align items in a row
                      //   justifyContent: "space-between", // Ensure spacing between label and value
                    }
                  }
                >
                  <Grid2 container>
                    <Grid2 size={6} sx={{ width: "50%" }}>
                      {" "}
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        {item.label}:
                      </Typography>
                    </Grid2>
                    <Grid2 size={6} sx={{ width: "50%" }}>
                      {" "}
                      <Typography sx={{ color: "black", whiteSpace: "nowrap" }}>
                        {item.value}
                      </Typography>
                    </Grid2>
                  </Grid2>
                </Box>
              ))}
            </Box>
          </Grid2>
          <Grid2 size={3}>
            {reddot ? (
              <img
                src={reddot}
                alt="reddot"
                style={{ paddingBottom: "100%" }}
              />
            ) : (
              <div></div>
            )}
          </Grid2>
          <Grid2 size={4}>
            {teknik ? (
              <img
                src={teknik}
                alt="teknik"
                style={{ height: "auto", width: "100%" }}
              />
            ) : (
              <div></div>
            )}
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
