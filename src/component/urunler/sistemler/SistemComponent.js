import React from "react";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SistemComponent({ title, menuItem }) {
  const navigate = useNavigate();

  const handleBoxClick = (path) => {
    navigate(path); // Belirtilen sayfaya yönlendirme yapar
  };

  return (
    <>
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
                cursor: "pointer", // Tıklanabilir işareti göstermek için
                animationDelay: `${index * 0.5}s`,
              }}
              className="grid-item"
              onClick={() => handleBoxClick(item.path)} // `path` özelliğine göre yönlendirme yap
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
    </>
  );
}
