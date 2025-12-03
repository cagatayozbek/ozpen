import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import SEO from "../../../SEO";
import wImage from "../../../../assets/w.png";
import acilim from "../assets/acilim.jpg";
import acilim2 from "../assets/acilim2.png";
import "../sistemComponent.css";
import ColorPickerPage from "../ColorPickerComponent";

export default function Donanım() {
  return (
    <div>
      <SEO 
        title="Donanım Sistemleri | Winsa Ankara" 
        description="Winsa donanım sistemleri ile pencerelerinizde güvenlik ve konforu artırın. Ankara Özpen PVC." 
      />
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
            zIndex: -1, // Keep the image behind the content
          },
        }}
      >
        <Box sx={{ paddingX: { xs: "15px", md: "30px" } }}>
          <Box sx={{ paddingLeft: { xs: "0px", md: "100px" } }}>
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
          <Box sx={{ paddingTop: { xs: "20px", md: "30px" } }}>
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    color: "#070155",
                    paddingLeft: { xs: "0px", md: "100px" },
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
                size={{ xs: 12, md: 6 }}
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={acilim}
                  alt="acılım"
                  loading="lazy"
                  style={{
                    maxWidth: "50%",
                    height: "auto",
                  }}
                />
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Box>

      {/** -----------------ikinci sayfa------------------------ */}
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh", // Minimum yüksekliği tam ekran
          alignContent: "center",
          backgroundColor: "rgba(0,0,0,0.7)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${wImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.5,
            zIndex: -1,
          },
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: { xs: "15px", md: "130px" },
              paddingRight: { xs: "15px", md: "0px" }, // Mobilde sağa sola padding ekle
            }}
          >
            <div>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "28px", md: "36px" }, // Mobilde yazı boyutunu küçült
                  color: "white",
                  fontWeight: "bold",
                  paddingBottom: "40px",
                }}
              >
                Winsa Vasistas Öncelikli Çift Açılımla Her Açıdan Güvenlik
              </Typography>
            </div>
            <div>
              <Typography
                sx={{ fontSize: { xs: "14px", md: "16px" }, color: "white" }}
              >
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
            size={{ xs: 12, md: 6 }}
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
              style={{ maxWidth: "70%", height: "auto" }}
            />
          </Grid2>
        </Grid2>
      </Box>

      <ColorPickerPage />
    </div>
  );
}
