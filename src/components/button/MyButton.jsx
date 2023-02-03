import React, { memo } from "react";
import styled from "styled-components";

const MyButton = ({ children, onClick }) => {
  return <StyledBtn onClick={onClick}>{children}</StyledBtn>;
};

const StyledBtn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: orange;
  padding: 5px 5px;
  color: white;
`;

export default memo(MyButton);
