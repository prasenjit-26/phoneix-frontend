import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./conatainers/Home";
import StorePage from "./conatainers/Store";
import CreatePRNPage from "./conatainers/CreatePRN";
import CreateGRNPage from "./conatainers/CreateGRN";
import CreatePOPage from "./conatainers/CreatePO";
import QcPage from "./conatainers/QC";
import GIIRPage from "./conatainers/GIIR";
import PRNPage from "./conatainers/PRN";
import POPage from "./conatainers/PO";
import GRNPage from "./conatainers/GRN";
import ViewGRNPage from "./conatainers/ViewGRN";
import ViewGIIRPage from "./conatainers/ViewGIIR";
import ViewPRNPage from "./conatainers/ViewPRN";
import ViewPOPage from "./conatainers/ViewPO";
import RawMaterialsPage from "./conatainers/RawMaterials";
import CreateGIIRPage from "./conatainers/CreateGIIR";
import SalesPage from "./conatainers/Sales";
import LoginPage from "./conatainers/Login";

const theme = createTheme({
  palette: {
    primary: { main: "#2E3E8C" },
    secondary: { main: "#4282BF" },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '20px 16px',
          fontSize: '16px',
          fontWeight: 500,
          height: '60px',
          borderRadius: '8px'
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "Open Sans",
      "sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/qc" element={<QcPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/prn" element={<PRNPage />} />
          <Route path="/po" element={<POPage />} />
          <Route path="/giir" element={<GIIRPage />} />
          <Route path="/grn" element={<GRNPage />} />
          <Route path="/grn" element={<GRNPage />} />
          <Route path="/rawmaterials" element={<RawMaterialsPage />} />
          <Route path="/grn/:id" element={<ViewGRNPage />} />
          <Route path="/prn/create" element={<CreatePRNPage />} />
          <Route path="/prn/:id" element={<ViewPRNPage />} />
          <Route path="/grn/create" element={<CreateGRNPage />} />
          <Route path="/po/create" element={<CreatePOPage />} />
          <Route path="/po/:id" element={<ViewPOPage />} />
          <Route path="/giir/create" element={<CreateGIIRPage />} />
          <Route path="/giir/:id" element={<ViewGIIRPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
