import React from "react";
import bg from "../../assets/ozpen-on.jpeg";
import introVideo from "./assets/intro.mp4";
import "./Home.css";
import Grids from "./Grids";
import {
  Typography,
  Box,
  Container,
  Button,
  Grid2 as Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { BsBuilding } from "react-icons/bs";
import { FaUsers, FaRegSmileBeam } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Link } from "react-router-dom";
import SEO from "../SEO";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const kurulusYili = 2000;
  const deneyimYili = new Date().getFullYear() - kurulusYili;

  return (
    <>
      <SEO
        title="PVC Pencere, Kapı ve Cam Balkon | Ankara Winsa Bayi"
        description="Ankara'da ev ve daireler için PVC pencere, kapı ve cam balkon sistemleri. Ücretsiz keşif, hızlı montaj, 2 yıl garanti. Kış kampanyası fiyatları! ☎️ 0312 395 56 03"
        keywords="ankara pvc pencere, ankara pimapen, ankara cam balkon, pvc fiyatları, cam balkon fiyatları, ev penceresi, daire penceresi, cam balkon ankara, winsa pencere fiyat, uygun pvc pencere"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box className="simple-hero">
              <div className="hero-background">
                <img
                  src={bg}
                  alt="Özpen PVC Showroom - Ankara Winsa Bayisi"
                  className="home-hero-image"
                />
              </div>
          <Container
            maxWidth="lg"
            sx={{ position: "relative", height: "100%" }}
          >
            <Box className="hero-content">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h1" className="main-title">
                  Başkent Özpen PVC
                </Typography>
                <Typography variant="h2" className="sub-title">
                  Kalite ve güvenin adresi
                </Typography>
                <Box className="hero-actions">
                  <Button
                    variant="contained"
                    component={Link}
                    to="/urunler"
                    className="main-button"
                    sx={{
                      backgroundColor: "#fff",
                      color: "#000",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.9)",
                      },
                    }}
                  >
                    Ürünlerimiz
                  </Button>
                  <Button
                    variant="outlined"
                    component="a"
                    href="#tanitim-filmi"
                    className="main-button"
                    sx={{
                      borderColor: "#fff",
                      color: "#fff",
                      "&:hover": {
                        borderColor: "#fff",
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    Tanıtım Videosu
                  </Button>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/iletisim"
                    className="main-button"
                    sx={{
                      borderColor: "#fff",
                      color: "#fff",
                      "&:hover": {
                        borderColor: "#fff",
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    İletişime Geç
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </Container>
        </Box>

        <Box id="tanitim-filmi" className="brand-film-section">
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <Typography className="brand-film-kicker">
                  Başkent Özpen PVC
                </Typography>
                <Typography variant="h3" className="brand-film-title">
                  Kaliteyi Atölyeden Montaja Kadar Görün
                </Typography>
                <Typography className="brand-film-copy">
                  Üretim, showroom ve montaj süreçlerimizi tek bir filmde
                  izleyin. Yeni tanıtım filmi hazır olduğunda bu bölümden
                  yayınlanacak.
                </Typography>
                <Button
                  variant="contained"
                  component={Link}
                  to="/iletisim"
                  className="brand-film-button"
                >
                  Keşif İçin İletişime Geç
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Box className="brand-film-frame">
                  <video
                    className="brand-film-video"
                    controls
                    preload="metadata"
                    poster={bg}
                  >
                    <source src={introVideo} type="video/mp4" />
                    Tarayıcınız video oynatmayı desteklemiyor.
                  </video>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Grids deneyimYili={deneyimYili} />



        {/* İstatistikler Bölümü */}
        <Box sx={{ py: 6, backgroundColor: "#f5f5f5" }} ref={statsRef}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Grid
                container
                spacing={3}
                justifyContent="center"
                sx={{ marginTop: "100px" }}
              >
                {[
                  {
                    number: deneyimYili,
                    label: "Yıllık Deneyim",
                    icon: AiOutlineFieldTime,
                  },
                  {
                    number: 3000,
                    label: "Tamamlanan Proje",
                    suffix: "+",
                    icon: BsBuilding,
                  },
                  { number: 100, label: "Çalışan", suffix: "+", icon: FaUsers },
                  {
                    number: 95,
                    label: "Müşteri Memnuniyeti",
                    suffix: "%",
                    icon: FaRegSmileBeam,
                  },
                ].map((stat, index) => (
                  <Grid size={{ xs: 6, md: 3 }} key={index}>
                    <Box sx={{ textAlign: "center", p: 2 }}>
                      <stat.icon
                        size={40}
                        style={{ marginBottom: "1rem", color: "#333" }}
                      />
                      <Typography
                        variant="h3"
                        component="div"
                        sx={{
                          fontWeight: "bold",
                          mb: 1,
                          fontSize: { xs: "2rem", md: "2.5rem" },
                        }}
                      >
                        {statsInView && (
                          <CountUp end={stat.number} duration={2.5} />
                        )}
                        {stat.suffix}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        <Container maxWidth="lg" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ py: 8, textAlign: "center" }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Bize Ulaşın
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 4, color: "#666" }}>
                Ankara'nın merkezinde, sizlere hizmet vermekten mutluluk
                duyuyoruz
              </Typography>
              <Box
                sx={{ position: "relative", width: "100%", height: "500px" }}
              >
                <iframe
                  title="Başkent Özpen"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33252.626023460936!2d32.74253822149987!3d39.977539853831935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34988ac52cd5d%3A0x948ebc434c04eca2!2zQkHFnytFTlQgw5ZaUEVOIFBWQw!5e0!3m2!1str!2str!4v1730127193232!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </Box>
          </motion.div>
        </Container>
      </motion.div>
    </>
  );
}
