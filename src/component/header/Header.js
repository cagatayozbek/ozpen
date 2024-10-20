import * as React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./logo.png";
import "./Header.css";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const location = useLocation(); // Get the current path

  // Check if the current path is the CamBalkon page
  const isCamBalkon = location.pathname === "/urunler/cam-balkon-sistemleri";

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Kurumsal", link: "/kurumsal" },
    { text: "Ürünler" },
    { text: "İletişim", link: "/iletişim" },
  ];

  const drawerList = () => (
    <Box sx={{ width: 250 }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={item.link}
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: isCamBalkon
            ? "rgba(255, 255, 255, 0.4)" // Transparent black background for CamBalkon page
            : "rgba(255, 255, 255, 0)", // Default transparent background for other pages
          boxShadow: "none", // No shadow
          width: "100%",
          zIndex: 1300,
          marginTop: "20px",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="Logo" className="logo" />
            <div className="nav-links">
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.text === "Ürünler" ? (
                      <div className="dropdown">
                        <Link to={item.link}>{item.text}</Link>
                        <div className="dropdown-content">
                          <Link to="/urunler/pencere-ve-kapı-sistemleri">
                            Pencere ve Kapı Sistemleri
                          </Link>
                          <Link to="/urunler/surme-sistemleri">
                            Sürme Sistemleri
                          </Link>
                          <Link to="/urunler/panjur-ve-kepenk-sistemleri">
                            Panjur ve Kepenk Sistemleri
                          </Link>
                          <Link to="/urunler/donanım-sistemleri">
                            Donanım Sistemleri
                          </Link>
                          <Link to="/urunler/cam-balkon-sistemleri">
                            Cam Balkon Sistemleri
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <Link to={item.link}>{item.text}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>

      <div>
        <Outlet />
      </div>
    </>
  );
}
