import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate'i import ediyoruz

// Her bir öğe için Card bileşeni
function CardComponent({ menuItem }) {
  const navigate = useNavigate(); // navigate işlevini tanımlıyoruz

  return (
    <Card
      sx={{
        height: "100%",
        boxShadow: "none", // Kartın gölgesini kaldırıyoruz
        border: "none", // Kartın varsayılan kenarlığını kaldırıyoruz
      }}
    >
      <CardActionArea
        sx={{
          height: "100%",
          boxShadow: "none",
          border: "none",
        }}
        onClick={() => navigate(menuItem.path)} // Kart tıklamasında yönlendirme yapılıyor
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
            padding: 0,
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              paddingTop: "10px",
              margin: 0,
              color: "#070155",
            }}
          >
            {menuItem.name}
          </Typography>
          <Divider
            sx={{
              margin: "10px 0",
              color: "#FE5001",
            }}
          />
          <Typography>{menuItem.desc}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// Ana bileşen, listeyi map ile döner
export default function CamBalkonCardComponent({ menuItem, title }) {
  return (
    <>
      <Box sx={{ marginTop: "50px", display: "flex" }}>
        <Typography
          variant="h3"
          sx={{ color: "#070155", marginTop: "50px", marginBottom: "20px" }}
        >
          {title}
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: "30px" }}>
        <Grid2 container spacing={2}>
          {menuItem.map((item, index) => (
            <Grid2 key={index} size={{ xs: 6, sm: 3 }} sx={{ height: "30vh" }}>
              <CardComponent menuItem={item} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  );
}
