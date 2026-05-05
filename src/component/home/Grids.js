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

import "./Grids.css";
import { RiHome2Line } from "react-icons/ri";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { PiWindowsLogoThin } from "react-icons/pi";
import { GiGreekTemple } from "react-icons/gi";
import {
  CheckCircle,
  Home as HomeIcon,
  WindowOutlined,
  Balcony,
  CurrencyLira,
  WhatsApp,
} from "@mui/icons-material";

// Ürün vitrini için yüksek çözünürlüklü görseller
import pencereKapi from "../urunler/sistemler/detay/assets/dorado-bg.jpg";
import surmeSistemleri from "../urunler/sistemler/detay/assets/comfort-plus-bg.jpg";
import pvcPanjur from "../urunler/sistemler/detay/assets/winkepenk-bg.jpg";
import camBalkon from "../urunler/sistemler/detay/assets/camekan-bg.jpg";
import donanimSistemleri from "../urunler/sistemler/assets/acilim2.png";

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

  return (
    <Box sx={{ backgroundColor: "#ffffff", py: { xs: 7, md: 10 } }} ref={ref}>
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Ürün Kartları */}
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start", md: "flex-end" },
              justifyContent: "space-between",
              gap: 3,
              mb: { xs: 4, md: 5 },
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box sx={{ maxWidth: 680 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "#d71920",
                  fontWeight: 800,
                  letterSpacing: 0.8,
                }}
              >
                Özpen ürün ailesi
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  color: "#20242c",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  mt: 1,
                  mb: 2,
                  fontSize: { xs: "2rem", md: "2.75rem" },
                }}
              >
                Yaşam alanınız için doğru sistemi seçin
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#5f6673",
                  fontSize: { xs: "1rem", md: "1.08rem" },
                  lineHeight: 1.75,
                }}
              >
                Pencere, kapı, sürme, panjur ve cam balkon çözümlerini aynı
                kalite standardıyla keşif, üretim ve montaj sürecine bağlıyoruz.
              </Typography>
            </Box>
            <Button
              component={Link}
              to="/urunler"
              variant="outlined"
              sx={{
                borderColor: "#20242c",
                borderRadius: "999px",
                color: "#20242c",
                fontWeight: 800,
                px: 3,
                py: 1.25,
                textTransform: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  borderColor: "#d71920",
                  bgcolor: "#fff1f2",
                  color: "#d71920",
                },
              }}
            >
              Tüm Ürünler
            </Button>
          </Box>

          <Box
            sx={{
              width: "100%",
              position: "relative",
              mb: 8,
            }}
          >
            <Grid container spacing={{ xs: 2.5, md: 3 }}>
              {cardsData.map((card) => (
                <Grid
                  key={card.id}
                  size={{ xs: 12, sm: 6, md: card.wide ? 6 : 4 }}
                >
                  <motion.div variants={itemVariants}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#ffffff",
                        border: "1px solid rgba(24,31,42,0.08)",
                        borderRadius: 2,
                        boxShadow: "0 16px 38px rgba(20,27,38,0.07)",
                        overflow: "hidden",
                        transition:
                          "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                        "&:hover": {
                          transform: "translateY(-6px)",
                          borderColor: "rgba(215,25,32,0.28)",
                          boxShadow: "0 22px 48px rgba(20,27,38,0.12)",
                        },
                      }}
                    >
                      <CardActionArea
                        component={Link}
                        to={card.link}
                        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            aspectRatio: card.wide ? "16 / 8.8" : "16 / 10.5",
                            bgcolor: "#f5f6f8",
                            overflow: "hidden",
                          }}
                        >
                          <CardMedia
                            component="img"
                            image={card.img}
                            alt={card.title}
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: card.imageFit || "cover",
                              objectPosition: card.imagePosition || "center",
                              p: card.imagePadding || 0,
                              transition: "transform 0.35s ease",
                              ".MuiCard-root:hover &": {
                                transform: "scale(1.04)",
                              },
                            }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              inset: 0,
                              background:
                                "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.48) 100%)",
                            }}
                          />
                          <Chip
                            label={card.eyebrow}
                            size="small"
                            sx={{
                              position: "absolute",
                              left: 16,
                              bottom: 14,
                              bgcolor: "rgba(255,255,255,0.92)",
                              color: "#20242c",
                              fontWeight: 800,
                              height: 28,
                            }}
                          />
                        </Box>
                        <CardContent
                          sx={{
                            p: { xs: 2.5, md: card.wide ? 3 : 2.5 },
                            flexGrow: 1,
                            width: "100%",
                          }}
                        >
                          <Typography
                            variant={card.wide ? "h5" : "h6"}
                            sx={{
                              fontWeight: 800,
                              mb: 1,
                              color: "#20242c",
                              lineHeight: 1.2,
                            }}
                          >
                            {card.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#5f6673",
                              fontSize: card.wide ? "1rem" : "0.92rem",
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
                          <Typography
                            component="span"
                            sx={{
                              color: "#d71920",
                              display: "inline-flex",
                              fontSize: "0.9rem",
                              fontWeight: 800,
                              mt: 2,
                            }}
                          >
                            İncele &rarr;
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* PERAKENDE'ye Özel Bölüm */}
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
                      label="EV VE DAİRELER İÇİN ÜCRETSİZ KEŞİF"
                      sx={{
                        bgcolor: "#d71920",
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
                      <Box component="span" sx={{ color: "#d71920" }}>
                        Özel Teklif
                      </Box>
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 3, color: "#555" }}>
                      Pencerenizi, kapınızı ve cam balkonunuzu yenilemek için
                      ücretsiz keşif ve net teklif alın.
                    </Typography>
                    <List sx={{ mb: 3 }}>
                      {[
                        "Ücretsiz ölçüm ve keşif",
                        "2 yıl Winsa garantisi",
                        "Taksit imkanları",
                      ].map((item, index) => (
                        <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 35 }}>
                            <CheckCircle sx={{ color: "#d71920" }} />
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
                        rel="noopener noreferrer"
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
                            color: "#d71920",
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
                              borderColor: "#d71920",
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
                              sx={{ fontSize: 36, color: "#d71920", mb: 1.5 }}
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
                  <Grid key={index} size={{ xs: 12, md: 3, sm: 6 }}>
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
    eyebrow: "Isı ve ses yalıtımı",
  },
  {
    id: 2,
    title: "Sürme Sistemleri",
    text: "Maksimum konfor için tasarlanmış sürme kapı sistemleri",
    img: surmeSistemleri,
    link: "/urunler/surme-sistemleri",
    eyebrow: "Geniş açıklıklar",
  },
  {
    id: 3,
    title: "Panjur ve Kepenk Sistemleri",
    text: "Güvenlik ve ısı yalıtımı için özel tasarlanmış sistemler",
    img: pvcPanjur,
    link: "/urunler/panjur-ve-kepenk-sistemleri",
    eyebrow: "Güvenlik ve konfor",
  },
  {
    id: 4,
    title: "Donanım Sistemleri",
    text: "Yüksek kaliteli ve dayanıklı donanım çözümleri",
    img: donanimSistemleri,
    link: "/urunler/donanim-sistemleri",
    eyebrow: "Tamamlayıcı çözümler",
    imageFit: "contain",
    imagePadding: 3,
    wide: true,
  },
  {
    id: 5,
    title: "Cam Balkon Sistemleri",
    text: "Yaşam alanlarınızı genişleten modern cam balkon sistemleri",
    img: camBalkon,
    link: "/urunler/cam-balkon-sistemleri",
    eyebrow: "Dört mevsim kullanım",
    wide: true,
  },
];
