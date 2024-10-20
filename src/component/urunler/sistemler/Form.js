import React from "react";
import "./sistemComponent.css";
import {
  Box,
  Grid2 as Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import wImage from "../../../assets/w.png";

export default function Form() {
  return (
    <div>
      <Box
        sx={{
          position: "relative", // Make the Box relative to position the pseudo-element
          backgroundColor: "#030023", // Background color fallback
          height: "100vh",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${wImage})`, // Background image
            backgroundSize: "cover", // Cover the whole area
            backgroundRepeat: "no-repeat", // No repeat
            backgroundPosition: "center", // Center the image
            opacity: 0.5, // Adjust the opacity of the background image
            // Keep the image behind the content
          },
        }}
      >
        <Grid container>
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            <Typography
              variant="h4"
              sx={{ marginBottom: "20px", fontWeight: "bold", color: "white" }}
            >
              Ücretsiz Keşif Formu
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "40ch" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
              noValidate
              autoComplete="off"
            >
              <div className="text-field-row">
                <TextField
                  id="outlined-basic"
                  label="İsim"
                  variant="outlined"
                  color="warning"
                  focused
                  slotProps={{
                    input: {
                      style: { color: "white" }, // Yazı rengi burada mavi olarak ayarlandı
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Soyisim"
                  variant="outlined"
                  color="warning"
                  focused
                  slotProps={{
                    input: {
                      style: { color: "white" }, // Yazı rengi burada mavi olarak ayarlandı
                    },
                  }}
                />
              </div>
              <TextField
                id="outlined-basic"
                label="Telefon"
                variant="outlined"
                color="warning"
                focused
                slotProps={{
                  input: {
                    style: { color: "white" }, // Yazı rengi burada mavi olarak ayarlandı
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Adres"
                variant="outlined"
                color="warning"
                focused
                slotProps={{
                  input: {
                    style: { color: "white" }, // Yazı rengi burada mavi olarak ayarlandı
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Konu"
                variant="outlined"
                color="warning"
                focused
                multiline
                slotProps={{
                  input: {
                    style: { color: "white" }, // Yazı rengi burada mavi olarak ayarlandı
                  },
                }}
              />
              <Button
                variant="contained"
                color="warning"
                sx={{ height: "45px" }}
              >
                {" "}
                GÖNDER
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
