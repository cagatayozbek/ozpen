import React from "react";
import { Box, Grid2 as Grid, Tooltip, Typography } from "@mui/material";
import YouTube from "react-youtube";
export default function TeknikCamBalkonComponent({
  title,
  background,
  technicalData,
  teknik,
  video,
  kartela,
}) {
  const onReady = (event) => {
    // Oyun başlatıldığında durdurma işlemi
    event.target.pauseVideo();
  };
  return (
    <>
      <Typography variant="h3" component="h1" sx={{ marginTop: "5%", color: "#070155", fontWeight: "bold" }}>
        {title}
      </Typography>
      <img
        src={background}
        alt="Sürdürülebilir Bir Gelecek Arka Planı" // Daha açıklayıcı alt metin
        style={{
          maxWidth: "100%", // Genişliği konteynıra sığacak şekilde sınırlar
          //  height: "60vh", // Orantılı şekilde boyutlandırır

          marginTop: "50px",
          marginBottom: "50px", // İstenirse yukarıdan boşluk bırakır
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="h3"
              sx={{ color: "#070155", marginBottom: "40px" }}
            >
              Teknik <br /> Bilgiler
            </Typography>
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
                    <Typography
                      sx={{
                        color: "black",
                        overflowWrap: "break-word", // Uzun kelimeleri kırmak için
                        wordBreak: "break-word", // Kelime sınırlarını taşmamak için
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={8} sx={{ marginTop: "50px" }}>
                <Grid size={4}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Renkler:
                  </Typography>
                </Grid>
                <Grid size={8}>
                  {kartela.map((color, index) => (
                    <Tooltip title={color.name}>
                      <Box
                        key={index}
                        component="img"
                        src={color.src}
                        alt={`${color.name} Rengi`}
                        sx={{
                          flexDirection: "row",
                          width: { xs: "30px", sm: "35px", md: "40px" },
                          height: { xs: "30px", sm: "35px", md: "40px" },
                          marginRight: "10px",
                        }}
                      />
                    </Tooltip>
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {teknik ? (
              <img
                src={teknik}
                alt="teknik-görsel"
                style={{ maxWidth: "100%" }}
              />
            ) : (
              <></>
            )}
            {video ? (
              <YouTube
                videoId={video}
                opts={{
                  height: "300",
                  width: "450",
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 1,
                  },
                }}
              />
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
