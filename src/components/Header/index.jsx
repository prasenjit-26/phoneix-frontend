import React from "react";
import Container from "@mui/material/Container";
import headerLogo from "../../assets/images/headerLogo.png";

export default function Header() {
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "20px", marginTop: '20px' }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img src={headerLogo} alt="Phoneix" width="160px" />
      </div>
    </Container>
  );
}
