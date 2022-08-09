import React from "react";
import styled from "styled-components";
import { useState } from "react";

const MainContainer = styled.div`
`;
const Container = styled.div`
  width: 30vw;
  height: 87vh;
  background-color: skyblue;
  float: right;
`;

const Review = (props) => {
  const { onClose } = props;
  return (
    <MainContainer>
        <Container />
    </MainContainer>

  );
};
export default Review;
