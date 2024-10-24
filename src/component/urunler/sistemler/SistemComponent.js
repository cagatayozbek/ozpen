import React from "react";
import { Box, Grid2 as Grid, Typography, Container } from "@mui/material";

import wImage from "../../../assets/w.png";
import Form from "./Form";

export default function SistemComponent({ title, menuItem }) {
  return (
    <div>
      <Box sx={{ marginTop: "7%", display: "flex" }}>
        <Typography
          variant="h3"
          sx={{ color: "#070155", marginTop: "50px", marginBottom: "20px" }}
        >
          {title[0]} {title[1]}
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
        <Grid container spacing={5}>
          {menuItem.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 6, sm: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                animationDelay: `${index * 0.5}s`, // Sırayla animasyon için gecikme
              }}
              className="grid-item"
            >
              {item.imgSource ? (
                <img
                  src={item.imgSource}
                  alt={item.title}
                  style={{
                    height: "auto",
                    width: "70%",
                  }}
                  loading="lazy"
                />
              ) : (
                <></>
              )}

              {item.name ? (
                <Typography variant="h5" sx={{}}>
                  {item.name}
                </Typography>
              ) : (
                <></>
              )}

              {item.imgDesSource ? (
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
              ) : (
                <>
                  {" "}
                  <br />
                </>
              )}

              <Typography sx={{ marginTop: "20px", fontWeight: "bold" }}>
                {item.imgDesc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Ücretsiz Keşif Formu Tam Ekran */}
    </div>
  );
}
