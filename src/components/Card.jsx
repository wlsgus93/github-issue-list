// Organization Name / Repository Name
import React from 'react';
import { useNavigate } from "react-router-dom";
import {Grid, Image} from "../elements/index.js";
import { styled } from 'styled-components';

const Card = (props) =>{
  const issue=props.issue;

  const handleClick = () => {
    // 클릭 시 URL로 이동
    window.location.href = 'https://www.wanted.co.kr/';
  };
  const navigate = useNavigate();
  const goDetail = (id)=>{
    console.log(id)
        navigate(`/detail/${id}`)
    }
//작성자, 작성일, 코멘트수
  // console.log(!issue && props.is_banner)
  if (!issue && props.is_banner) {
    
    return<>
      <AspectOutter>
        <Banner onClick={handleClick} src={props.banner} ></Banner>
      </AspectOutter>
      </>}

  
  if (!issue) {
    return <p>Loading...</p>;}
  if(!(props.img))  {return <React.Fragment>
        <Grid onClick={()=>{
          goDetail(issue.number);
          }} $is_flex $margin={'0 auto'} width='800px' $padding='20px' $underline={"true"} >
          <Grid >
            <Grid>
              <span>#{issue.number} {issue.title}</span>
            </Grid>
            <Grid>
              <span>작성자: {issue.user.login} 작성일: {issue.created_at}</span>
            </Grid>
          </Grid>
          <Grid bg="white">
            <span>코멘트 : {issue.comments}</span>
          </Grid>
        </Grid>
      </React.Fragment>}
  else{return<React.Fragment>
    <Grid onClick={()=>{
      goDetail(issue.number);
      console.log('check click');}} $is_flex $margin={'10px'} $padding='10px' $underline={"true"} >
      <Image width='800px' src={issue.user.avatar_url}/>
      <Grid >
        <Grid>
          <span>#{issue.number} {issue.title}</span>
        </Grid>
        <Grid>
          <span>작성자: {issue.user.login} 작성일: {issue.created_at}</span>
        </Grid>
      </Grid>
      <Grid bg="white">
        <span>코멘트 : {issue.comments}</span>
      </Grid>
    </Grid>
  </React.Fragment>}

  }


const Banner=styled.div`
  background-image: url("${(props) => props.src}");
  width: 400px;
  background-repeat: no-repeat;
  height: 100px;
  background-size: contain;
  margin: 0 auto;
  
`
const AspectOutter = styled.div`
  width: 800px;
  min-width: 250px;
  margin: 0 auto;
  border-bottom: grey  solid;
`;

export default Card;
            