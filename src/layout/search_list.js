import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataSearching from "../Components/dataSearching";
import PlaceDetail from "./placeDetail";
const MainContainer = styled.div`
display:flex;
flex-direction:row;
`;
const Container = styled.div`
width:30vw;
height:91vh;
background-color:#white;
float:right;
border-left:2px solid #ddd;
box-sizing:border-box;
`;
const ListTop = styled.div`
height:13.9vh;
border-bottom:2px solid #000055;
box-sizing:border-box;
display:flex;
justify-content: space-between;
margin: 0 1.5rem;
margin-bottom:1rem;
`;
const ListName = styled.h1`
margin: auto 0;
font-size:24px;
color:#000055;
@media screen and (max-width: 1400px) {
    font-size:20px;
    }
`;
const ScrollArea = styled.div`
height:72.42vh;
overflow: auto;
text-align: justify;
::-webkit-scrollbar {
    display:none;
  }
`;
const SearchList = ({setActiveTab, keyword,setActiveMap,setKeyword, setSearchData,isShowPlaceDetail,
    setIsShowPlaceDetail,PlaceDetailInfo,setPlaceDetailInfo }) => {
    const [searchDataList, setSearchDataList] = useState('');
    var Data = [];

    useEffect(() => {
        fetch('https://jeonjin.pythonanywhere.com/restaurants/')
            .then(results => results.json())
            .then(results => {
                results.map((result) => {
                    // 검색내용과 일치하는 배열 찾기
                    let str = result.restaurant_name.replaceAll(/ /gi, "");
                    if (str.indexOf(keyword.replaceAll(/ /gi, "")) !== -1) {
                        Data.push(result);
                    }
                })
                // 데이터리스트 중복 제거

                Data = Data.filter((arr, index, callback) =>
                    index === callback.findIndex((d) => d.restaurant_id === arr.restaurant_id))

                setSearchDataList(Data)
                
            });
    }, [keyword]);
    console.log("search List : ", searchDataList)
    setSearchData(searchDataList)


    return (
        <MainContainer>
            {isShowPlaceDetail && 
                <PlaceDetail PlaceDetailInfo={PlaceDetailInfo} setIsShowPlaceDetail={setIsShowPlaceDetail} setActiveMap={setActiveMap}>
                    {setActiveMap(3)},
                    {setKeyword(PlaceDetailInfo['restaurant_name'])},
                    {setSearchData(PlaceDetailInfo)}
                </PlaceDetail>
            }
            <Container>
                <ListTop>
                    <ListName>검색 결과</ListName>
                </ListTop>
                <ScrollArea>
                    <DataSearching 
                        searchDataList={searchDataList}
                        setIsShowPlaceDetail={setIsShowPlaceDetail} 
                        setPlaceDetailInfo={setPlaceDetailInfo} />
                </ScrollArea>
            </Container>
        </MainContainer>
    );
};
export default SearchList;