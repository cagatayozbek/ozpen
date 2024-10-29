import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid2 from "@mui/material/Grid2"; // Grid2'nin doğru import edildiğinden emin olun
import Hero from "../hero/Hero";
import hero from "../../assets/ozpen-on.jpeg";
// Referans verileri
const referanslar = [
  {
    id: 1,
    title: "Salihoğulları İnşaat",
    logo: require("./assets/salihogulları.png"), // Logo yolunu kendi projenize göre ayarlayın
  },
  {
    id: 2,
    title: "YDA",
    logo: require("./assets/yda.png"),
  },
  {
    id: 3,
    title: "Özoğuz İnşaat ",
    logo: require("./assets/ozoguz-inş.png"),
  },
  {
    id: 4,
    title: "MK Çetin Yapı ",
    logo: require("./assets/mk_cetin.png"),
  },
  {
    id: 5,
    title: "Gintek İnşaat ",
    logo: require("./assets/gintek.png"),
  },
  {
    id: 6,
    title: "Demka Grup ",
    logo: require("./assets/demka-inş.png"),
  },
  {
    id: 7,
    title: "Bulutbey İnşaat ",
    logo: require("./assets/BulutBey.png"),
  },
  {
    id: 8,
    title: "Başpınar İnşaat ",
    logo: require("./assets/baspınar.png"),
  },
  {
    id: 9,
    title: "Arissa İnşaat ",
    logo: require("./assets/arissa-logo.png"),
  },
  {
    id: 10,
    title: "Akay İnşaat ",
    logo: require("./assets/akay-inş.jpg"),
  },
];

export default function Referanslar() {
  return (
    <>
      <Hero hero={hero} title="Referanslar" />
      <Container sx={{ marginTop: "100px" }}>
        <Grid2 container spacing={6}>
          {referanslar.map((referans) => (
            <Grid2 item size={{ xs: 12, sm: 6, md: 4 }} key={referans.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={referans.logo}
                  alt={`${referans.title} logo`}
                  sx={{
                    objectFit: "contain",
                    flexGrow: 1,
                    width: "40vh",
                    backgroundColor:
                      referans.id === 7 || referans.id === 8
                        ? "#333"
                        : "inherit", // Yalnızca beyaz logoya sahip karta koyu arka plan
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {referans.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </>
  );
}
