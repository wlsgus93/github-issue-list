// Organization Name / Repository Name
import React, { useEffect,useState } from 'react';
import { getRepositoryInfo,getOrganizationInfo } from '../common/api/githubApi';

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

    return <div>
      {/* <h2>{`${orgInfo} / ${repoInfo}`}</h2> */}
      <h2>Facebook / React</h2>
    </div>;
}

export default React.memo(Header);
