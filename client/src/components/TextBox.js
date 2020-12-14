import React from "react";
import styled from "styled-components";

export default function TextBox(props) {
  return (
    <StyledBox
      bordercolor={props.bordercolor}
      color={props.color}
      isActive={props.isActive}
    >
      {props.text}
    </StyledBox>
  );
}

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 5px;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.bordercolor};

  background-color: ${(props) => props.color || "var(--primary-gray)"};
  box-shadow: inset 0 0 4px ${(props) => props.bordercolor};
`;
