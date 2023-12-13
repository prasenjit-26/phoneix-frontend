import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import InfoComponent from "../../components/InfoComponent";

import selectDepartmentImage from "../../assets/images/selectDepartment.png";

function Home() {
  const navigate = useNavigate();
  const [department, setDepartment] = React.useState("");

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack spacing={3}>
            <InfoComponent
              title="Which Department?"
              subtitle="Choose your department to proceed"
            />
            <FormControl fullWidth sx={{ maxWidth: "452px" }}>
              <InputLabel id="demo-simple-select-label">
                Choose Department
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={department}
                label="Choose Department"
                onChange={handleChange}
              >
                <MenuItem value="store">Store</MenuItem>
                <MenuItem value="qc">QC</MenuItem>
                <MenuItem value="sales">Sales & Accounts</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate(`/${department}`)}
              disabled={department === ""}
              endIcon={<ArrowForwardIcon />}
              sx={{ maxWidth: "312px" }}
            >
              Proceed
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={selectDepartmentImage} alt="Login" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
