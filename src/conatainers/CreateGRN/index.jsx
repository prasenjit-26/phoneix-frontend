import React from "react";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { styled as muiStyled } from "@mui/material/styles";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import Container from "@mui/material/Container";

import ProductGRNForm from "../../components/ProductGRNForm";
import InfoComponent from "../../components/InfoComponent";

const VisuallyHiddenInput = muiStyled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export default function CreateGRN() {
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
        title="GRN"
        subtitle="Kindly fill the details to create a GRN."
        showBackButton
        backRedirectLink="/store"
      />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Button
            component="label"
            variant="outlined"
            fullWidth
            endIcon={<CameraAltOutlinedIcon />}
          >
            Upload Invoice
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Button
            component="label"
            variant="outlined"
            fullWidth
            endIcon={<CameraAltOutlinedIcon />}
          >
            Upload Goods Received
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <FormControl fullWidth sx={{ maxWidth: "452px" }}>
            <InputLabel id="demo-simple-select-label">
              Choose Supplier
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={category}
              label="Choose Supplier"
              // onChange={handleSelectCategory}
            >
              <MenuItem value={10}>Create PRN</MenuItem>
              <MenuItem value={20}>View PRNs</MenuItem>
              <MenuItem value={30}>View POs</MenuItem>
              <MenuItem value={40}>Create GRN</MenuItem>
              <MenuItem value={50}>View GRNs</MenuItem>
              <MenuItem value={60}>View GIIRs</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Stack spacing={3} sx={{ marginTop: "20px" }}>
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
