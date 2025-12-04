import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid2 as Grid,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Phone,
    CurrencyLira,
  Schedule,
  VerifiedUser,
  WhatsApp,
  WindowOutlined,
  Balcony,

  Home as HomeIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import SEO from "../SEO";

export default function Perakende() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderimi
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // WhatsApp'a yönlendir
    const message = `Merhaba, ${data.hizmet} için teklif almak istiyorum.\n\nAdım: ${data.ad}\nTelefon: ${data.telefon}\nAdres: ${data.adres}`;
    const whatsappUrl = `https://wa.me/905439035617?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const primaryColor = "#ff6b35"; // Header ile uyumlu turuncu
  const secondaryColor = "#263238"; // Premium Dark Slate
  const lightBg = "#F5F7FA"; // Soğuk açık gri

  return (
    <>
      <SEO
        title="Ev ve Daire İçin PVC Pencere, Kapı, Cam Balkon | Kış Kampanyası"
        description="Ankara'da ev ve daireler için özel perakende fiyatlarla PVC pencere, kapı ve cam balkon. Ücretsiz keşif ve ölçüm. Hızlı montaj garantisi. Taksit imkanı. 2 yıl Winsa garantisi."
        keywords="ankara ev penceresi, daire penceresi ankara, perakende cam balkon, uygun pvc pencere, taksitli pencere, cam balkon fiyat, ankara pencere tamiri"
      />

      {/* Hero Bölümü */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
          color: "#1a1a1a",
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 8 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dekoratif Arka Plan Elemanları */}
        <Box
          sx={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,107,53,0.05) 0%, rgba(255,255,255,0) 70%)",
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 7 }}>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: primaryColor,
                      fontWeight: 800,
                      letterSpacing: 1.5,
                      fontSize: "0.9rem",
                    }}
                  >
                    KIŞ KAMPANYASI 2025 - 2026
                  </Typography>
                </Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    lineHeight: 1.2,
                    color: secondaryColor,
                  }}
                >
                  Eviniz İçin
                  <br />
                  <Box component="span" sx={{ color: primaryColor }}>
                    Özel Fiyatlar
                  </Box>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: "#546E7A",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  PVC Pencere, Kapı ve Cam Balkon sistemlerinde
                  <br />
                  <strong>ücretsiz keşif + Zamanında teslimat garantisi</strong>
                </Typography>
                <List sx={{ mb: 5 }}>
                  {[
                    "Ücretsiz ölçüm ve keşif hizmeti",
                    "Zamanında teslimat",
                    "2 yıl Winsa fabrika garantisi",
                    "Esnek taksit imkanları",
                    "Montaj sonrası teknik destek",
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 35 }}>
                        <CheckCircle sx={{ color: primaryColor, fontSize: 22 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          variant: "body1",
                          fontWeight: 500,
                          color: "#37474F",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    href="tel:+903123955603"
                    variant="contained"
                    size="large"
                    startIcon={<Phone />}
                    sx={{
                      bgcolor: primaryColor,
                      color: "#fff",
                      fontWeight: 700,
                      px: 4,
                      py: 1.8,
                      fontSize: "1rem",
                      boxShadow: "0 8px 20px rgba(255, 107, 53, 0.3)",
                      "&:hover": {
                        bgcolor: "#e65100",
                        boxShadow: "0 12px 25px rgba(255, 107, 53, 0.4)",
                      },
                    }}
                  >
                    Hemen Ara
                  </Button>
                  <Button
                    href="https://wa.me/905439035617"
                    target="_blank"
                    variant="outlined"
                    size="large"
                    startIcon={<WhatsApp />}
                    sx={{
                      borderColor: "#25D366",
                      color: "#25D366",
                      fontWeight: 700,
                      px: 4,
                      py: 1.8,
                      fontSize: "1rem",
                      borderWidth: 2,
                      "&:hover": {
                        borderColor: "#128C7E",
                        bgcolor: "rgba(37, 211, 102, 0.05)",
                        borderWidth: 2,
                      },
                    }}
                  >
                    WhatsApp
                  </Button>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Paper
                  component="form"
                  onSubmit={handleSubmit}
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    border: "1px solid rgba(0,0,0,0.08)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                    background: "#fff",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, mb: 1, color: secondaryColor }}
                  >
                    Ücretsiz Keşif İste
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, color: "#78909C" }}>
                    Formu doldurun, uzman ekibimiz sizi arasın.
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    name="ad"
                    label="Adınız Soyadınız"
                    variant="outlined"
                    sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                  />
                  <TextField
                    fullWidth
                    required
                    name="telefon"
                    label="Telefon Numaranız"
                    variant="outlined"
                    type="tel"
                    sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                  />
                  <TextField
                    fullWidth
                    required
                    name="adres"
                    label="Adresiniz (İlçe/Mahalle)"
                    variant="outlined"
                    sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                  />
                  <TextField
                    fullWidth
                    required
                    select
                    name="hizmet"
                    label="Hangi Hizmeti İstiyorsunuz?"
                    variant="outlined"
                    SelectProps={{ native: true }}
                    sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                  >
                    <option value=""></option>
                    <option value="PVC Pencere">PVC Pencere</option>
                    <option value="PVC Kapı">PVC Kapı</option>
                    <option value="Cam Balkon">Cam Balkon</option>
                    <option value="Hepsi">Hepsine İlgiliyim</option>
                  </TextField>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: secondaryColor,
                      py: 2,
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      borderRadius: 2,
                      "&:hover": {
                        bgcolor: "#1a1a1a",
                      },
                    }}
                    startIcon={<WhatsApp />}
                  >
                    WhatsApp ile Teklif Al
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Hizmetler */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: secondaryColor,
            }}
          >
            Perakende Hizmetlerimiz
          </Typography>
          <Typography variant="h6" sx={{ color: "#78909C", maxWidth: 600, mx: "auto" }}>
            Evinizin konforunu ve değerini artıracak çözümler sunuyoruz.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {[
            {
              icon: WindowOutlined,
              title: "PVC Pencere",
              desc: "Enerji tasarrufu sağlayan, ses ve ısı yalıtımlı pencere sistemleri. Tek, çift ve üç cam seçenekleri.",
              features: [
                "Enerji verimliliği",
                "Ses yalıtımı",
                "2 yıl garanti",
              ],
              link: "/urunler/pencere-ve-kapi-sistemleri",
            },
            {
              icon: HomeIcon,
              title: "PVC Kapı",
              desc: "Güvenli, dayanıklı ve estetik PVC kapı sistemleri. Giriş kapısı ve balkon kapısı çözümleri.",
              features: [
                "Güvenlik kilitleri",
                "Hava akım önleyici",
                                "2 yıl garanti",
              ],
              link: "/urunler/pencere-ve-kapi-sistemleri",
            },
            {
              icon: Balcony,
              title: "Cam Balkon",
              desc: "Balkonunuzu 4 mevsim kullanabileceğiniz yaşam alanına dönüştürün. Katlanır ve sürme sistemler.",
              features: [
                "Toz ve yağmur koruması",
                "Ek yaşam alanı",
                "Kolay kullanım",
              ],
              link: "/urunler/cam-balkon-sistemleri",
            },
          ].map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Card
                component={motion.div}
                whileHover={{ y: -10 }}
                elevation={0}
                sx={{
                  height: "100%",
                  p: 4,
                  borderRadius: 4,
                  border: "1px solid #eee",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                    borderColor: "transparent",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: 3,
                    bgcolor: "rgba(255, 107, 53, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <item.icon sx={{ fontSize: 32, color: primaryColor }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: secondaryColor }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#546E7A", mb: 3, lineHeight: 1.6 }}>
                  {item.desc}
                </Typography>
                <List dense>
                  {item.features.map((feature, idx) => (
                    <ListItem key={idx} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircle sx={{ color: "#4CAF50", fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={feature} 
                        primaryTypographyProps={{ color: "#455A64" }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Button
                  component={Link}
                  to={item.link}
                  fullWidth
                  variant="text"
                  sx={{
                    mt: 2,
                    color: primaryColor,
                    fontWeight: 600,
                    justifyContent: "flex-start",
                    px: 0,
                    "&:hover": {
                      bgcolor: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Detaylı Bilgi &rarr;
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Neden Biz */}
      <Box sx={{ bgcolor: lightBg, py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: secondaryColor,
              }}
            >
              Neden Özpen PVC?
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#78909C" }}
            >
              Binlerce mutlu müşteri ve 20+ yıllık tecrübe
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: Schedule,
                title: "Zamanında Teslimat",
                desc: "Ölçümden sonra zamanında teslimat, evde minimum rahatsızlık",
              },
              {
                icon: CurrencyLira,
                title: "Esnek Ödeme",
                desc: "Kredi kartına taksit, nakit indirimi ve özel kampanyalar",
              },
              {
                icon: VerifiedUser,
                title: "2 Yıl Garanti",
                desc: "Winsa sistemleri 2 yıl fabrika garantisi ile güvence altında",
              },
              {
                icon: Phone,
                title: "Destek",
                desc: "Montaj sonrası teknik destek ve bakım hizmetleri",
              },
            ].map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box 
                  sx={{ 
                    textAlign: "center",
                    p: 3,
                    height: "100%",
                    bgcolor: "#fff",
                    borderRadius: 4,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      bgcolor: "#ECEFF1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <item.icon sx={{ fontSize: 30, color: secondaryColor }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: secondaryColor }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#546E7A", lineHeight: 1.6 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          background: secondaryColor,
          color: "#fff",
          py: 10,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
            Hemen Ücretsiz Keşif İsteyin
          </Typography>
          <Typography variant="h6" sx={{ mb: 5, opacity: 0.8, fontWeight: 400 }}>
            Eviniz için en uygun çözümü birlikte planlayalım.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              href="tel:+903123955603"
              variant="contained"
              size="large"
              startIcon={<Phone />}
              sx={{
                bgcolor: primaryColor,
                color: "white",
                fontWeight: 700,
                px: 5,
                py: 2,
                fontSize: "1.2rem",
                "&:hover": {
                  bgcolor: "#e65100",
                },
              }}
            >
              0312 395 56 03
            </Button>
            <Button
              href="https://wa.me/905439035617"
              target="_blank"
              variant="outlined"
              size="large"
              startIcon={<WhatsApp />}
              sx={{
                borderColor: "#25D366",
                color: "#25D366",
                fontWeight: 700,
                px: 5,
                py: 2,
                fontSize: "1.2rem",
                borderWidth: 2,
                "&:hover": {
                  borderColor: "#128C7E",
                  bgcolor: "rgba(37, 211, 102, 0.1)",
                  borderWidth: 2,
                },
              }}
            >
              WhatsApp Hattı
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

