import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import InputLabel from "@mui/material/InputLabel";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
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
const InfoText = styled.p`
  margin: 0px;
  color: var(--success, #24b73c);
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const products = [
  {
    id: "product-1",
    name: "Product - 1",
    quantityRequestd: 8,
  },
  {
    id: "product-3",
    name: "Product - 3",
    quantityRequestd: 6,
  },
  {
    id: "product-2",
    name: "Product - 2",
    quantityRequestd: 2,
  },
  {
    id: "product-4",
    name: "Product - 4",
    quantityRequestd: 8,
  },
];
export default function ProductGRNForm({ id, onDeletProduct, updateProductsData }) {
  const [expanded, setExpanded] = React.useState("panel1");
  const [selectedProduct, setSelectedProduct] = React.useState(products[0]);
  const [quantityDetails, setQuantityDetails] = React.useState([
    {
      quantityId: 1,
      quantity: "0",
      unit: "",
      deliveryDate: dayjs(new Date()),
    },
  ]);
  const splitProductQuantity = () => {
    setQuantityDetails((quantaties) =>
      quantaties.concat([
        {
          quantityId: quantaties.length + 1,
          quantity: "0",
          unit: "",
          deliveryDate: dayjs(new Date()),
        },
      ])
    );
  };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const updateProductInParent = () => {
    const productData = {
      id,
      selectedProductId: selectedProduct.id,
      name: selectedProduct.name,
      quantityRequestd: selectedProduct.quantityRequestd,
      quantityTimeLine: quantityDetails,
    };
    updateProductsData(productData);
  };
  const handleSelectProduct = (event) => {
    const product = products.find(
      (product) => product.id === event.target.value
    );
    setSelectedProduct(product);
    updateProductInParent();
  };
  const handleSelectUnit = (event, quantityId) => {
    const updatedQuantities = quantityDetails.map((quantity) => {
      if (quantity.quantityId === quantityId) {
        quantity.unit = event.target.value;
      }
      return quantity;
    });
    setQuantityDetails([...updatedQuantities]);
    updateProductInParent();
  };
  const handleQuantity = (event, quantityId) => {
    const updatedQuantities = quantityDetails.map((quantity) => {
      if (quantity.quantityId === quantityId) {
        quantity.quantity = event.target.value;
      }
      return quantity;
    });
    setQuantityDetails([...updatedQuantities]);
    updateProductInParent();
  };
  const deleteQuantity = (quantityid) => {
    const quantities = quantityDetails.filter(
      (quantity) => quantity.quantityId !== quantityid
    );
    setQuantityDetails([...quantities]);
    updateProductInParent();
  };
  const totalQuantityRequest = quantityDetails.reduce((accumulator, object) => {
    return accumulator + parseFloat(object.quantity);
  }, 0);
  let color = "#FF852D";
  let text = "PO Quantity less than PRN";
  if (
    parseFloat(totalQuantityRequest) >
    parseFloat(selectedProduct.quantityRequestd)
  ) {
    color = "#D34836";
    text = "PO Quantity more than PRN";
  } else if (
    parseFloat(totalQuantityRequest) ===
    parseFloat(selectedProduct.quantityRequestd)
  ) {
    color = "#24B73C";
    text = "PO Quantity matches PRN";
  }
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        Product - 1
        <Stack direction="row" spacing={2}>
          <Button
            onClick={splitProductQuantity}
            startIcon={<AddIcon />}
            variant="text"
            sx={{ color: "#fff" }}
          >
            Split
          </Button>
          <IconButton
            sx={{ width: "fit-content" }}
            onClick={() => onDeletProduct(id)}
          >
            <DeleteIcon sx={{ color: "#f1f1f1" }} />
          </IconButton>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Product</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedProduct.id}
                label="Product"
                onChange={handleSelectProduct}
              >
                {products.map((product) => (
                  <MenuItem value={product.id}>{product.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={8}>
            <Stack direction="row" alignItems="center">
              <InfoText>
                <span style={{ color: color }}>{totalQuantityRequest}</span>
                <span style={{ color: "#333" }}>
                  /{selectedProduct.quantityRequestd}
                </span>
              </InfoText>
              <InfoIcon
                sx={{ marginLeft: "10px", marginRight: "5px", color: color }}
              />
              <InfoText
                style={{ fontSize: "16px", fontWeight: "300", color: color }}
              >
                {text}
              </InfoText>
            </Stack>
          </Grid>
        </Grid>
        {quantityDetails &&
          quantityDetails.map((quantity, index) => (
            <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <TextField
                  id="quantity"
                  label="Product Quantity"
                  variant="outlined"
                  fullWidth
                  value={quantity.quantity}
                  onChange={(event) =>
                    handleQuantity(event, quantity.quantityId)
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <FormControl
                          variant="standard"
                          fullWidth
                          sx={{
                            minWidth: "50px",
                            borderLeft: "1px solid",
                            paddingLeft: "20px",
                          }}
                        >
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={quantity.unit}
                            defaultValue="kg"
                            label="Product"
                            onChange={(event) =>
                              handleSelectUnit(event, quantity.quantityId)
                            }
                          >
                            <MenuItem value="kg">Kg</MenuItem>
                            <MenuItem value="ton">Ton</MenuItem>
                          </Select>
                        </FormControl>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{ width: "100%" }}
                      label="Delivery Date"
                      value={quantity.deliveryDate}
                      // onChange={(newValue) => setValue(newValue)}
                    />
                    {index > 0 && (
                      <IconButton
                        onClick={() => deleteQuantity(quantity.quantityId)}
                      >
                        <DeleteOutlineOutlinedIcon sx={{ color: "#D34836" }} />
                      </IconButton>
                    )}
                  </LocalizationProvider>
                </Stack>
              </Grid>
            </Grid>
          ))}
      </AccordionDetails>
    </Accordion>
  );
}
