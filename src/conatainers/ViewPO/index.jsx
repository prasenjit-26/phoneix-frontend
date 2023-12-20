import React from "react";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import Container from "@mui/material/Container";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

import POSupplierForm from "../../components/POSupplierForm";
import InfoComponent from "../../components/InfoComponent";

export default function CreatePO() {
  const [isDisabled, setDisabled] = React.useState(true);
  const [suppliers, setSuppliers] = React.useState([
    {
      id: "supplier1",
      selectedSupplierId: "Supplier-2",
      products: [
        {
          selectedProductId: "product-1",
          name: "",
          id: "product1",
          quantityRequestd: "8",
          quantityTimeLine: [
            {
              quantityId: 1,
              quantity: "3",
              unit: "ton",
              deliveryDate: dayjs(new Date()),
            },
            {
              quantityId: 2,
              quantity: "5",
              unit: "ton",
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
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "40px" }}>
      <InfoComponent
        title="PO"
        backRedirectLink="/store"
        subtitle="Kindly fill the details to update a Product Order."
        showBackButton
      />
      <Stack spacing={3}>
        {suppliers &&
          suppliers.map((supplier) => (
            <POSupplierForm
              {...supplier}
              isDisabled={isDisabled}
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
          disabled={isDisabled || false}
          sx={{ maxWidth: "312px", marginTop: "20px", marginBottom: "30px" }}
        >
          Another Supplier
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
