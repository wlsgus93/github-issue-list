// Organization Name / Repository Name
import React, { useEffect,useState } from 'react';
import { getRepositoryInfo,getOrganizationInfo } from '../common/api/githubApi';
import { styled } from 'styled-components';

const Header = () =>{
  const [repoInfo, setRepoInfo] = useState({});
  const [orgInfo, setOrgInfo] = useState({});

  useEffect(() => {
    // 리포지토리 정보 가져오기
    console.log('Header render')
    getRepositoryInfo('facebook', 'react')
      .then(response => {
        setRepoInfo(response.name);
        // console.log(response)
      })
      .catch(error => {
        console.error('리포지토리 에러:', error);
      });

    // 조직 정보 가져오기
    getOrganizationInfo('facebook')
      .then(response => {
        setOrgInfo(response.name);
        // console.log(response)
      })
      .catch(error => {
        console.error('조직 에러:', error);
      });
  }, []);

    return <>
      {/* <h2>{`${orgInfo} / ${repoInfo}`}</h2> */}
      <Title>Facebook / React</Title>
      </>

}
const Title=styled.h1`
  text-align: center;
`
export default React.memo(Header);
