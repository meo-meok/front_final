import React from "react";
import styled from "styled-components";

const Head = styled.div`
width: 100vw;
height: 13vh;
background: #D9D9D9;
paddings:0px 10px 0px 10px;
flex-direction:row;
display:flex;
text-align:center;
align-items:center;
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
const Line = styled.div`
font-size: 25px;
margin:0 0 5px 0;
`;
const LoginBtn = styled.button`
margin-left: 2vw;
width:5.104vw;
font-size:18px;
`;
// upstream test
const Header = () => {
    return (
        <Head>
            <Logo>MeoMeok</Logo>
            <Search>
                <Image>
                    <img src="imgs/search.png" />
                </Image>
                <SearchBar type="text" name="search" onChange="" placeholder="지역/ 가게명/ 메뉴 등으로 검색해주세요."/>
            </Search>
            <Tab href="">맛집리스트</Tab>
            <Line>|</Line>
            <Tab href="">리뷰쓰기</Tab>
            <LoginBtn>로그인</LoginBtn>
        </Head>
    )
}
export default Header