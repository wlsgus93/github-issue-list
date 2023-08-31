import React from 'react';
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import {Card} from '../index.js'
import { getIssuesByCommentCount } from '../../common/api/githubApi.js';
import {Grid} from '../../elements'
const MainLayout = () =>{
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const perPage = 10; // 페이지당 항목 수
  // const navigate = useNavigate();    
  const banner='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100';
  const checkBanner = (idx)=>{
    if ((idx-3) % 4 === 0)
    {
      return true;
    }
  }
  useEffect(() => {
    const owner = 'facebook'; // 리포지토리 소유자 이름
    const repo = 'react';   // 리포지토리 이름

    const fetchIssues = async () => {
      setLoading(true);

      try {
        const newIssues = await getIssuesByCommentCount(owner, repo, page, perPage);
        setIssues(prevIssues => [...prevIssues,...newIssues]);
        // setIssues(prevIssues => [...prevIssues,...banner]);
        setPage(page + 1);
        console.log(newIssues)
      } catch (error) {
        console.error('에러:', error);
      }

      setLoading(false);
    };

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        fetchIssues();
      }
    });

    observer.observe(document.querySelector('.observer'));

    return () => {
      observer.disconnect();
    };
  }, [page]);
//여기서 cards.map작성

    
    return <div>
        <h1>GitHub 이슈 목록</h1>
        <Grid>
        {issues.map((data,idx) => (
          <><Card issue={data}/>
          {checkBanner(idx) && <Card is_banner banner={banner}/>}
          </>)
          )}
        </Grid>
        
        <div className="observer" style={{ marginTop: '20px' }}>
        {loading ? <p>Loading...</p> : null}
        </div>
      </div>;
}

export default MainLayout;
