import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Header} from '../index'
import { getIssueContent } from '../../common/api/githubApi';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {Card} from '../index.js'
import { styled } from 'styled-components';

const DetailLayout = () =>{
  const navigate = useNavigate();
  let issueId = Number(useParams().id);
  console.log('Detaillayout render')
  console.log(issueId)
  const [issue,setIssue]=useState(undefined);
  
  useEffect(() => {
  getIssueContent('facebook','react',issueId)
  .then(issue => {
    if (issue) {
      console.log('check1')
      // console.log('Issue Content:', issue.body);
      setIssue(issue)
      console.log(issue)
    } else {
      navigate("/error");
      console.log('Issue not found.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }, [issueId]);

  if (!issue) {
    return <p>Loading...</p>;
  }
    return <Container>
      <Card img issue={issue}></Card>
      <h1>Markdown Rendering</h1>
      <ReactMarkdown>{issue.body}</ReactMarkdown>

    </Container>;
}
const Container=styled.div`
  width:800px;
  margin: 0 auto;
  
`

export default DetailLayout;
