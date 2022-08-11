import React,{useState} from "react";
import styled from "styled-components";
//import { ReactDOM } from "react-dom/client";

const Form = styled.form`
width:100%;
height:25vh;
`;
const TextArea = styled.textarea`
width:100%;
height:100%;
resize:none;
font-size: 16px;
border: 10px solid transparent;
box-sizing:border-box;

`;
const ReviewForm = () =>{
    const [textArea,setTextArea] =useState("");
    const handleChange = (event)=>{
        setTextArea(event.target.value);
    }
    return(
        <Form>
            <TextArea value={textArea} onChange={handleChange} placeholder="100자 이내로 리뷰를 작성해주세요."/>
        </Form>
    );
};
export default ReviewForm;