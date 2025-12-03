import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  useScrollTrigger,
  Slide,
  Collapse,
} from "@mui/material";
import {
  Menu as MenuIcon,
  KeyboardArrowDown,
  Phone,
  Instagram,
  Close,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./logo.png";
import "./Header.css";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setMobileSubmenuOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
    setMobileSubmenuOpen(false);
    handleMenuClose();
  };

  const menuItems = [
    { label: "Ana Sayfa", path: "/" },
    { label: "Kurumsal", path: "/kurumsal" },
    {
      label: "Ürünler",
      path: "/urunler",
      submenu: [
        {
          label: "Pencere ve Kapı Sistemleri",
          path: "/urunler/pencere-ve-kapi-sistemleri",
        },
        { label: "Sürme Sistemleri", path: "/urunler/surme-sistemleri" },
        {
          label: "Kepenk ve Panjur Sistemleri",
          path: "/urunler/panjur-ve-kepenk-sistemleri",
        },
        { label: "Donanım Sistemleri", path: "/urunler/donanim-sistemleri" },
        {
          label: "Cam Balkon Sistemleri",
          path: "/urunler/cam-balkon-sistemleri",
        },
      ],
    },
    { label: "İletişim", path: "/iletisim" },
    { label: "Referanslar", path: "/referanslar" },
  ];

  const drawer = (
    <Box sx={{ width: 280, height: "100%", bgcolor: "#fff" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderBottom: "1px solid #eee",
        }}
      >
        <img src={logo} alt="Özpen PVC Logo" style={{ height: "50px" }} />
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Box>
      <List sx={{ px: 1 }}>
        {menuItems.map((item) => (
          <React.Fragment key={item.label}>
            <ListItem
              button
              onClick={() => {
                if (item.submenu) {
                  setMobileSubmenuOpen(!mobileSubmenuOpen);
                } else {
                  handleNavigation(item.path);
                }
              }}
              sx={{
                borderRadius: "8px",
                mb: 0.5,
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  color: location.pathname === item.path ? "#ff6b35" : "#333",
                }}
              />
              {item.submenu &&
                (mobileSubmenuOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {item.submenu && (
              <Collapse in={mobileSubmenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenu.map((subItem) => (
                    <ListItem
                      key={subItem.label}
                      button
                      onClick={() => handleNavigation(subItem.path)}
                      sx={{
                        pl: 4,
                        borderRadius: "8px",
                        mb: 0.5,
                        "&:hover": { bgcolor: "#f5f5f5" },
                      }}
                    >
                      <ListItemText
                        primary={subItem.label}
                        primaryTypographyProps={{
                          fontSize: "0.9rem",
                          color: "#666",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          borderTop: "1px solid #eee",
        }}
      >
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Phone />}
          href="tel:+903123955603"
          sx={{
            mb: 1,
            borderColor: "#ff6b35",
            color: "#ff6b35",
            "&:hover": { borderColor: "#ff6b35", bgcolor: "#fff5f2" },
          }}
        >
          0312 395 56 03
        </Button>
        <Button
          fullWidth
          variant="contained"
          startIcon={<Instagram />}
          href="https://www.instagram.com/baskentozpen_winsa/"
          target="_blank"
          sx={{
            bgcolor: "#E4405F",
            "&:hover": { bgcolor: "#d32f50" },
          }}
        >
          Instagram
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="sticky"
          elevation={scrolled ? 4 : 0}
          sx={{
            bgcolor: scrolled ? "rgba(255, 255, 255, 0.98)" : "#fff",
            backdropFilter: scrolled ? "blur(10px)" : "none",
            transition: "all 0.3s ease",
            borderBottom: scrolled ? "none" : "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ py: 1, px: { xs: 0, sm: 2 } }}>
              {/* Logo */}
              <Box
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                sx={{ flexGrow: 0, cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                <img
                  src={logo}
                  alt="Özpen PVC - Ankara Winsa Bayi Logo"
                  style={{
                    height: scrolled ? "55px" : "65px",
                    transition: "height 0.3s ease",
                  }}
                />
              </Box>

              {/* Desktop Menu */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                {menuItems.map((item) =>
                  item.submenu ? (
                    <Box key={item.label}>
                      <Button
                        onClick={handleMenuOpen}
                        endIcon={<KeyboardArrowDown />}
                        sx={{
                          color: "#333",
                          fontWeight: 500,
                          fontSize: "0.95rem",
                          px: 2,
                          py: 1,
                          position: "relative",
                          "&:hover": {
                            bgcolor: "transparent",
                            color: "#ff6b35",
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: anchorEl ? "70%" : "0%",
                            height: "3px",
                            bgcolor: "#ff6b35",
                            transition: "width 0.3s ease",
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        PaperProps={{
                          sx: {
                            mt: 1,
                            borderRadius: "12px",
                            minWidth: 280,
                            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                          },
                        }}
                      >
                        {item.submenu.map((subItem) => (
                          <MenuItem
                            key={subItem.label}
                            onClick={() => handleNavigation(subItem.path)}
                            sx={{
                              py: 1.5,
                              px: 2.5,
                              "&:hover": {
                                bgcolor: "#fff5f2",
                                color: "#ff6b35",
                              },
                            }}
                          >
                            {subItem.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  ) : (
                    <Button
                      key={item.label}
                      onClick={() => handleNavigation(item.path)}
                      sx={{
                        color: location.pathname === item.path ? "#ff6b35" : "#333",
                        fontWeight: location.pathname === item.path ? 600 : 500,
                        fontSize: "0.95rem",
                        px: 2,
                        py: 1,
                        position: "relative",
                        "&:hover": {
                          bgcolor: "transparent",
                          color: "#ff6b35",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: location.pathname === item.path ? "70%" : "0%",
                          height: "3px",
                          bgcolor: "#ff6b35",
                          transition: "width 0.3s ease",
                        },
                        "&:hover::after": {
                          width: "70%",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  )
                )}
              </Box>

              {/* Desktop Contact Info */}
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                <Button
                  startIcon={<Phone />}
                  href="tel:+903123955603"
                  sx={{
                    color: "#333",
                    fontWeight: 500,
                    "&:hover": { bgcolor: "#f5f5f5" },
                  }}
                >
                  0312 395 56 03
                </Button>
                <IconButton
                  href="https://www.instagram.com/baskentozpen_winsa/"
                  target="_blank"
                  sx={{
                    color: "#E4405F",
                    "&:hover": { bgcolor: "#fff5f2" },
                  }}
                  aria-label="Özpen PVC Instagram Hesabı"
                >
                  <Instagram />
                </IconButton>
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                sx={{
                  display: { xs: "flex", md: "none" },
                  ml: "auto",
                  color: "#333",
                }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: 280 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Outlet içerik bölgesi */}
      <div>
        <Outlet />
      </div>
    </>
  );
}
