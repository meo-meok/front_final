// import React, { useState } from "react";
import styled from "styled-components";
// import Place_list from "./place_list";
// import Review from "./review";

import Googlebutton from "../Components/GoogleButton";

const Head = styled.div`
width: 100vw;
height: 13vh;
background: #D9D9D9;
paddings:0px 10px 0px 10px;
flex-direction:row;
display:flex;
text-align:center;
align-items:center;
border:1px solid black;
box-sizing:border-box;
`;
const Logo = styled.div`
width:9.740vw;
`;
const Search = styled.div`
width:41.073vw;
margin-right:24.063vw;
border-bottom: 1px solid #000;
flex-direction:row;
display:flex;
`;
const Image = styled.div`
width:4vw;
height:6vh;
`;
const SearchBar = styled.input`
background-color:transparent;
border: none;
width:100%;
height:3.490vh;
padding:10px 10px;
font-size:16px;
`;
const Tab = styled.button`
font-size: 20px;
border: none;
outline: none;
cursor: pointer;
padding: 14px 16px;
transition: 0.3s;
background-color:transparent;
&:hover{  
    font-weight:bold;
  }

`;

const Header = ({setActiveTab}) => {
    const onClick = (event) => {
        if (event.target.name === "list"){
            setActiveTab(1);
        }
        else if (event.target.name === "review") {
            setActiveTab(2);
        }
    }
    return (
        <Head>
            <Logo>MeoMeok</Logo>
            <Search>
                <Image>

                    <img src="imgs/search.png" alt=""/>
                </Image>
                <SearchBar type="text" name="search" onChange="" placeholder="지역/ 가게명/ 메뉴 등으로 검색해주세요."/>
            </Search>
            <Tab name="list" onClick={onClick}>맛집리스트</Tab>
            <Tab name="review" onClick={onClick}>리뷰쓰기</Tab>

            <Googlebutton/>
        </Head>
    )
}
export default Header