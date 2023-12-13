import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import InfoComponent from '../../components/InfoComponent';

import loginImage from "../../assets/images/loginImage.png";

export default function Login() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack spacing={3}>
            <InfoComponent
              title="Login / Authenticate"
              subtitle="Kindly login to authenticate"
            />
            <Stack
              spacing={2}
              sx={{ marginTop: "40px", width: "100%", maxWidth: "452px" }}
            >
              <TextField
                id="username"
                label="Email ID / Username"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Stack>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/")}
              endIcon={<ArrowForwardIcon />}
              sx={{ maxWidth: "312px" }}
            >
              Login
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={loginImage} alt="Login" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
