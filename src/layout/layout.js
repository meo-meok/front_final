import React, { useState } from "react";
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
const Body = styled.div`
display:flex;
flex-direction:row;
`;
const Layout = () => {
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIShown2] = useState(false);
    const ReviewClick = event =>{
        setIsShown(true);
        setIShown2(false);
    }
    const PlaceClick =event =>{
        setIShown2(true);
        setIsShown(false);
    }
    return (
        <Container>
            <Header ReviewClick={ReviewClick} PlaceClick={PlaceClick} />
            <Body>
                <MapArea />
                {isShown && <Place_list />}
                {isShown2 && <Review />}
                
            </Body>
        </Container>
    )
}
export default Layout