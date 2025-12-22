import React, { useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { CheckCircle, ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../SEO";
import confetti from "canvas-confetti";

export default function Tesekkurler() {
  useEffect(() => {
    // Sayfa açıldığında konfetileri patlat
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff6b35", "#263238", "#ffffff"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff6b35", "#263238", "#ffffff"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <>
      <SEO
        title="Teşekkürler | Başkent Özpen PVC"
        description="Talebiniz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz."
        robots="noindex, nofollow" // Bu sayfanın Google'da çıkmasını istemeyiz, sadece reklam dönüşümü için
      />
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)",
          py: 10,
        }}
      >
        <Container maxWidth="sm">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                textAlign: "center",
                p: 6,
                borderRadius: 4,
                bgcolor: "white",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <CheckCircle
                sx={{ fontSize: 100, color: "#4CAF50", mb: 3 }}
              />
              <Typography
                variant="h3"
                gutterBottom
                sx={{ fontWeight: 800, color: "#263238" }}
              >
                Harika!
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "#ff6b35", mb: 3, fontWeight: 600 }}
              >
                WhatsApp Yönlendirmesi Başlatıldı
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ color: "#546E7A", mb: 4, fontSize: "1.1rem" }}
              >
                Talebiniz için teşekkür ederiz. WhatsApp penceremiz yeni sekmede açılmış olmalı. 
                <br /><br />
                Uzman ekibimiz mesajınızı inceliyor, en kısa sürede size dönüş yapacağız.
              </Typography>

              <Button
                component={Link}
                to="/"
                variant="contained"
                startIcon={<ArrowBack />}
                size="large"
                sx={{
                  bgcolor: "#263238",
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: "#37474F",
                  },
                }}
              >
                Anasayfaya Dön
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}
