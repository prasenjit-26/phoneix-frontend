import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { styled as muiStyled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

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
const categories = [
  {
    id: "category-1",
    name: "Category 1",
  },
  {
    id: "category-2",
    name: "Category 2",
  },
  {
    id: "category-3",
    name: "Category 3",
  },
  {
    id: "category-4",
    name: "Category 4",
  },
];
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
export default function ProductPRNForm({
  category,
  product,
  quantity,
  unit,
  productid,
  delteProduct,
  selectProductValue,
  isDisabled,
}) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleSelectCategory = (event) => {
    selectProductValue(productid, event.target.value, "category");
  };
  const handleSelectProduct = (event) => {
    selectProductValue(productid, event.target.value, "product");
  };
  const handleSelectUnit = (event) => {
    selectProductValue(productid, event.target.value, "unit");
  };
  const handleQuantity = (event) => {
    selectProductValue(productid, event.target.value, "quantity");
  };
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        Product - 1
        {!isDisabled && (
          <IconButton
            sx={{ width: "fit-content" }}
            onClick={() => delteProduct(productid)}
          >
            <DeleteIcon sx={{ color: "#f1f1f1" }} />
          </IconButton>
        )}
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <FormControl fullWidth sx={{ maxWidth: "452px" }}>
              <InputLabel id="demo-simple-select-label">
                Choose Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                disabled={isDisabled || false}
                label="Choose Category"
                onChange={handleSelectCategory}
              >
                {categories.map((category) => (
                  <MenuItem value={category.id}>{category.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <FormControl fullWidth sx={{ maxWidth: "452px" }}>
              <InputLabel id="demo-simple-select-label">Product</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={product}
                disabled={isDisabled || false}
                label="Product"
                onChange={handleSelectProduct}
              >
                {products.map((product) => (
                  <MenuItem value={product.id}>{product.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <TextField
              id="quantity"
              label="Product Quantity"
              variant="outlined"
              fullWidth
              value={quantity}
              disabled={isDisabled || false}
              onChange={handleQuantity}
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
                        value={unit}
                        defaultValue="kg"
                        label="Product"
                        disabled={isDisabled || false}
                        onChange={handleSelectUnit}
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
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
