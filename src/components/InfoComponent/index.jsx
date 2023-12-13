import React from "react";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import logoImg from "../../assets/images/phoenix-group.png";

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

export default function InfoComponent({ title, subtitle, showBackButton }) {
  const navigate = useNavigate();
  return (
    <Stack spacing={1} sx={{ marginBottom: "40px" }}>
      {showBackButton && (
        <div>
          <IconButton
            onClick={() => navigate("/")}
            sx={{ width: "fit-content", marginBottom: "30px" }}
          >
            <ArrowBackOutlinedIcon />
          </IconButton>
        </div>
      )}
      <img
        src={logoImg}
        alt="Login"
        width="100%"
        style={{ maxWidth: "400px", marginBottom: "20px" }}
      />
      <TitleText>{title}</TitleText>
      <SubTitleText>{subtitle}</SubTitleText>
    </Stack>
  );
}
