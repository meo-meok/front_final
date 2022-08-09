import React from "react";
import styled from "styled-components";
import Header from "./header";
import MapArea from "./MapArea";
import Place_list from "./place_list";
import Review from "./review";

const Container = styled.div`
padding:0;
display:flex;
flex-direction:column;
`;

const Layout = () => {
    return (
        <Container>
            <Header />
            <MapArea />
            {/* <Review /> */}
        </Container>
    )
}
export default Layout