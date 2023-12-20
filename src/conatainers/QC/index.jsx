import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import Button from "@mui/material/Button";

import InfoComponent from "../../components/InfoComponent";

import storedepartmentImage from "../../assets/images/storedepartment.png";

export default function Store() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack spacing={3}>
            <InfoComponent
              showBackButton
              isShowLogo
              title="Welcome to QC"
              subtitle="Select the action you would like to perform"
            />
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/rawmaterials")}
              endIcon={<InsertDriveFileOutlinedIcon />}
              sx={{ maxWidth: "312px" }}
            >
              View Raw Materials
            </Button>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              onClick={() => navigate("/giir")}
              endIcon={<DifferenceOutlinedIcon />}
              sx={{ maxWidth: "312px" }}
            >
              View GIIRs
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
