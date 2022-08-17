//import { act } from "@testing-library/react";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "./header";
import MapArea from "./MapArea";
import PlaceList from "./place_list";
import Review from "./review";
import SearchList from "./search_list";
//import Data from "./data";

const Container = styled.div`
padding:0;
display:flex;
flex-direction:column;
`;

const Body = styled.div`
display:flex;
flex-direction:row;
`;

// function Meomeok() {
//   const [data, setData] = useState(null);
//   const [name, setName] = useState(null); 
//   const [id, setId] = useState(null); 

//   // useEffect(() => {
//   //   fetch('http://127.0.0.1:8000/meomeok/restaurants/')
//   //     .then(type=>type.json())
//   //       .then(result=>{
//   //         console.log(result);
//   //         result.map((pro)=>{
//   //           if(pro.restaurant_name === "챠오") console.log(pro.restaurant_name)
//   //         })
//   //       });
//   // },[]);
//   // }

const Layout = () => {
    const Tabs={1:<PlaceList />,2:<Review />}
    const [activeTab,setActiveTab]=useState(1);
    const [keyword, setKeyword] = useState('포항시 북구 장량로 114번길 18')

    return (
        <Container>
            {/* <Data /> */}
            <Header setActiveTab={setActiveTab} setKeyword={setKeyword}/>
            <Body>
                {/* <Data keyword={keyword}/> */}
                <MapArea keyword={keyword}/>
                {activeTab===3 ?<SearchList keyword={keyword}/>:Tabs[activeTab]}
            </Body>
    
        </Container>
        //<Meomeok>1</Meomeok>
    )
}
export default Layout