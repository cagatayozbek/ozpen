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
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Collapse,
  Typography,
  Divider,
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
import { motion } from "framer-motion";
import logo from "./logo.png";
import "./Header.css";

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

  const isActivePath = (item) => {
    if (item.path === "/") {
      return location.pathname === "/";
    }

    if (item.submenu) {
      return (
        location.pathname === item.path ||
        item.submenu.some((subItem) => location.pathname.startsWith(subItem.path))
      );
    }

    return location.pathname.startsWith(item.path);
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
    <Box className="mobile-drawer-panel">
      <Box className="mobile-drawer-header">
        <Box
          component="img"
          src={logo}
          alt="Özpen PVC - Ankara Winsa Bayi Logo"
          className="mobile-drawer-logo"
          onClick={() => handleNavigation("/")}
        />
        <IconButton onClick={handleDrawerToggle} aria-label="Menüyü kapat">
          <Close />
        </IconButton>
      </Box>

      <Box className="mobile-drawer-cta">
        <Button
          fullWidth
          component={Link}
          to="/perakende"
          variant="contained"
          className="primary-cta"
          onClick={() => setMobileOpen(false)}
        >
          Ücretsiz Keşif
        </Button>
        <Typography variant="body2" className="drawer-helper-text">
          Ankara içi keşif ve teklif için hızlı başvuru.
        </Typography>
      </Box>

      <Divider />

      <List className="mobile-menu-list">
        {menuItems.map((item) => (
          <React.Fragment key={item.label}>
            <ListItemButton
              onClick={() => {
                if (item.submenu) {
                  setMobileSubmenuOpen(!mobileSubmenuOpen);
                } else {
                  handleNavigation(item.path);
                }
              }}
              sx={{
                minHeight: 48,
                borderRadius: "10px",
                mb: 0.5,
                bgcolor: isActivePath(item) ? "#fff1f2" : "transparent",
                "&:hover": { bgcolor: "#f6f7f9" },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: isActivePath(item) ? 700 : 500,
                  color: isActivePath(item) ? "#d71920" : "#20242c",
                }}
              />
              {item.submenu &&
                (mobileSubmenuOpen ? (
                  <ExpandLess sx={{ color: "#d71920" }} />
                ) : (
                  <ExpandMore />
                ))}
            </ListItemButton>
            {item.submenu && (
              <Collapse in={mobileSubmenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenu.map((subItem) => (
                    <ListItemButton
                      key={subItem.label}
                      onClick={() => handleNavigation(subItem.path)}
                      sx={{
                        pl: 4,
                        minHeight: 44,
                        borderRadius: "10px",
                        mb: 0.5,
                        bgcolor: location.pathname.startsWith(subItem.path)
                          ? "#fff1f2"
                          : "transparent",
                        "&:hover": { bgcolor: "#f6f7f9" },
                      }}
                    >
                      <ListItemText
                        primary={subItem.label}
                        primaryTypographyProps={{
                          fontSize: "0.9rem",
                          fontWeight: location.pathname.startsWith(subItem.path)
                            ? 700
                            : 500,
                          color: location.pathname.startsWith(subItem.path)
                            ? "#d71920"
                            : "#5f6673",
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>

      <Box className="mobile-drawer-actions">
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Phone />}
          href="tel:+903123955603"
          className="phone-action"
        >
          0312 395 56 03
        </Button>
        <Button
          fullWidth
          variant="contained"
          startIcon={<Instagram />}
          href="https://www.instagram.com/baskentozpen_winsa/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-action"
        >
          Instagram
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        className={scrolled ? "site-header site-header-scrolled" : "site-header"}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            className={scrolled ? "site-toolbar site-toolbar-compact" : "site-toolbar"}
          >
            {/* Logo */}
            <Box
              component={motion.button}
              type="button"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="brand-button"
              onClick={() => navigate("/")}
              aria-label="Özpen ana sayfa"
            >
              <Box
                component="img"
                src={logo}
                alt="Özpen PVC - Ankara Winsa Bayi Logo"
                className="brand-logo"
              />
              <Box className="brand-copy">
                <Typography component="span" className="brand-kicker">
                  Ankara Winsa Bayi
                </Typography>
                <Typography component="span" className="brand-title">
                  Başkent Özpen PVC
                </Typography>
              </Box>
            </Box>

            {/* Desktop Menu */}
            <Box className="desktop-nav">
              {menuItems.map((item) => {
                const active = isActivePath(item);

                return item.submenu ? (
                  <Box key={item.label}>
                    <Button
                      id="products-menu-button"
                      onClick={handleMenuOpen}
                      endIcon={<KeyboardArrowDown />}
                      className={active ? "nav-link nav-link-active" : "nav-link"}
                      aria-controls={anchorEl ? "products-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={anchorEl ? "true" : undefined}
                    >
                      {item.label}
                    </Button>
                    <Menu
                      id="products-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      MenuListProps={{ "aria-labelledby": "products-menu-button" }}
                      PaperProps={{
                        className: "products-menu-paper",
                      }}
                      transformOrigin={{ horizontal: "center", vertical: "top" }}
                      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
                    >
                      {item.submenu.map((subItem) => (
                        <MenuItem
                          key={subItem.label}
                          onClick={() => handleNavigation(subItem.path)}
                          className={
                            location.pathname.startsWith(subItem.path)
                              ? "products-menu-item products-menu-item-active"
                              : "products-menu-item"
                          }
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
                    className={active ? "nav-link nav-link-active" : "nav-link"}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            {/* Desktop Contact Info */}
            <Box className="desktop-actions">
              <Button
                component={Link}
                to="/perakende"
                variant="contained"
                className="primary-cta"
              >
                Ücretsiz Keşif
              </Button>
              <Button
                startIcon={<Phone />}
                href="tel:+903123955603"
                className="phone-link"
              >
                0312 395 56 03
              </Button>
              <IconButton
                href="https://www.instagram.com/baskentozpen_winsa/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-icon"
                aria-label="Özpen PVC Instagram Hesabı"
              >
                <Instagram />
              </IconButton>
            </Box>

            {/* Mobile Free Discovery Button */}
            <Button
              component={Link}
              to="/perakende"
              variant="contained"
              size="small"
              className="mobile-cta"
            >
              Ücretsiz Keşif
            </Button>

            {/* Mobile Menu Button */}
            <IconButton
              className="mobile-menu-button"
              onClick={handleDrawerToggle}
              aria-label="Menüyü aç"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: { xs: "86vw", sm: 360 }, maxWidth: 380 },
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
