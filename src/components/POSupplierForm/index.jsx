import React from "react";
import { styled as muiStyled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

import ProductPOForm from "../../components/ProductPOForm";
import { Stack } from "@mui/material";

const Accordion = muiStyled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = muiStyled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#4282BF",
  borderRadius: "8px 8px 0px 0px",
  color: "#F1F1F1",
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(270deg)",
    color: "#F1F1F1 !important",
  },

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    color: "#F1F1F1 !important",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const AccordionDetails = muiStyled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid #4282BF",
  borderRadius: "0px 0px 8px 8px",
}));
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
export default function POSupplierForm({
  id,
  products,
  delteSupplier,
  updateSupplierData,
  delteProduct,
  addProduct,
}) {
  const [expanded, setExpanded] = React.useState("panel1");
  const [selectedSupplier, setSelctedSupplier] = React.useState(
    supplierDetails[0]
  );
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleSelectSupplier = (event) => {
    const supplier = supplierDetails.find(
      (supplier) => supplier.id === event.target.value
    );
    setSelctedSupplier(supplier);
    updateSupplierData(id, selectedSupplier);
  };
  const updateProductsData = (productsData) => {
    updateSupplierData(id, selectedSupplier, productsData);
  };
  const onDeletProduct = (productid) => {
    delteProduct(id, productid);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        Supplier - 1
        <IconButton
          sx={{ width: "fit-content" }}
          onClick={() => delteSupplier(id)}
        >
          <DeleteIcon sx={{ color: "#f1f1f1" }} />
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Choose Supplier
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedSupplier ? selectedSupplier.id : null}
                label="Choose Category"
                onChange={handleSelectSupplier}
              >
                {supplierDetails.map((supplier) => (
                  <MenuItem value={supplier.id}>{supplier.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <TextField
              id="gstno"
              variant="outlined"
              fullWidth
              disabled
              // onChange={handleQuantity}
              label="GST Number"
              value={selectedSupplier.gst}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <TextField
              id="email"
              label="Email"
              disabled
              variant="outlined"
              fullWidth
              value={selectedSupplier.email}
              // onChange={handleQuantity}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={8}>
            <TextField
              id="address"
              label="Address"
              disabled
              variant="outlined"
              fullWidth
              value={selectedSupplier.address}
              // onChange={handleQuantity}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <TextField
              id="phone"
              label="Phone number"
              disabled
              variant="outlined"
              fullWidth
              value={selectedSupplier.phone}
              // onChange={handleQuantity}
            />
          </Grid>
        </Grid>
        <Stack spacing={2} style={{ marginTop: "30px" }}>
          {products &&
            products.map((product) => (
              <ProductPOForm
                {...product}
                onDeletProduct={onDeletProduct}
                updateProductsData={updateProductsData}
              />
            ))}
        </Stack>
        <Button
          variant="outlined"
          size="large"
          onClick={() => addProduct(id)}
          endIcon={<AddIcon />}
          sx={{ maxWidth: "312px", marginTop: "20px", marginBottom: "30px" }}
        >
          Another Product
        </Button>
      </AccordionDetails>
    </Accordion>
  );
}
