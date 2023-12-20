import React from "react";
import TextField from "@mui/material/TextField";
import { styled as muiStyled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

import InfoComponent from "../../components/InfoComponent";

const StyledFormControlLabel = muiStyled((props) => (
  <FormControlLabel {...props} />
))(({ checked, color }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: color,
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
}));

export default function ViewGIIR() {
  const [isDisabled, setDisabled] = React.useState(true);
  const [productData, setProductData] = React.useState({
    invoice: "Invoice-1",
    supplier: {
      name: "Supplier-1",
      id: "supplier1",
    },
    product: {
      name: "Product-1",
      id: "product1",
    },
    purchaseOrder: {
      name: "Purchase Order -1",
      id: "po1",
      receivedQuantity: "5",
      recivedQuantityUnit: "Ton",
    },
    colorAppreance: "white",
    pH: "6",
    brix: "50",
    moistureContent: "3",
    nitrogenContent: "2",
    proteinContent: "3",
    saltContent: "3",
    ashValue: "1",
    remarks: "Handle Remarks here",
    isApporved: true,
    isRejected: false,
  });
  const handleChange = (event, title) => {
    setProductData((product) => ({ ...product, [title]: event.target.value }));
  };
  const handleRadioChange = (event) => {
    if (event.target.value === "approve") {
      setProductData((product) => ({
        ...product,
        isApporved: true,
        isRejected: false,
      }));
    } else {
      setProductData((product) => ({
        ...product,
        isApporved: false,
        isRejected: true,
      }));
    }
  };
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "40px" }}>
      <InfoComponent
        subtitle="Kindly update the details to update GIIR"
        title="GIIR"
        showBackButton
        backRedirectLink="/store"
      />
      <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            id="invoice"
            label="Invoice"
            variant="outlined"
            disabled
            fullWidth
            value={productData.invoice}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            id="supplier.name"
            label="Supplier"
            disabled
            variant="outlined"
            fullWidth
            value={productData.supplier.name}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            id="product.name"
            label="Product Name"
            disabled
            variant="outlined"
            fullWidth
            value={productData.product.name}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            id="purchaseOrder.name"
            label="Purchase Order"
            disabled
            variant="outlined"
            fullWidth
            value={productData.purchaseOrder.name}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            id="receivedQuantity"
            label="Received Quantity"
            disabled
            variant="outlined"
            fullWidth
            value={productData.purchaseOrder.receivedQuantity}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            id="colorAppreance"
            label="Colour Appearance"
            variant="outlined"
            fullWidth
            disabled={isDisabled}
            onChange={(event) => handleChange(event, "colorAppreance")}
            value={productData.colorAppreance}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            id="pH"
            label="pH"
            variant="outlined"
            fullWidth
            disabled={isDisabled}
            onChange={(event) => handleChange(event, "pH")}
            value={productData.pH}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            id="brix"
            label="Brix %"
            variant="outlined"
            fullWidth
            disabled={isDisabled}
            value={productData.brix}
            onChange={(event) => handleChange(event, "brix")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            id="moistureContent"
            label="Moisture Content"
            variant="outlined"
            fullWidth
            disabled={isDisabled}
            value={productData.moistureContent}
            onChange={(event) => handleChange(event, "moistureContent")}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            id="nitrogenContent"
            label="Nitrogen Content"
            variant="outlined"
            fullWidth
            disabled={isDisabled}
            value={productData.nitrogenContent}
            onChange={(event) => handleChange(event, "nitrogenContent")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            id="proteinContent"
            label="Protein Content"
            variant="outlined"
            fullWidth
            disabled={isDisabled}
            value={productData.proteinContent}
            onChange={(event) => handleChange(event, "proteinContent")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            id="saltContent"
            label="Salt Content"
            variant="outlined"
            fullWidth
            disabled={isDisabled}
            value={productData.saltContent}
            onChange={(event) => handleChange(event, "saltContent")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            id="ashValue"
            label="Ash Value"
            variant="outlined"
            fullWidth
            disabled={isDisabled}
            value={productData.ashValue}
            onChange={(event) => handleChange(event, "ashValue")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={12}>
          <FormControl>
            <RadioGroup
              row
              disabled={isDisabled}
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleRadioChange}
            >
              <StyledFormControlLabel
                checked={productData.isApproved}
                value="approve"
                control={
                  <Radio checked={productData.isApproved} color="success" />
                }
                label="Approved"
                color="#2e7d32"
              />
              <StyledFormControlLabel
                checked={productData.isRejected}
                control={
                  <Radio checked={productData.isRejected} color="error" />
                }
                value="reject"
                label="Rejected"
                color="#d32f2f"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={12}>
          <TextField
            id="Remarks"
            label="Remarks"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            disabled={isDisabled}
            value={productData.remarks}
          />
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
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
