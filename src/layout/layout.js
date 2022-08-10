import React, { useState } from "react";
import styled from "styled-components";
import Googlebutton from "../Components/GoogleButton";
import Header from "./header";
import MapArea from "./MapArea";
import PlaceList from "./place_list";
import Review from "./review";

const Container = styled.div`
padding:0;
display:flex;
flex-direction:column;
`;

const Body = styled.div`
display:flex;
flex-direction:row;
`;

const Layout = () => {
    const Tabs={0:null,1:<PlaceList />,2:<Review />}
    const [activeTab,setActiveTab]=useState(0);
   
    return (
        <Container>
            <Header setActiveTab={setActiveTab} />
            <Body>
                <MapArea />
                {Tabs[activeTab]}                
            </Body>
        </Container>
    )
}
export default Layout