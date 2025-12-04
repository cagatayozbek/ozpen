import React, { useState, useEffect } from "react";
import Hero from "../hero/Hero";
import hero from "../../assets/ozpen-on.jpeg";
import { motion } from "framer-motion";
import {
  Container,
  Typography,
  Box,
  Grid2 as Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import SEO from "../SEO";

// Eski (Sabit) Referans verileri
const sabitReferanslar = [
  {
    id: "static-1",
    title: "Salihoğulları İnşaat",
    logo: require("./assets/salihogulları.png"),
  },
  {
    id: "static-2",
    title: "YDA",
    logo: require("./assets/yda.png"),
  },
  {
    id: "static-3",
    title: "Özoğuz İnşaat",
    logo: require("./assets/ozoguz-ins.png"),
  },
  {
    id: "static-4",
    title: "MK Çetin Yapı",
    logo: require("./assets/mk_cetin.png"),
  },
  {
    id: "static-5",
    title: "Gintek İnşaat",
    logo: require("./assets/gintek.png"),
  },
  {
    id: "static-6",
    title: "Demka Grup",
    logo: require("./assets/demka-ins.png"),
  },
  {
    id: "static-7",
    title: "Bulutbey İnşaat",
    logo: require("./assets/BulutBey.png"),
  },
  {
    id: "static-8",
    title: "Başpınar İnşaat",
    logo: require("./assets/baspınar.png"),
  },
  {
    id: "static-9",
    title: "Arissa İnşaat",
    logo: require("./assets/arissa-logo.png"),
  },
  {
    id: "static-10",
    title: "Akay İnşaat",
    logo: require("./assets/akay-ins.jpg"),
  },
  {
    id: "static-11",
    title: "Astim İnşaat",
    logo: require("./assets/astim.png"),
  },
  {
    id: "static-12",
    title: "Baytim Mimarlık",
    logo: require("./assets/baytim-mimarlik.png"),
  },
];

export default function Referanslar() {
  const [referanslar, setReferanslar] = useState(sabitReferanslar);

  useEffect(() => {
    // API'den yeni referansları çek
    fetch("https://ozpenpvc.com.tr/php-backend/api/references.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          // API verilerini formatla
          const yeniReferanslar = data.data.map((item) => ({
            id: item.id,
            title: item.title,
            logo: item.image, // API'deki image alanını logo olarak kullan
            description: item.description,
            location: item.location,
            year: item.YEAR,
          }));

          // Sabit ve yeni referansları birleştir (Yeniler üstte olsun istersen sırayı değiştir)
          setReferanslar([...yeniReferanslar, ...sabitReferanslar]);
        }
      })
      .catch((err) => console.error("Referans yükleme hatası:", err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Referanslarımız"
        description="Özpen PVC referansları. Salihoğulları İnşaat, YDA, Özoğuz İnşaat, MK Çetin Yapı, Gintek ve daha fazlası ile çalıştık."
        keywords="özpen referanslar, ankara pvc referanslar, winsa projeleri, özpen projeler"
      />
      <Hero hero={hero} title="Referanslar" isBright={true} />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            component={motion.h1}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variant="h3"
            sx={{
              fontWeight: 600,
              color: "#1a1a1a",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Referanslarımız
          </Typography>
          <Typography
            component={motion.p}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variant="subtitle1"
            sx={{
              color: "#666",
              maxWidth: "600px",
              mx: "auto",
              fontSize: "1.1rem",
            }}
          >
            Güvenilir iş ortaklarımız ve başarıyla tamamladığımız projelerimiz
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {referanslar.map((referans) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={referans.id}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                      },
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: "1px solid #eee",
                    }}
                  >
                    <Box
                      sx={{
                        p: 4,
                        backgroundColor:
                          referans.id === "static-7" || referans.id === "static-8"
                            ? "#333"
                            : "#f8f9fa",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "180px",
                        position: "relative",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={referans.logo || "https://via.placeholder.com/300x200?text=Resim+Yok"}
                        alt={`${referans.title} logo`}
                        sx={{
                          objectFit: "contain",
                          width: "auto",
                          maxWidth: "100%",
                          maxHeight: "140px",
                        }}
                      />
                      {/* Eğer yeni eklenen bir referans ise ve yıl bilgisi varsa göster */}
                      {referans.year && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            background: "rgba(0,0,0,0.6)",
                            color: "white",
                            padding: "2px 8px",
                            borderRadius: "4px",
                            fontSize: "0.8rem",
                          }}
                        >
                          {referans.year}
                        </Box>
                      )}
                    </Box>
                    <CardContent
                      sx={{
                        textAlign: "center",
                        p: 2.5,
                        "&:last-child": { pb: 2.5 },
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "#1a1a1a",
                          fontSize: "1.1rem",
                          mb: referans.location ? 1 : 0,
                        }}
                      >
                        {referans.title}
                      </Typography>
                      
                      {referans.location && (
                        <Typography variant="body2" color="text.secondary">
                          📍 {referans.location}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </motion.div>
  );
}
