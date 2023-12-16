import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import IconButton from "@mui/material/IconButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Container from "@mui/material/Container";

import POSupplierForm from "../../components/POSupplierForm";

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
export default function CreatePO() {
  const [suppliers, setSuppliers] = React.useState([
    {
      id: "supplier1",
      selectedSupplierId: "",
      products: [
        {
          selectedProductId: "",
          name: "",
          id: "product1",
          quantityRequestd: "",
          quantityTimeLine: [
            {
              quantityId: 1,
              quantity: "0",
              unit: "",
              deliveryDate: dayjs(new Date()),
            },
          ],
        },
      ],
    },
  ]);
  const navigate = useNavigate();
  const addNewSupplier = () => {
    setSuppliers((supplier) =>
      supplier.concat([
        {
          id: `supplier${supplier.length + 1}`,
          selectedSupplierId: "",
          products: [
            {
              selectedProductId: "",
              name: "",
              quantityRequestd: "",
              quantityTimeLine: [
                {
                  quantityId: 1,
                  quantity: "0",
                  unit: "",
                  deliveryDate: dayjs(new Date()),
                },
              ],
            },
          ],
        },
      ])
    );
  };
  const delteSupplier = (supplierid) => {
    const updatedSuppliers = suppliers.filter(
      (supplier) => supplier.id !== supplierid
    );
    setSuppliers([...updatedSuppliers]);
  };
  const updateSupplierData = (id, selectedSupplier, productsData) => {
    const updatedSupplierData = suppliers.map((supplier) => {
      if (supplier.id === id) {
        if (selectedSupplier) {
          supplier.selectedSupplierId = selectedSupplier.id;
        }
        if (productsData) {
          supplier.products.map((product) => {
            if (product.id === productsData.id) {
              product.selectedProductId = productsData.selectedProductId;
              product.name = productsData.name;
              product.quantityRequestd = productsData.quantityRequestd;
              product.quantityTimeLine = productsData.quantityTimeLine;
            }
            return product;
          });
        }
      }
      return supplier;
    });
    setSuppliers([...updatedSupplierData]);
  };
  const deleteProduct = (supplierid, productid) => {
    const updatedSupplier = suppliers.map((supplier) => {
      if (supplier.id === supplierid) {
        const updatedProducts = supplier.products.filter(
          (product) => product.id !== productid
        );
        supplier.products = updatedProducts;
      }
      return supplier;
    });
    setSuppliers([...updatedSupplier]);
  };
  const addProduct = (supplierid) => {
    const updatedSupplier = suppliers.map((supplier) => {
      if (supplier.id === supplierid) {
        supplier.products = supplier.products.concat([
          {
            selectedProductId: "",
            name: "",
            id: `product${supplier.products.length + 1}`,
            quantityRequestd: "",
            quantityTimeLine: [
              {
                quantityId: 1,
                quantity: "0",
                unit: "",
                deliveryDate: dayjs(new Date()),
              },
            ],
          },
        ]);
      }
      return supplier;
    });
    setSuppliers([...updatedSupplier]);
  };
  console.log('s', suppliers)
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
        <TitleText>PO</TitleText>
        <SubTitleText>
          Kindly fill the details to create a Product Order.
        </SubTitleText>
      </Stack>
      <Stack spacing={3}>
        {suppliers &&
          suppliers.map((supplier) => (
            <POSupplierForm
              {...supplier}
              delteSupplier={delteSupplier}
              delteProduct={deleteProduct}
              addProduct={addProduct}
              updateSupplierData={updateSupplierData}
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
          onClick={addNewSupplier}
          endIcon={<AddIcon />}
          sx={{ maxWidth: "312px", marginTop: "20px", marginBottom: "30px" }}
        >
          Another Supplier
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
