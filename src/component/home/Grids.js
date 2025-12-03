import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  IconButton,
} from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./Grids.css";
import { RiHome2Line } from "react-icons/ri";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { PiWindowsLogoThin } from "react-icons/pi";
import { GiGreekTemple } from "react-icons/gi";
import { AiOutlineFieldTime } from "react-icons/ai";

// Resim importları
import pencereKapi from "./assets/pencerevekapisistemleri.jpg";
import pvcKapi from "./assets/pvc-kapi.jpg";
import pvcPanjur from "./assets/pvc-panjur.jpg";
import camBalkon from "./assets/cambalkon.jpg";

export default function Grids({ deneyimYili }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  // Kaydırma işlemi için ref
  const scrollContainerRef = React.useRef(null);

  // Kaydırma fonksiyonları
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -320 : 320;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ backgroundColor: "#ffffff", py: 8 }} ref={ref}>
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Ürün Kartları */}
          <Typography
            variant="h3"
            component="h2"
            sx={{ textAlign: "center", mb: 6, color: "#333" }}
          >
            Ürünlerimiz
          </Typography>
          <Box
            sx={{
              width: "100%",
              position: "relative",
              mb: 8,
            }}
          >
            {/* Kaydırma Butonları */}
            <IconButton
              onClick={() => scroll("left")}
              sx={{
                position: "absolute",
                left: { xs: 0, md: -20 },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 3,
                backgroundColor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
                display: { xs: "none", md: "flex" },
              }}
            >
              <IoIosArrowBack size={24} />
            </IconButton>
            <IconButton
              onClick={() => scroll("right")}
              sx={{
                position: "absolute",
                right: { xs: 0, md: -20 },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 3,
                backgroundColor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
                display: { xs: "none", md: "flex" },
              }}
            >
              <IoIosArrowForward size={24} />
            </IconButton>

            {/* Gradient Overlay'ler */}
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "50px",
                background:
                  "linear-gradient(to right, #ffffff 0%, transparent 100%)",
                zIndex: 2,
                pointerEvents: "none",
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: "50px",
                background:
                  "linear-gradient(to left, #ffffff 0%, transparent 100%)",
                zIndex: 2,
                pointerEvents: "none",
                display: { xs: "none", md: "block" },
              }}
            />

            {/* Kaydırmalı Container */}
            <Box
              ref={scrollContainerRef}
              sx={{
                display: "flex",
                overflowX: "auto",
                gap: "24px",
                px: { xs: "12px", md: "24px" },
                scrollSnapType: "x mandatory",
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
                "-ms-overflow-style": "none",
                position: "relative",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {cardsData.map((card) => (
                <Box
                  key={card.id}
                  sx={{
                    flex: "0 0 auto",
                    width: { xs: "280px", sm: "320px" },
                    scrollSnapAlign: "center",
                  }}
                >
                  <motion.div variants={itemVariants}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#ffffff",
                        border: "1px solid #eaeaea",
                        borderRadius: "8px",
                        overflow: "hidden",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      <CardActionArea component={Link} to={card.link}>
                        <Box sx={{ position: "relative", pt: "75%" }}>
                          <CardMedia
                            component="img"
                            image={card.img}
                            alt={card.title}
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Box>
                        <CardContent sx={{ p: 2.5 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "1.1rem",
                              fontWeight: 500,
                              mb: 1,
                              color: "#333",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitLineClamp: 1,
                              WebkitBoxOrient: "vertical",
                              lineHeight: 1.2,
                            }}
                          >
                            {card.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#666",
                              fontSize: "0.9rem",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              lineHeight: 1.5,
                            }}
                          >
                            {card.text}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Özellikler */}
          <Box sx={{ py: 6, mb: 8 }}>
            <Container maxWidth="lg">
              <Grid container spacing={3} justifyContent="center">
                {[
                  {
                    icon: RiHome2Line,
                    title: "Engin Deneyim",
                    description: "24 yıllık sektör tecrübemizle yanınızdayız",
                  },
                  {
                    icon: IoExtensionPuzzleOutline,
                    title: "Profesyonel Ekip",
                    description: "Uzman kadromuzla kaliteli hizmet sunuyoruz",
                  },
                  {
                    icon: PiWindowsLogoThin,
                    title: "Kusursuz Teslim",
                    description:
                      "Projelerinizi zamanında ve eksiksiz teslim ediyoruz",
                  },
                  {
                    icon: GiGreekTemple,
                    title: "Sürdürülebilir ve Sorumlu",
                    description: "Çevre dostu üretim ve montaj süreçleri",
                  },
                ].map((item, index) => (
                  <Grid key={index} item size={{ xs: 12, md: 3, sm: 6 }}>
                    <motion.div variants={itemVariants}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textAlign: "center",
                          p: 3,
                          backgroundColor: "#fff",
                          borderRadius: "12px",
                          height: "100%",
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-5px)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 90,
                            height: 90,
                            borderRadius: "20px",
                            backgroundColor: "#f8f8f8",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 2.5,
                            transform: "rotate(45deg)",
                            "& > svg": {
                              transform: "rotate(-45deg)",
                              fontSize: "2rem",
                            },
                          }}
                        >
                          <item.icon size={45} style={{ color: "#333" }} />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "600",
                            mb: 1.5,
                            fontSize: { xs: "1.1rem", sm: "1.25rem" },
                            color: "#333",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#666",
                            lineHeight: 1.6,
                            fontSize: "0.95rem",
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>

          {/* Hakkımızda */}
          <Box
            sx={{
              p: 4,
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{ color: "#333", mb: 3 }}
            >
              Hakkımızda
            </Typography>
            <Typography variant="h4" sx={{ color: "#666", mb: 2 }}>
              Başkent Özpen PVC
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#666", mb: 4, lineHeight: 1.8 }}
            >
              Başkent Özpen Pvc ve Isıcam Sanayi Ltd.Şti. kuruluşundan itibaren
              kusursuz müşteri memnuniyeti, profesyonel ekip desteği ve
              güvenilir satış sonrası hizmet anlayışı ile sektörde ön plana
              çıkmıştır. Üstün başarı anlayışı ve her geçen gün genişleyen bayi
              ağı sayesinde Başkent Özpen Pvc ve Isıcam Sanayi Ltd. Şti. 100
              çalışanı ile geleceğe daha güvenle bakmaktadır.
            </Typography>
            <Button
              variant="outlined"
              component={Link}
              to="/kurumsal"
              sx={{
                borderColor: "#333",
                color: "#333",
                px: 4,
                py: 1.5,
                "&:hover": {
                  borderColor: "#000",
                  backgroundColor: "rgba(0,0,0,0.05)",
                },
              }}
            >
              Daha Fazla Bilgi
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

const cardsData = [
  {
    id: 1,
    title: "Pencere ve Kapı Sistemleri",
    text: "Modern yaşam alanları için yenilikçi pencere ve kapı çözümleri",
    img: pencereKapi,
    link: "/urunler/pencere-ve-kapi-sistemleri",
  },
  {
    id: 2,
    title: "Sürme Sistemleri",
    text: "Maksimum konfor için tasarlanmış sürme kapı sistemleri",
    img: pvcKapi,
    link: "/urunler/surme-sistemleri",
  },
  {
    id: 3,
    title: "Panjur ve Kepenk Sistemleri",
    text: "Güvenlik ve ısı yalıtımı için özel tasarlanmış sistemler",
    img: pvcPanjur,
    link: "/urunler/panjur-ve-kepenk-sistemleri",
  },
  {
    id: 4,
    title: "Donanım Sistemleri",
    text: "Yüksek kaliteli ve dayanıklı donanım çözümleri",
    img: pvcKapi,
    link: "/urunler/donanım-sistemleri",
  },
  {
    id: 5,
    title: "Cam Balkon Sistemleri",
    text: "Yaşam alanlarınızı genişleten modern cam balkon sistemleri",
    img: camBalkon,
    link: "/urunler/cam-balkon-sistemleri",
  },
];
