import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";

import InfoComponent from "../../components/InfoComponent";

import storedepartmentImage from "../../assets/images/storedepartment.png";

export default function Store() {
  const [action, setAction] = React.useState("");

  const handleChange = (event) => {
    setAction(event.target.value);
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack spacing={3}>
            <InfoComponent
              showBackButton
              title="Welcome to Store"
              subtitle="Select the action you would like to perform"
            />
            <FormControl fullWidth sx={{ maxWidth: "452px" }}>
              <InputLabel id="demo-simple-select-label">
                Choose Action
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={action}
                label="Choose Action"
                onChange={handleChange}
              >
                <MenuItem value={10}>Create PRN</MenuItem>
                <MenuItem value={20}>View PRNs</MenuItem>
                <MenuItem value={30}>View POs</MenuItem>
                <MenuItem value={40}>Create GRN</MenuItem>
                <MenuItem value={50}>View GRNs</MenuItem>
                <MenuItem value={60}>View GIIRs</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              size="large"
              disabled={action === ""}
              endIcon={<ArrowForwardIcon />}
              sx={{ maxWidth: "312px" }}
            >
              Proceed
            </Button>
            <Divider
              variant="middle"
              sx={{ maxWidth: "452px", background: "#848484" }}
            />
            <Button
              variant="contained"
              size="large"
              color="secondary"
              endIcon={<VisibilityIcon />}
              sx={{ maxWidth: "312px" }}
            >
              View Inventory
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
