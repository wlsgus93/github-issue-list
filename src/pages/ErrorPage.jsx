import React from 'react';
import { styled } from 'styled-components';
const ErrorPage = () =>{
  console.log('Detail render');

    return (
<>
<Title> 잘못된 경로이거나 요청이 잘 못 되었습니다.</Title>
</>
      );
}
const Title=styled.h1`
  text-align: center;
`
export default ErrorPage;
