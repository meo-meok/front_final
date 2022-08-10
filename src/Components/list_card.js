import React from "react";
import styled from "styled-components";

const Card = styled.div`
height:18.7vh;
border-bottom:1px solid black;
display:flex;
padding: 0 1.5rem;
`;

function ListCard(){
    return(
        <Card><h1>리스트</h1></Card>
    )
}
export default ListCard;