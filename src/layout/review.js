import React from "react";
import styled from "styled-components";
import SelectBox from "../Components/selectBox";

const MainContainer = styled.div`
`;
const Container = styled.div`
width:30vw;
height:87vh;
background-color:#ddd;
float:right;
border:1px solid black;
box-sizing:border-box;
`;
const ListTop = styled.div`
height:14.9vh;
border-bottom:1px solid black;
display:flex;
justify-content: space-between;
padding: 0 1.5rem;
`;
const ListName = styled.h1`
margin: auto 0;
`;
const NavBtn = styled.button`
border:none;
cursor:pointer;
width:100%;
background-color:transparent;
font-size:1rem;
&:hover{  
    font-weight:bold;
    background-color:white;
  }
`;

function NavButton ({Names}){
    return(
        <NavBtn>
            {Names}
        </NavBtn>
    )
}

const Review = () => {
    return (
        <MainContainer>
            <Container>
                <ListTop>
                    <ListName>리뷰쓰기</ListName>
                </ListTop>
                
            </Container>
        </MainContainer>
    )
}
export default Review
