import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import InfoComponent from "../../components/InfoComponent";

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
const pos = [
  {
    id: "12122",
    supplier: {
      id: "dad",
      name: "Supplier-1",
    },
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
    supplier: {
      id: "dad",
      name: "Supplier-1",
    },
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
    supplier: {
      id: "dad",
      name: "Supplier-1",
    },
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
    supplier: {
      id: "dad",
      name: "Supplier-1",
    },
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
    supplier: {
      id: "dad",
      name: "Supplier-1",
    },
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
export default function PRN() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "40px" }}>
      <InfoComponent
        title="PO Listing"
        subtitle="The following are the registered Purchase Orders."
        showBackButton
        backRedirectLink="/store"
      />
      <Grid container spacing={2}>
        {pos.map((product) => (
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <PRNContainer>
              <Stack direction="row" spacing={4}>
                <img
                  src="https://placehold.co/240x343"
                  alt="placeholder"
                  style={{ borderRadius: "8px" }}
                />
                <Stack direction="column" spacing={2} width="100%">
                  <ProductTitle>Purchase Order #{product.id}</ProductTitle>
                  <ProducSubtTitle style={{ fontSize: "24px" }}>
                    {product.supplier.name}
                  </ProducSubtTitle>
                  <Stack direction="row" justifyContent="space-between">
                    <ProductTitle style={{ fontSize: "18px" }}>
                      Product
                    </ProductTitle>
                    <ProductTitle style={{ fontSize: "18px" }}>
                      Qty Requested
                    </ProductTitle>
                    <ProductTitle style={{ fontSize: "18px" }}>
                      Delivery Date
                    </ProductTitle>
                  </Stack>
                  {product.products.map((product) => (
                    <Stack direction="row" justifyContent="space-between">
                      <ProducSubtTitle>{product.name}</ProducSubtTitle>
                      <ProducSubtTitle>{product.quantity}</ProducSubtTitle>
                      <ProducSubtTitle>{product.date}</ProducSubtTitle>
                    </Stack>
                  ))}
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/po/12")}
                    color="secondary"
                    endIcon={<VisibilityIcon />}
                  >
                    View PO
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    endIcon={<NotificationsActiveIcon />}
                  >
                    Send Reminder
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
