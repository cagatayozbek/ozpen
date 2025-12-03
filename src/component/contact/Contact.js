import React from "react";
import hero from "../../assets/ozpen-on.jpeg";
import "./Contact.css";
import { motion } from "framer-motion";
import {
  Container,
  Grid2 as Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import {
  FaEnvelope,
  FaFax,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa6";
import Hero from "../hero/Hero";
import SEO from "../SEO";

export default function Contact() {
  const contactInfo = [
    {
      icon: FaLocationDot,
      title: "Adres",
      content:
        "İvedik Organize Sanayi Bölgesi 1332.Sokak No:84/86 Ostim / ANKARA",
      link: "https://maps.app.goo.gl/HWU1RcuSgUBs6RAt5",
      color: "#ff6b00",
    },
    {
      icon: FaPhone,
      title: "Telefon",
      content: "0312 395 56 03",
      link: "tel:+903123955603",
      color: "#28a745",
    },
    {
      icon: FaFax,
      title: "Fax",
      content: "0312 395 46 72",
      link: null,
      color: "#6c757d",
    },
    {
      icon: FaEnvelope,
      title: "E-posta",
      content: "proje@ozpenpvc.com.tr",
      link: "mailto:proje@ozpenpvc.com.tr",
      color: "#dc3545",
    },
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      link: "https://wa.me/+905439035617",
      color: "#25D366",
    },
    {
      icon: FaInstagram,
      title: "Instagram",
      link: "https://www.instagram.com/baskentozpen_winsa/",
      color: "#E4405F",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        title="İletişim | Bize Ulaşın"
        description="Özpen PVC iletişim bilgileri. Ankara'da pencere, kapı ve cam balkon sistemleri için bize ulaşın. Telefon: 0312 395 56 03"
        keywords="özpen iletişim, ankara pvc iletişim, winsa ankara iletişim, özpen adres, özpen telefon"
      />
      <Hero hero={hero} title="Bize Ulaşın" isBright={true} />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 600,
                color: "#1a1a1a",
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Bize Ulaşın
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#666",
                maxWidth: "600px",
                mx: "auto",
                fontSize: "1.1rem",
              }}
            >
              Ürün ve hizmetlerimiz hakkında detaylı bilgi için bize ulaşabilir,
              en kısa sürede geri bildirim sağlayabilirsiniz.
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ mb: 6 }}>
            {contactInfo.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                      },
                    }}
                    elevation={0}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        p: 3,
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "12px",
                          backgroundColor: `${item.color}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                        }}
                      >
                        <item.icon size={24} style={{ color: item.color }} />
                      </Box>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                        {item.title}
                      </Typography>
                      {item.link ? (
                        <Typography
                          component="a"
                          href={item.link}
                          sx={{
                            color: "#666",
                            textDecoration: "none",
                            "&:hover": { color: item.color },
                          }}
                        >
                          {item.content}
                        </Typography>
                      ) : (
                        <Typography sx={{ color: "#666" }}>
                          {item.content}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                mb: 4,
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            >
              Sosyal Medya
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {socialLinks.map((item, index) => (
                <Grid size={{ xs: 6, sm: 3 }} key={index}>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <Button
                      variant="contained"
                      href={item.link}
                      target="_blank"
                      startIcon={<item.icon />}
                      fullWidth
                      sx={{
                        backgroundColor: item.color,
                        "&:hover": {
                          backgroundColor: item.color,
                          filter: "brightness(0.9)",
                        },
                        py: 1.5,
                      }}
                    >
                      {item.title}
                    </Button>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "400px",
                borderRadius: "12px",
                overflow: "hidden",
              }}
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
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );
}
