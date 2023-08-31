// Organization Name / Repository Name
import React,{useState,useEffect} from 'react';
import { getIssuesByCommentCount } from '../common/api/githubApi';
import { useNavigate } from "react-router-dom";
import {Grid, Image} from "../elements/index.js";
import { useParams } from 'react-router-dom';

const Card = (props) =>{
  const issue=props.issue;
  // const is_banner=props.banner;
  console.log(props)
  // console.log(issue&&issue.user.avatar_url)
  const navigate = useNavigate();
  const goDetail = (id)=>{
    console.log(id)
        navigate(`/detail/${id}`)
    }
//작성자, 작성일, 코멘트수
  console.log(!issue && props.is_banner)
  if (!issue && props.is_banner) {
    
    return<>
      <img src={props.banner} alt=''/>
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


// Card.defaultProps = {
//   user_name: "jinhyun",
//   user_profile: '',
//   contents: "고양이네요!",
//   comment_cnt: 10,
//   insert_dt: "2021-02-27 10:00:00",
//   };
// {<Grid is_flex width="auto">
// <Image shape="circle" src='' />

// </Grid>}

// {<Grid>
//   <Image shape="rectangle" src={''} />
// </Grid>}

export default Card;
            