import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./conatainers/Home";
import StorePage from "./conatainers/Store";
import CreatePRNPage from "./conatainers/CreatePRN";
import QcPage from "./conatainers/QC";
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
          <Route path="/prn/create" element={<CreatePRNPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
