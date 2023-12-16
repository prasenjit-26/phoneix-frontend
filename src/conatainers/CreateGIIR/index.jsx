import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { styled as muiStyled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Container from "@mui/material/Container";

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
export default function CreateGIIR() {
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
    remarks: "",
    isApporved: true,
    isRejected: false,
  });
  const navigate = useNavigate();
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
      <Stack spacing={1} sx={{ marginBottom: "40px" }}>
        <div>
          <IconButton
            onClick={() => navigate("/")}
            sx={{ width: "fit-content", marginBottom: "30px" }}
          >
            <ArrowBackOutlinedIcon />
          </IconButton>
        </div>
        <TitleText>GIIR</TitleText>
        <SubTitleText>Kindly fill the details to create GIIR.</SubTitleText>
      </Stack>
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
            value={productData.ashValue}
            onChange={(event) => handleChange(event, "ashValue")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={12}>
          <FormControl>
            <RadioGroup
              row
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
