import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Container from "@mui/material/Container";

import ProductGRNForm from "../../components/ProductGRNForm";

const TitleText = styled.p`
  font-size: 44px;
  font-family: "Open Sans";
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin: 0px;
`;
const SubTitleText = styled.p`
  font-size: 20px;
  font-family: "Open Sans";
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin: 0px;
`;
export default function CreatePRN() {
  const [products, setProducts] = React.useState([
    {
      category: "",
      product: "",
      quantity: "",
      unit: "",
      productid: "product1",
    },
  ]);
  const navigate = useNavigate();
  const addNewProduct = () => {
    setProducts((product) =>
      product.concat([
        {
          category: "",
          product: "",
          quantity: "",
          unit: "",
          productid: `product${product.length + 1}`,
        },
      ])
    );
  };
  const delteProduct = (productid) => {
    const updatedProducts = products.filter(
      (product) => product.productid !== productid
    );
    setProducts([...updatedProducts]);
  };
  const selectProductValue = (productid, value, type) => {
    const updatedProducts = products.map((product) => {
      if (product.productid === productid) {
        product[type] = value;
      }
      return product;
    });
    setProducts([...updatedProducts]);
  };
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
        <TitleText>PRN</TitleText>
        <SubTitleText>
          Kindly fill the details to create a Product Requisition Note.
        </SubTitleText>
      </Stack>
      <Stack spacing={3}>
        {products &&
          products.map((product) => (
            <ProductGRNForm
              {...product}
              delteProduct={delteProduct}
              selectProductValue={selectProductValue}
            />
          ))}
      </Stack>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          variant="outlined"
          size="large"
          onClick={addNewProduct}
          endIcon={<AddIcon />}
          sx={{ maxWidth: "312px", marginTop: "20px", marginBottom: "30px" }}
        >
          Another Product
        </Button>
        <Button
          variant="contained"
          size="large"
          endIcon={<AddIcon />}
          sx={{ maxWidth: "312px" }}
        >
          Create
        </Button>
      </div>
    </Container>
  );
}
