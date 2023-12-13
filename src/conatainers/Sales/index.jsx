import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Visibility from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";

import InfoComponent from "../../components/InfoComponent";

import storedepartmentImage from "../../assets/images/storedepartment.png";

export default function Store() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack spacing={3}>
            <InfoComponent
              showBackButton
              title="Welcome to Sales & Accounts"
              subtitle="Select the action you would like to perform"
            />
            <Button
              variant="contained"
              size="large"
              endIcon={<Visibility />}
              sx={{ maxWidth: "312px" }}
            >
              View PRNs
            </Button>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              endIcon={<Visibility />}
              sx={{ maxWidth: "312px" }}
            >
              View POs
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack alignItems="center" justifyContent="center" height="100%">
            <img src={storedepartmentImage} alt="Login" width="100%" />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
