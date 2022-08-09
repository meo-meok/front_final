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
const CategoryNav = styled.div`
height:6vh;
border-bottom:1px solid black;
display:flex;
justify-content: space-between;
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

const Place_list = () => {
    const NAMES = ["한식","중식","양식","일식","디저트"]
    return (
        <MainContainer>
            <Container>
                <ListTop>
                    <ListName>맛집리스트</ListName>
                    <SelectBox />
                </ListTop>
                <CategoryNav>
                    {NAMES.map((name)=><NavButton Names={name}></NavButton>)}
                </CategoryNav>
            </Container>
        </MainContainer>
    )
}
export default Place_list
