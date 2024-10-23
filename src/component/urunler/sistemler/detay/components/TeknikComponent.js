import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import wImage from "../../../../../assets/w.png";
//import logo from "../../assets/yeni-dorado-76png-29-01-2021-18-33-55png_12-03-2024_14-39-02.png";
export default function TeknikComponent({
  technicalData,
  logo,
  teknik,
  background,
  description,
}) {
  return (
    <div>
      <div>
        <img src={logo} />
      </div>
      <img
        src={background}
        alt="Sürdürülebilir Bir Gelecek Arka Planı" // Daha açıklayıcı alt metin
        style={{
          maxWidth: "100%", // Genişliği konteynıra sığacak şekilde sınırlar
          height: "auto", // Orantılı şekilde boyutlandırır
          //  marginTop: "5%",
          marginBottom: "5%", // İstenirse yukarıdan boşluk bırakır
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <div></div>
            {description.map((item, index) => (
              <div index={index} style={{ paddingBottom: "15px" }}>
                <h1 style={{ color: "#FE5001" }}>
                  {item.title}
                  <br />
                </h1>
                <Typography>{item.desc}</Typography>
              </div>
            ))}
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ paddingBottom: "110px" }}>
            {teknik ? (
              <img
                src={teknik}
                alt="teknik-görsel"
                style={{ maxWidth: "70%" }}
              />
            ) : (
              <div></div>
            )}
            <Box
              sx={{
                paddingTop: "50px",
              }}
            >
              {technicalData.map((item, index) => (
                <Box key={index}>
                  <Grid container>
                    <Grid size={4} sx={{}}>
                      {" "}
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        {item.label}:
                      </Typography>
                    </Grid>
                    <Grid size={7} sx={{}}>
                      {" "}
                      <Typography sx={{ color: "black", whiteSpace: "nowrap" }}>
                        {item.value}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
