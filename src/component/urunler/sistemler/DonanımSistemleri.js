import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import wImage from "../../../assets/w.png";
import acilim from "./assets/acilim.jpg";
import acilim2 from "./assets/acilim2.png";
import { colors, description } from "./colorArrays";

import "./sistemComponent.css";
import ColorPickerPage from "./ColorPickerComponent";
import Form from "./Form";
export default function DonanımSistemleri() {
  return (
    <div>
      {/** -----------------ilk sayfa------------------------ */}
      <Box
        sx={{
          position: "relative",
          height: "100vh", // Yüksekliği tam ekran
          alignContent: "center",
          backgroundColor: "rgba(0,0,0,0.1)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${wImage})`, // Background image
            backgroundSize: "cover", // Cover the whole area
            backgroundRepeat: "no-repeat", // No repeat
            backgroundPosition: "center", // Center the image
            opacity: 0.5, // Adjust the opacity of the background image
            // Keep the image behind the content
            zIndex: -1,
          },
        }}
      >
        <Box sx={{ paddingX: "30px" }}>
          <Box sx={{ paddingLeft: "100px" }}>
            {" "}
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
                Winsa Donanım Sistemleri
              </span>
            </h1>
          </Box>
          <Box sx={{ paddingTop: "30px" }}>
            <Grid2 container spacing={2}>
              <Grid2 size={6} sx={{}}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#070155",
                    paddingLeft: "100px",
                  }}
                >
                  Winsa Donanım sistemleri yüksek kalite ve işlevselliği
                  birarada bulunduran,birbirleriyle uyumlu ve kolay kullanımlı
                  ürünlerdir.Yapılan testler farklı iklim koşullarına
                  dayanıklılığı,sağlamlığı güvenliği kanıtlanmış olup ulusal ve
                  uluslararası standartlara uygunluk belgelerine sahiptir.Tüm
                  ispanyoletler ve kilit karşılıkları Winsa logoludur.
                </Typography>
              </Grid2>
              <Grid2
                size={6}
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <img src={acilim} alt="acılım" loading="lazy" />
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Box>
      {/** -----------------ikinci sayfa------------------------ */}
      <Box
        sx={{
          position: "relative",
          height: "100vh", // Yüksekliği tam ekran
          alignContent: "center",
          backgroundColor: "rgba(0,0,0,0.7)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${wImage})`, // Background image
            backgroundSize: "cover", // Cover the whole area
            backgroundRepeat: "no-repeat", // No repeat
            backgroundPosition: "center", // Center the image
            opacity: 0.5, // Adjust the opacity of the background image
            // Keep the image behind the content
            zIndex: -1,
          },
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2
            size={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "130px",
            }}
          >
            <div>
              <Typography
                variant="h2"
                sx={{
                  //  fontSize: "70px",
                  color: "white",
                  fontWeight: "bold",
                  paddingBottom: "60px",
                }}
              >
                Winsa Vasistas Öncelikli Çift Açılımla Her Açıdan Güvenlik
              </Typography>
            </div>
            <div>
              <Typography sx={{ fontSize: "16px", color: "white" }}>
                Kol pozisyonun ilk hareketi ile vasistas açılım, ikinci hareketi
                ile düz açılım yaptıgı sistemdir. Özellikle yüksek yapılarda
                çocukların güvenligini saglamak amacıyla oldukça kullanıslıdır.
                Mentese kapak renk seçenekleriyle beyaz ve lamine profillerle
                uyumludur. Winsa markalı çift açılım ve güvenlikli çift
                açılımlarla da kolaylıkla kullanılır.
              </Typography>
            </div>
          </Grid2>
          <Grid2
            size={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={acilim2}
              alt="acilim2"
              loading="lazy"
              style={{ height: "80%" }}
            />
          </Grid2>
        </Grid2>
      </Box>
      <ColorPickerPage colors={colors} description={description} />
      <Form />
    </div>
  );
}
