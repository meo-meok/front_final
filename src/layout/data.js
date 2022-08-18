import { useState, useEffect } from "react";
import styled from "styled-components";

const PlaceInfo = styled.div`
width:100%;
display:flex;
flex-direction:column;
border-bottom:1px solid black;
`;
const Name = styled.h1`
margin-bottom:0rem;
font-size:26px;
@media screen and (max-width: 1400px) {
    font-size:20px;
    }
`;
const Info = styled.p`
@media screen and (max-width: 1400px) {
    font-size:14px;
    }
`;
function ShowList(props){
  const list = props.searchDataList.map((datalist)=>
    <PlaceInfo key={datalist.id}>
      <Name>{datalist.restaurant_name}</Name>
      <Info>{datalist.address}</Info>
      <Info>{datalist.number}</Info>
      {/* <Info>{datalist.category}</Info> */}
    </PlaceInfo>
  )
  return(
    <div>{list}</div>
  )
}
function Data({keyword}) {
    const [data, setData] = useState("데이타")
    const [name, setName] = useState("이름"); 
    const [res,setRes] = useState("레스");
    const [searchDataList,setSearchDataList]=useState('');
    var searchData = [];
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/meomeok/restaurants/')
      .then(results=>results.json())
      .then(results=>{
        setData(results)
        setName(keyword)
        let i=0;
        results.map((result)=>{
          let str = result.restaurant_name.replaceAll(/ /gi, "");
          if(str.indexOf(keyword.replaceAll(/ /gi, ""))!==-1) {
            setRes(result);
            searchData.push(result);
          }
        })
        {
          searchData=searchData.filter((arr,index,callback)=>
            index=== callback.findIndex((d)=>d.restaurant_id === arr.restaurant_id))
            
        }
        setSearchDataList(searchData)
        // console.log(res)
      });
  }, [keyword]);
  
    return (
      
    <div>
      {searchDataList.length===0
      ? <PlaceInfo>
          <Name>{res.restaurant_name}</Name>
          <Info>{res.address}</Info>
          <Info>{res.number}</Info>
          <Info>{res.category}</Info>
        </PlaceInfo>
      : <ShowList searchDataList={searchDataList}/>
      }
      {/* {console.log(searchDataList)} */}
      {/* <ShowList searchDataList={searchDataList}/>
      <PlaceInfo>
        <Name>{res.restaurant_name}</Name>
        <Info>{res.address}</Info>
        <Info>{res.number}</Info>
        <Info>{res.category}</Info>
      </PlaceInfo> */}
    </div>
    )
}


export default Data