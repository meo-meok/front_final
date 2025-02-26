import React, { useState } from "react";
import styled from "styled-components";
import Googlebutton from "../Components/GoogleButton";

const Head = styled.div`
width: 100%;
height: 9vh;
background: #000055;
paddings:0px 10px 0px 10px;
flex-direction:row;
display:flex;
text-align:center;
align-items:center;
border:1px solid black;
box-sizing:border-box;
`;
const Logo = styled.button`
width:9.740vw;
border:none;
background-color:transparent;
cursor:pointer;
font-size:20px;
`;
const Search = styled.div`
width:30vw;
height:5vh;
margin-right:45vw;
border: 1px solid #000;
border-radius:4px;
flex-direction:row;
display:flex;
background-color:white;
@media screen and (max-width: 1400px) {
    margin-right:39vw;
    }
`;
const ImageContainer = styled.div`
width:3.8vw;
`;
const HomeImage = styled.img`
width:70%;
`;
const SearchImage = styled.img`
width:2rem;
@media screen and (max-width: 1600px) {
    width:1.5rem;
    }
`;
const SearchBtn = styled.button`
background-color:transparent;
border:none;
cursor:pointer;
margin-top:0.3rem;
&:focus{
    outline:none;
}
`;
const SearchBar = styled.input`
background-color:transparent;
border:none;
border-right: 1px solid #000;
width:100%;
padding:10px 10px;
font-size:16px;
&:focus{
    outline:none;
}
@media screen and (max-width: 1400px) {
    font-size:14px;
    height:3.2vh;
    }
`;
const Tab = styled.button`
font-size: 16px;
height:2.5rem;
color:white;
border: 1px solid white;
border-radius: 10px;
outline: none;
cursor: pointer;
transition: 0.3s;
background-color:transparent;
margin-right:1rem;
&:hover{  
    font-weight:bold;
  }
@media screen and (max-width: 1400px) {
    font-size:14px;
    
    }
`;

const Header = ({setActiveTab,setActiveMap, setKeyword,setIsShowPlaceDetail}) => {
    const [keywordInput, setKeywordInput] = useState('')
    const onClick = (event) => {
        if (event.target.name === "list"){
            setActiveTab(1);
            setActiveMap(1);
        }
    }
    const handleOnkeyPress = (event) => {
        if (event.key === 'Enter'){
            setKeyword(keywordInput);
            setActiveTab(2);
            setActiveMap(2);
            setIsShowPlaceDetail(false);
        }
    }
    const handleKeywordInput = (event) => {
        setKeywordInput(event.target.value)
    }
    const handleKeywordSubmit = (event) => {  
        event.preventDefault(); 
        setKeyword(keywordInput)
        setActiveTab(2);
        setActiveMap(2);
        setIsShowPlaceDetail(false);

    }
    const HomeClick = () =>{
         window.location.reload();
    }
    return (
        <Head>
            <Logo onClick={HomeClick}><HomeImage src="imgs/meomeokz_logo_dark.png" /></Logo>
            <Search>
                <SearchBar type="text" name="search" onChange={handleKeywordInput} onKeyPress={handleOnkeyPress} placeholder="지역/ 가게명/ 메뉴 등으로 검색해주세요."/>
                <ImageContainer>
                    <SearchBtn onClick={handleKeywordSubmit}>
                        <SearchImage src="imgs/search_logo.png" alt=""/>
                    </SearchBtn>
                </ImageContainer>
            </Search>
            <Tab name="list" onClick={onClick}>맛집리스트</Tab>

            <Googlebutton/>
        </Head>
    )
}
export default Header