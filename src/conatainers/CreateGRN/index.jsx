import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { styled as muiStyled } from "@mui/material/styles";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
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
        <TitleText>GRN</TitleText>
        <SubTitleText>Kindly fill the details to create a GRN.</SubTitleText>
      </Stack>
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
