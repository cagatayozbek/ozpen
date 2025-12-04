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
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
import {
  CheckCircle,
  Home as HomeIcon,
  WindowOutlined,
  Balcony,
  Phone,
  CurrencyLira,
  WhatsApp,
} from "@mui/icons-material";

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
                position: "relative",
                justifyContent: "flex-start",
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

          {/* PERAKENDE'ye Özel Bölüm - Kış Kampanyası */}
          <Box
            sx={{
              py: 6,
              mb: 8,
              background: "#f5f5f5",
              color: "#1a1a1a",
              borderRadius: "20px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Container maxWidth="lg">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Grid container spacing={4} alignItems="center">
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Chip
                      label="❄️ KIŞ KAMPANYASI 2025 - 2026"
                      sx={{
                        bgcolor: "#e63946",
                        color: "white",
                        fontWeight: 600,
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        fontSize: { xs: "2rem", md: "2.5rem" },
                      }}
                    >
                      Ev ve Daireler İçin
                      <br />
                      <Box component="span" sx={{ color: "#e63946" }}>
                        Özel Kış Kampanyası Fiyatları
                      </Box>
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 3, color: "#555" }}>
                      Kış sezonunda uygun fiyatlarla pencerenizi, kapınızı ve cam
                      balkonunuzu yenileyin!
                    </Typography>
                    <List sx={{ mb: 3 }}>
                      {[
                        "Ücretsiz ölçüm ve keşif",
                        "2 yıl Winsa garantisi",
                        "Taksit imkanları",
                      ].map((item, index) => (
                        <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 35 }}>
                            <CheckCircle sx={{ color: "#e63946" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            sx={{ "& .MuiTypography-root": { fontWeight: 500 } }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", md: "row" }, flexWrap: "wrap" }}>
                      <Button
                        href="https://wa.me/905439035617"
                        target="_blank"
                        variant="contained"
                        size="large"
                        startIcon={<WhatsApp />}
                        fullWidth
                        sx={{
                          bgcolor: "#25D366",
                          color: "#fff",
                          fontWeight: 600,
                          px: 3,
                          py: 1.5,
                          whiteSpace: "nowrap",
                          "&:hover": {
                            bgcolor: "#128C7E",
                          },
                        }}
                      >
                        WhatsApp ile Keşif İste
                      </Button>
                      <Button
                        href="tel:+903123955603"
                        variant="outlined"
                        size="large"
                        fullWidth
                        sx={{
                          borderColor: "#1a1a1a",
                          color: "#1a1a1a",
                          fontWeight: 600,
                          px: 3,
                          py: 1.5,
                          whiteSpace: "nowrap",
                          "&:hover": {
                            borderColor: "#1a1a1a",
                            bgcolor: "rgba(26,26,26,0.05)",
                          },
                        }}
                      >
                        0312 395 56 03
                      </Button>
                      <Button
                        component={Link}
                        to="/perakende"
                        variant="text"
                        size="large"
                        fullWidth
                        sx={{
                          color: "#1a1a1a",
                          fontWeight: 600,
                          textDecoration: "underline",
                          whiteSpace: "nowrap",
                          "&:hover": {
                            bgcolor: "transparent",
                            color: "#ff6b35",
                          },
                        }}
                      >
                        Detaylı Bilgi &rarr;
                      </Button>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: 2,
                      }}
                    >
                      {[
                        {
                          icon: WindowOutlined,
                          title: "PVC Pencere",
                          desc: "Enerji tasarrufu sağlayan yalıtım",
                          link: "/urunler/pencere-ve-kapi-sistemleri",
                        },
                        {
                          icon: HomeIcon,
                          title: "PVC Kapı",
                          desc: "Güvenli ve dayanıklı",
                          link: "/urunler/pencere-ve-kapi-sistemleri",
                        },
                        {
                          icon: Balcony,
                          title: "Cam Balkon",
                          desc: "Balkonunuzu yaşam alanına çevirin",
                          link: "/urunler/cam-balkon-sistemleri",
                        },
                        {
                          icon: CurrencyLira,
                          title: "Uygun Fiyat",
                          desc: "Taksit imkanları",
                          link: "/iletisim",
                        },
                      ].map((item, index) => (
                        <Card
                          key={index}
                          component={motion.div}
                          whileHover={{ scale: 1.05 }}
                          elevation={0}
                          sx={{
                            bgcolor: "#fff",
                            borderRadius: 3,
                            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                            cursor: "pointer",
                            height: "100%",
                            minHeight: "180px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            border: "1px solid rgba(0,0,0,0.05)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                              borderColor: "#ff6b35",
                            },
                          }}
                          onClick={() => (window.location.href = item.link)}
                        >
                          <CardContent
                            sx={{
                              textAlign: "center",
                              p: 3,
                              flex: 1,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <item.icon
                              sx={{ fontSize: 36, color: "#ff6b35", mb: 1.5 }}
                            />
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 700,
                                color: "#263238",
                                mb: 1,
                                fontSize: "1.1rem",
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#666",
                                fontSize: "0.9rem",
                                lineHeight: 1.4,
                              }}
                            >
                              {item.desc}
                            </Typography>
                          </CardContent>
                        </Card>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            </Container>
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
