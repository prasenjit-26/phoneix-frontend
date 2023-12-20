import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import Stack from "@mui/material/Stack";

import InfoComponent from "../../components/InfoComponent";

const ProductTitle = styled.p`
  font-size: 36px;
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
const products = [
  {
    id: "12122",
    supplier: {
      id: "dad",
      name: "Supplier-1",
    },
    name: "CP",
    quantity: "5 ton",
  },
  {
    id: "12122",
    supplier: {
      id: "dad",
      name: "Supplier-1",
    },
    name: "CPP",
    quantity: "8 ton",
  },
];
export default function RawMaterials() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "40px" }}>
      <InfoComponent
        title="Raw Materials"
        backRedirectLink="/qc"
        subtitle="Kindly choose the raw material to create GIIR."
        showBackButton
      />
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <PRNContainer>
              <Stack direction="row" spacing={4}>
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
                  <ProductTitle style={{ fontSize: "18px" }}>
                    Received Quantity: {product.quantity}
                  </ProductTitle>
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
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={() => navigate("/grn/22")}
                    color="secondary"
                    endIcon={<VisibilityIcon />}
                  >
                    View GRN
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={() => navigate("/giir/create")}
                    fullWidth
                    endIcon={<AddIcon />}
                  >
                    Create GIIR
                  </Button>
                </Stack>
              </Stack>
            </PRNContainer>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
