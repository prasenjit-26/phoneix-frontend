import React from "react";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

import ProductPRNForm from "../../components/ProductPRNForm";
import InfoComponent from "../../components/InfoComponent";

export default function ViewPRN() {
  const [isDisabled, setDisabled] = React.useState(true);
  const [products, setProducts] = React.useState([
    {
      category: "category-1",
      product: "product-1",
      quantity: "2",
      unit: "ton",
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
        backRedirectLink="/store"
        showBackButton
        subtitle="Kindly update the details to update a Product Requisition Note."
      />
      <Stack spacing={3}>
        {products &&
          products.map((product) => (
            <ProductPRNForm
              {...product}
              isDisabled={isDisabled}
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
          disabled={isDisabled}
          endIcon={<AddIcon />}
          sx={{ maxWidth: "312px", marginTop: "20px", marginBottom: "30px" }}
        >
          Another Product
        </Button>
        {isDisabled ? (
          <Button
            variant="contained"
            size="large"
            onClick={() => setDisabled(false)}
            endIcon={<EditIcon />}
            sx={{ maxWidth: "312px" }}
          >
            Edit
          </Button>
        ) : (
          <Button
            variant="contained"
            size="large"
            onClick={() => setDisabled(true)}
            endIcon={<DoneIcon />}
            sx={{ maxWidth: "312px" }}
          >
            Update
          </Button>
        )}
      </div>
    </Container>
  );
}
