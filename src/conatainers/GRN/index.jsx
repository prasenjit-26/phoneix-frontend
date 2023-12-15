import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Container from "@mui/material/Container";
import EditIcon from "@mui/icons-material/Edit";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const TitleText = styled.p`
  font-size: 44px;
  font-family: "Open Sans";
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin: 0px;
`;
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
const SubTitleText = styled.p`
  font-size: 20px;
  font-family: "Open Sans";
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
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
const grns = [
  {
    id: "12122",
    supplier: {
      id: "dad",
      name: "Supplier-1",
    },
    products: [
      {
        name: "CP",
        date: "23-Dec-2023",
        quantity: "5 Ton",
      },
      {
        name: "CPP",
        date: "27-Dec-2023",
        quantity: "8 Ton",
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
        date: "23-Dec-2023",
        quantity: "5 Ton",
      },
      {
        name: "CPP",
        date: "27-Dec-2023",
        quantity: "8 Ton",
      },
    ],
  },
];
export default function PRN() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "40px" }}>
      <Stack spacing={1} sx={{ marginBottom: "40px" }}>
        <div>
          <IconButton
            onClick={() => navigate("/")}
            sx={{ width: "fit-content", marginBottom: "30px" }}
          >
            <ArrowBackOutlinedIcon />
          </IconButton>
        </div>
        <TitleText>GRN Listing</TitleText>
        <SubTitleText>The following are the registered GRNs.</SubTitleText>
      </Stack>
      <Grid container spacing={2}>
        {grns.map((product) => (
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <PRNContainer>
              <Stack direction="row" spacing={4}>
                <img
                  src="https://placehold.co/240x343"
                  alt="placeholder"
                  style={{ borderRadius: "8px" }}
                />
                <Stack direction="column" spacing={2} width="100%">
                  <ProductTitle>{product.supplier.name}</ProductTitle>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Stack direction="column" spacing={2} width="100%">
                        {product.products.map((product) => (
                          <ProductTitle style={{ fontSize: "18px" }}>
                            {product.name}
                          </ProductTitle>
                        ))}
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Stack direction="column" spacing={2} width="100%">
                        {product.products.map((product) => (
                          <ProducSubtTitle style={{ fontSize: "18px" }}>
                            Qty Rcd: {product.quantity}
                          </ProducSubtTitle>
                        ))}
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
                  <Stack direction="row" spacing={2} fullWidth>
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      fullWidth
                      endIcon={<EditIcon />}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      color="secondary"
                      endIcon={<VisibilityIcon />}
                    >
                      View
                    </Button>
                  </Stack>
                  <Button
                    variant="contained"
                    size="large"
                    disabled
                    endIcon={<NotificationsActiveIcon />}
                  >
                    Pending GIIR Creation
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
