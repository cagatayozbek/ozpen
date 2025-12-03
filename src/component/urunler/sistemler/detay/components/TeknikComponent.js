import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";

export default function TeknikComponent({
  technicalData,
  logo,
  teknik,
  background,
  description,
  title,
}) {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: 0, padding: 0, lineHeight: 0 }}>
          <img src={logo} alt={title} style={{ maxWidth: "100%", height: "auto" }} />
        </h1>
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
            {description.map((item, index) => (
              <div index={index} style={{ paddingBottom: "15px" }}>
                <h2 style={{ color: "#FE5001", fontSize: "2rem" }}>
                  {item.title}
                  <br />
                </h2>
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
