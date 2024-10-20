import { Box, Button, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/uretim.jpg";
import montaj from "../../assets/montaj.jpg";

import "./Grids.css";
import { RiHome2Line } from "react-icons/ri";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { PiWindowsLogoThin } from "react-icons/pi";
import { GiGreekTemple } from "react-icons/gi";
import PhotoList from "./PhotoList";

export default function Grids() {
  return (
    <div className="container">
      <Box sx={{ flexGrow: 1, padding: "5%" }}>
        <Grid
          container
          sx={{
            backgroundColor: "#262626",
            "--Grid-borderWidth": "2px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "#9A8178",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderBottom: "var(--Grid-borderWidth) solid",
              borderColor: "#9A8178",
              borderWidth: "2px",
            },
          }}
        >
          <Grid size={6}>
            <img src={logo} alt="uretim" className="img-uretim" />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignContent: "center",
              //justifyContent: "center",
            }}
            size={6}
          >
            <div className="urun-container">
              <h1 className="urun-header">Ürünlerimiz</h1>
              <ul className="urun-list">
                <li>Pencere ve Kapı Sistemleri</li>
                <li>Sürme Sistemleri</li>
                <li>Panjur ve Kepenk Sistemleri</li>
                <li>Donanım Sistemleri</li>
                <li>Cam Balkon Sistemleri</li>
              </ul>
              <br />

              <Button
                sx={{
                  padding: "10px 60px",
                  fontFamily: "raleway,sans-serif",
                  color: "black",
                  backgroundColor: "#9A8178",
                }}
              >
                BİLGİ
              </Button>
            </div>
          </Grid>
          <Grid
            size={3}
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <div className="icon-container">
              {" "}
              <RiHome2Line size={80} color="#9A8178" />
              <div className="icon-text">
                Engin
                <br />
                Deneyim
              </div>
            </div>
          </Grid>
          <Grid
            size={3}
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <div className="icon-container">
              {" "}
              <IoExtensionPuzzleOutline size={80} color="#9A8178" />
              <div className="icon-text">
                Profesyonel
                <br />
                Ekip
              </div>
            </div>
          </Grid>
          <Grid
            size={3}
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <div className="icon-container">
              {" "}
              <PiWindowsLogoThin size={80} color="#9A8178" />
              <div className="icon-text">
                Kusursuz
                <br />
                Teslim
              </div>
            </div>
          </Grid>
          <Grid
            size={3}
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <div className="icon-container">
              {" "}
              <GiGreekTemple size={80} color="#9A8178" />
              <div className="icon-text">
                Sürdürülebilir
                <br />
                ve Sorumlu
              </div>
            </div>
          </Grid>
          <Grid size={6}>
            <div className="urun-container">
              <h1 className="urun-header">Hakkımızda</h1>

              <span className="urun-subheader">Başkent Özpen</span>
              <br />
              <span className="urun-subheader">PVC</span>
              <Typography
                sx={{
                  marginTop: "50px",
                  color: "white",

                  marginRight: "15%",
                }}
              >
                Başkent Özpen Pvc ve Isıcam Sanayi Ltd.Şti. kuruluşundan
                itibaren kusursuz müşteri memnuniyeti, profesyonel ekip desteği
                ve güvenilir satış sonrası hizmet anlayışı ile sektörde ön plana
                çıkmıştır. Üstün başarı anlayışı ve her geçen gün genişleyen
                bayi ağı sayesinde Başkent Özpen Pvc ve Isıcam Sanayi Ltd. Şti.
                50 çalışanı ile geleceğe daha güvenle bakmaktadır.
              </Typography>
            </div>
          </Grid>
          <Grid size={6}>
            <img src={montaj} alt="uretim" className="img-uretim" />
          </Grid>
        </Grid>
        <PhotoList />
      </Box>
    </div>
  );
}
