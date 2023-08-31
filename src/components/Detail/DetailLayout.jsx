import React, { useEffect, useState } from 'react';
import {Header} from '../index'
import { getIssueContent } from '../../common/api/githubApi';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {Card} from '../index.js'


const DetailLayout = () =>{
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
    return <div>
      <h1>DetailLayout</h1>
      <Card img issue={issue}></Card>
      <h1>Markdown Rendering</h1>
      <ReactMarkdown>{issue.body}</ReactMarkdown>

    </div>;
}

export default DetailLayout;
