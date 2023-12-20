import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
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
const pnrs = [
  {
    id: "12122",
    products: [
      {
        name: "CP",
        quantity: "08 Ton",
      },
      {
        name: "CPP",
        quantity: "28 Ton",
      },
      {
        name: "Buffalo Heart",
        quantity: "18 Ton",
      },
      {
        name: "Yeast",
        quantity: "4 Ton",
      },
    ],
  },
  {
    id: "12122",
    products: [
      {
        name: "CP",
        quantity: "08 Ton",
      },
      {
        name: "CPP",
        quantity: "28 Ton",
      },
      {
        name: "Buffalo Heart",
        quantity: "18 Ton",
      },
      {
        name: "Yeast",
        quantity: "4 Ton",
      },
    ],
  },
  {
    id: "12122",
    products: [
      {
        name: "CP",
        quantity: "08 Ton",
      },
      {
        name: "CPP",
        quantity: "28 Ton",
      },
      {
        name: "Buffalo Heart",
        quantity: "18 Ton",
      },
      {
        name: "Yeast",
        quantity: "4 Ton",
      },
    ],
  },
  {
    id: "12122",
    products: [
      {
        name: "CP",
        quantity: "08 Ton",
      },
      {
        name: "CPP",
        quantity: "28 Ton",
      },
      {
        name: "Buffalo Heart",
        quantity: "18 Ton",
      },
      {
        name: "Yeast",
        quantity: "4 Ton",
      },
    ],
  },
  {
    id: "12122",
    products: [
      {
        name: "CP",
        quantity: "08 Ton",
      },
      {
        name: "CPP",
        quantity: "28 Ton",
      },
      {
        name: "Buffalo Heart",
        quantity: "18 Ton",
      },
      {
        name: "Yeast",
        quantity: "4 Ton",
      },
    ],
  },
];
export default function PRN() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "40px" }}>
      <InfoComponent
        title="PRN Listing"
        backRedirectLink="/store"
        subtitle="Kindly choose the Purchase Requisition Note to create Purchase Order."
        showBackButton
      />
      <Grid container spacing={2}>
        {pnrs.map((produt) => (
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <PRNContainer>
              <Stack direction="row" spacing={4}>
                <img
                  src="https://placehold.co/240x343"
                  alt="placeholder"
                  style={{ borderRadius: "8px" }}
                />
                <Stack direction="column" spacing={2} width="100%">
                  <ProductTitle>Product Listing</ProductTitle>
                  <Stack direction="row" justifyContent="space-between">
                    <ProductTitle style={{ fontSize: "18px" }}>
                      Product
                    </ProductTitle>
                    <ProductTitle style={{ fontSize: "18px" }}>
                      Qty Requested
                    </ProductTitle>
                  </Stack>
                  {produt.products.map((product) => (
                    <Stack direction="row" justifyContent="space-between">
                      <ProducSubtTitle>{product.name}</ProducSubtTitle>
                      <ProducSubtTitle>{product.quantity}</ProducSubtTitle>
                    </Stack>
                  ))}
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={() => navigate("/prn/22")}
                    endIcon={<VisibilityIcon />}
                  >
                    View PRN
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/po/create")}
                    size="large"
                    endIcon={<AddIcon />}
                  >
                    Create PO
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
