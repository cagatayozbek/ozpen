import React, { useEffect, useState } from "react";
import bg from "../../assets/ozpen-on.jpeg";
import "./Home.css";
import Grids from "./Grids";
import {
  Typography,
  Box,
  Container,
  Button,
  Grid2 as Grid,
  IconButton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { BsBuilding } from "react-icons/bs";
import { FaUsers, FaRegSmileBeam } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
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

  const [showIntro, setShowIntro] = useState(false);

  const kurulusYili = 2000;
  const deneyimYili = new Date().getFullYear() - kurulusYili;

  useEffect(() => {
    // Tarayıcı açıldığında video göster
    const isVideoShown = sessionStorage.getItem("isVideoShown");

    if (!isVideoShown) {
      setShowIntro(true);
      sessionStorage.setItem("isVideoShown", "true");
    }

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, []); // Boş bağımlılık dizisi ile sadece bir kez çalışır

  const handleCloseVideo = () => {
    setShowIntro(false);
  };

  // Anasayfaya döndüğünde video gösterimini kontrol et
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setShowIntro(false); // Tarayıcı görünür olduğunda video gösterme
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <SEO 
        title="Ankara Winsa Bayi | Özpen PVC"
        description="Ankara'nın en büyük Winsa bayisi Özpen PVC. Türkiye'nin en kaliteli PVC markası Winsa ile pencere, kapı ve cam balkon sistemlerinde uzman çözümler."
      />
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              maxWidth: "1000px",
              aspectRatio: "16/9",
              backgroundColor: "black",
              zIndex: 9999,
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
            }}
          >
            <IconButton
              onClick={handleCloseVideo}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 10000,
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.7)",
                },
              }}
            >
              <IoClose size={24} />
            </IconButton>
            <Box
              component="video"
              autoPlay
              muted
              controls
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={require("./assets/intro.mp4")} type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video açıkken arka planı karartma */}
      {showIntro && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 9998,
          }}
          onClick={handleCloseVideo}
        />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box className="simple-hero">
          <div className="hero-background">
            <img src={bg} alt="Özpen PVC Showroom - Ankara Winsa Bayisi" className="hero-image" />
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
                <Box sx={{ mt: 4 }}>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/urunler"
                    className="main-button"
                    sx={{
                      mr: 2,
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
                  <Grid item size={{ xs: 6, md: 3 }} key={index}>
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
