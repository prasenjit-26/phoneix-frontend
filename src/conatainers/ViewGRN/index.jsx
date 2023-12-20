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
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

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
const supplierDetails = [
  {
    name: "Supplier - 1",
    id: "Supplier-1",
    gst: "GHMPK2892",
    phone: "7869793121",
    email: "supplier@gmail.com",
    address: "Block-17, Factory-12, Magarpatta City, Pune-406115",
  },
  {
    name: "Supplier - 2",
    id: "Supplier-2",
    gst: "GHMPK2892",
    phone: "7869793121",
    email: "supplier@gmail.com",
    address: "Block-17, Factory-12, Magarpatta City, Pune-406115",
  },
  {
    name: "Supplier - 3",
    id: "Supplier-3",
    gst: "GHMPK2892",
    phone: "7869793121",
    email: "supplier@gmail.com",
    address: "Block-17, Factory-12, Magarpatta City, Pune-406115",
  },
  {
    name: "Supplier - 4",
    id: "Supplier-4",
    gst: "GHMPK2892",
    phone: "7869793121",
    email: "supplier@gmail.com",
    address: "Block-17, Factory-12, Magarpatta City, Pune-406115",
  },
  {
    name: "Supplier - 5",
    id: "Supplier-5",
    gst: "GHMPK2892",
    phone: "7869793121",
    email: "supplier@gmail.com",
    address: "Block-17, Factory-12, Magarpatta City, Pune-406115",
  },
];
export default function ViewGRN() {
  const [isDisabled, setDisabled] = React.useState(true);
  const [products, setProducts] = React.useState([
    {
      category: "category-1",
      product: "product-1",
      quantity: "5",
      unit: "ton",
      productid: "product1",
    },
  ]);
  const [selectedSupplier, setSelctedSupplier] = React.useState(
    supplierDetails[0]
  );
  const handleSelectSupplier = (event) => {
    const supplier = supplierDetails.find(
      (supplier) => supplier.id === event.target.value
    );
    setSelctedSupplier(supplier);
  };
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
        subtitle="Update details to update a GRN."
        showBackButton
        backRedirectLink="/store"
      />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Button
            component="label"
            variant="outlined"
            fullWidth
            disabled={isDisabled}
            endIcon={<CameraAltOutlinedIcon />}
          >
            Invoice-1.jpg
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Button
            component="label"
            variant="outlined"
            fullWidth
            disabled={isDisabled}
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
              disabled={isDisabled}
              value={selectedSupplier.id}
              label="Choose Supplier"
              onChange={handleSelectSupplier}
            >
              {supplierDetails.map((supplier) => (
                <MenuItem value={supplier.id}>{supplier.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Stack spacing={3} sx={{ marginTop: "20px" }}>
        {products &&
          products.map((product) => (
            <ProductGRNForm
              {...product}
              isDisabled={isDisabled}
              delteProduct={delteProduct}
              disabled={isDisabled}
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
