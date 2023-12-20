import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { styled as muiStyled } from "@mui/material/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import InfoComponent from "../../components/InfoComponent";

const StyledFormControlLabel = muiStyled((props) => (
  <FormControlLabel {...props} />
))(({ checked, color }) => ({
  ".MuiFormControlLabel-label": checked
    ? {
        color: color,
        fontFamily: "Open Sans",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
      }
    : {
        fontFamily: "Open Sans",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
      },
}));

const ProductTitle = styled.p`
  font-size: 24px;
  font-family: "Open Sans";
  font-weight: 700;
  color: #333;
  margin: 0px;
`;
const ProducSubtTitle = styled.p`
  font-size: 18px;
  font-family: "Open Sans";
  font-weight: 400;
  color: #333;
  margin: 0px;
`;
const PRNContainer = styled.div`
  border-radius: 16px;
  border: 1px solid var(--Disabled, #848484);
  background: #fff;
  padding: 24px;
`;
const StyledLink = styled.a`
  color: var(--Text, #333);
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration-line: underline;
`;
const giirs = [
  {
    id: "12122",
    name: "Product - 1",
    supplier: {
      id: "dad",
      name: "Supplier-1",
    },
    color: "Red",
    pH: 7,
    brix: "57",
    moisture: "32",
    nitrogen: "23",
    protein: "45",
    salt: "12",
    ash: "12",
    remarks: "Good to go",
    receivedQuantiy: "8kg",
    isApproved: true,

    products: [
      {
        name: "CP",
        quantity: "08 Ton",
        date: "23-Dec-2023",
      },
      {
        name: "CPP",
        quantity: "28 Ton",
        date: "27-Dec-2023",
      },
    ],
  },
  {
    id: "12122",
    name: "Product - 1",
    supplier: {
      id: "dad",
      name: "Supplier-1",
    },
    color: "Red",
    pH: 7,
    brix: "57",
    moisture: "32",
    nitrogen: "23",
    protein: "45",
    salt: "12",
    ash: "12",
    remarks: "Good to go",
    receivedQuantiy: "8kg",
    isApproved: false,
    products: [
      {
        name: "CP",
        quantity: "08 Ton",
        date: "23-Dec-2023",
      },
      {
        name: "CPP",
        quantity: "28 Ton",
        date: "27-Dec-2023",
      },
    ],
  },
];
export default function GIIR() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "40px" }}>
      <InfoComponent
        title="GIIR Listing"
        backRedirectLink="/store"
        subtitle="The following are the registered Purchase GIIRs."
        showBackButton
      />
      <Grid container spacing={2}>
        {giirs.map((product) => (
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <PRNContainer>
              <Stack direction="row" spacing={4} alignItems="flex-start">
                <img
                  src="https://placehold.co/240x343"
                  alt="placeholder"
                  style={{ borderRadius: "8px" }}
                />
                <Stack direction="column" spacing={2} width="100%">
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProducSubtTitle style={{ fontSize: "24px" }}>
                    {product.supplier.name}
                  </ProducSubtTitle>
                  <Stack direction="row">
                    <ProductTitle style={{ fontSize: "18px" }}>
                      Received Quantity:
                    </ProductTitle>
                    <ProducSubtTitle style={{ marginLeft: "5px" }}>
                      {product.receivedQuantiy}
                    </ProducSubtTitle>
                  </Stack>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Stack spacing={3}>
                        <Stack direction="row">
                          <ProductTitle style={{ fontSize: "18px" }}>
                            Color
                          </ProductTitle>
                          <ProducSubtTitle style={{ marginLeft: "5px" }}>
                            {product.color}
                          </ProducSubtTitle>
                        </Stack>
                        <Stack direction="row">
                          <ProductTitle style={{ fontSize: "18px" }}>
                            pH :
                          </ProductTitle>
                          <ProducSubtTitle style={{ marginLeft: "5px" }}>
                            {product.pH}
                          </ProducSubtTitle>
                        </Stack>
                        <Stack direction="row">
                          <ProductTitle style={{ fontSize: "18px" }}>
                            Brix% :
                          </ProductTitle>
                          <ProducSubtTitle style={{ marginLeft: "5px" }}>
                            {product.brix}
                          </ProducSubtTitle>
                        </Stack>
                        <Stack direction="row">
                          <ProductTitle style={{ fontSize: "18px" }}>
                            Moisture:
                          </ProductTitle>
                          <ProducSubtTitle style={{ marginLeft: "5px" }}>
                            {product.moisture}
                          </ProducSubtTitle>
                        </Stack>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Stack spacing={3}>
                        <Stack direction="row">
                          <ProductTitle style={{ fontSize: "18px" }}>
                            Nitrogen :
                          </ProductTitle>
                          <ProducSubtTitle style={{ marginLeft: "5px" }}>
                            {product.nitrogen}
                          </ProducSubtTitle>
                        </Stack>
                        <Stack direction="row">
                          <ProductTitle style={{ fontSize: "18px" }}>
                            Protein :
                          </ProductTitle>
                          <ProducSubtTitle style={{ marginLeft: "5px" }}>
                            {product.protein}
                          </ProducSubtTitle>
                        </Stack>
                        <Stack direction="row">
                          <ProductTitle style={{ fontSize: "18px" }}>
                            Salt:
                          </ProductTitle>
                          <ProducSubtTitle style={{ marginLeft: "5px" }}>
                            {product.salt}
                          </ProducSubtTitle>
                        </Stack>
                        <Stack direction="row">
                          <ProductTitle style={{ fontSize: "18px" }}>
                            Ash:
                          </ProductTitle>
                          <ProducSubtTitle style={{ marginLeft: "5px" }}>
                            {product.ash}
                          </ProducSubtTitle>
                        </Stack>
                      </Stack>
                    </Grid>
                  </Grid>
                  <Stack direction="row" spacing={1}>
                    <InsertDriveFileOutlinedIcon />
                    <StyledLink href="www.google.com">View Invoice</StyledLink>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <PictureAsPdfOutlinedIcon />
                    <StyledLink href="www.google.com">
                      View Purchase Order
                    </StyledLink>
                  </Stack>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <StyledFormControlLabel
                        checked={product.isApproved}
                        control={
                          <Radio checked={product.isApproved} color="success" />
                        }
                        label="Approved"
                        color="#2e7d32"
                      />
                      <StyledFormControlLabel
                        value={!product.isApproved}
                        checked={!product.isApproved}
                        control={
                          <Radio checked={!product.isApproved} color="error" />
                        }
                        label="Rejected"
                        color="#d32f2f"
                      />
                    </RadioGroup>
                  </FormControl>
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={() => navigate("/giir/12")}
                    endIcon={<VisibilityIcon />}
                  >
                    View
                  </Button>
                  {product.isApproved ? (
                    <Button variant="contained" color="success" size="large">
                      Accept
                    </Button>
                  ) : (
                    <Button variant="contained" color="error" size="large">
                      Replace Product
                    </Button>
                  )}
                </Stack>
              </Stack>
            </PRNContainer>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
