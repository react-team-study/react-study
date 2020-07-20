import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: black;
      &:hover {
        background: white;
        color: black;
      }
    `};

  & + button {
    margin-left: 1rem;
  }
`;

const CustomInput = styled("input")`
  background: gray;
`;

// const StyledLink = styled(Link)``;

const StyledComponent = () => (
  <Box color="black">
    <Button>Hello</Button>
    <Button inverted={true}>only Border</Button>
    <CustomInput></CustomInput>
  </Box>
);

export default StyledComponent;
