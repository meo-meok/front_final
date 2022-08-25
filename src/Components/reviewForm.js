import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React,{useState} from "react";
import styled from "styled-components";
import StarRating from "./StarRating";
const Container = styled.div`
height:12vh;
`;

const Form = styled.form`
width:100%;
height:80%;
border:1px solid black;
`;
const TextArea = styled.textarea`
width:100%;
height:100%;
resize:none;
font-size: 12px;
border: 10px solid transparent;
box-sizing:border-box;
&:focus{
    outline:none;
}
@media screen and (max-width: 1400px) {
    font-size:10px;
    }
`;
const ReviewInfo = styled.div`
justify-content:space-between;
display:flex;
flex-direction:row;
width:100%;
`;
const UserStarContainer = styled.div`
display:flex;
flex-direction:row;
`;
const UserInfo = styled.div`
font-size:12px;
`;
const TextLimit = styled.p`
font-size:12px;
`;
const SubmitContainer = styled.div`
margin-top:0.5rem;
text-align:right;
`;
const SubmitBtn = styled.button`
font-size:14px;
border-radius:5px;
border:1px solid black;
background-color:#fff;
cursor:pointer;
&:hover{
    background-color:#ddd;
}
@media screen and (max-width: 1400px) {
    font-size:12px;
    }
`;
const ReviewForm = ({PlaceDetailInfo,setActiveReview,setReviewContent}) =>{
    const [textArea,setTextArea] =useState("");
    const [rating, setRating] = useState(0);
    const handleChange = (event)=>{
        if(textArea.length<100){
            setTextArea(event.target.value);
        }else{
            event.target.value=textArea.substring(0,99);
            setTextArea(event.target.value);
        }
    }
    const SubmitClick = () => {
        // setReviewContent(textArea);
        // setActiveReview(false);
        const nowtime = new Date();
        // const krtime = new Date(nowtime + (9 * 60 * 60 * 1000));
        let param = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                        "star": rating,
                        "post_date": nowtime, // 현재 시간 입력, 그러나 UTC임 
                        "post_body": `${textArea}`,
                        "user": 1,
                        "restaurant": PlaceDetailInfo['restaurant_id'],
                }),
            }
            fetch('https://jeonjin.pythonanywhere.com/meomeok/reviews/', param)
            .then(type=>type.json())
            .then(result=>{
                console.log(result);
            });
    }
    return(
        <Container>
            <ReviewInfo>
                <UserStarContainer>
                    <UserInfo><p>👩 User12354865</p></UserInfo>
                    <StarRating rating={rating} setRating={setRating}/>
                </UserStarContainer>
                <TextLimit>{textArea.length}/100</TextLimit>
            </ReviewInfo>
            <Form>
                <TextArea value={textArea} onChange={handleChange} placeholder="100자 이내로 리뷰를 작성해주세요."/>
            </Form>
            <SubmitContainer>
                <SubmitBtn onClick={SubmitClick}>등록</SubmitBtn>
            </SubmitContainer>
        </Container>
        
    );
};
export default ReviewForm;