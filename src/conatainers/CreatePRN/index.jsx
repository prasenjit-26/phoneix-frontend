import React from "react";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import ProductPRNForm from "../../components/ProductPRNForm";
import InfoComponent from "../../components/InfoComponent";

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
      <InfoComponent
        title="PRN"
        subtitle="Kindly fill the details to create a Product Requisition Note."
        showBackButton
        backRedirectLink="/store"
      />
      <Stack spacing={3}>
        {products &&
          products.map((product) => (
            <ProductPRNForm
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
