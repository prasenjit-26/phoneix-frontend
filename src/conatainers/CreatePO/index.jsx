import React from "react";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import Container from "@mui/material/Container";

import InfoComponent from "../../components/InfoComponent";
import POSupplierForm from "../../components/POSupplierForm";

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
      <InfoComponent
        title="PO"
        subtitle="Kindly fill the details to create a Product Order."
        showBackButton
      />
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
