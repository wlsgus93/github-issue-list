// MainLayout.js

import React, { useEffect, useState, useRef } from 'react';
import { Card } from '../index.js';
import { getIssuesByCommentCount } from '../../common/api/githubApi.js';
import { Grid } from '../../elements';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
const MainLayout = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const perPage = 10;
  const myRef = useRef();
  const navigate=useNavigate();

  const banner =
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100';

  const checkBanner = (idx) => {
    return (idx - 3) % 4 === 0;
  };

  useEffect(() => {
    const owner = 'facebook'; // GitHub 리포지토리 소유자 이름
    const repo = 'react'; // 리포지토리 이름

    const fetchIssues = async () => {
      setLoading(true);

      try {
        const newIssues = await getIssuesByCommentCount(owner, repo, page, perPage);
        setIssues((prevIssues) => [...prevIssues, ...newIssues]);
        setPage(page + 1);
      } catch (error) {
        navigate("/error");
        console.error('에러:', error);
      }

      setLoading(false);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchIssues();
      }
    });

    observer.observe(myRef.current);

    return () => {
      observer.disconnect();
    };
  }, [page]);

  return (
    <>
      <Title>GitHub 이슈 목록</Title>
      <Grid>
        {issues.map((data, idx) => (
          <div key={data.id}>
            <Card issue={data} />
            {checkBanner(idx) && <Card is_banner banner={banner} />}
          </div>
        ))}
      </Grid>

      <div ref={myRef} style={{ marginTop: '20px' }}>
        {loading ? <p>Loading...</p> : null}
      </div>
    </>
  );
};

const Title = styled.h1`
  text-align: center;
`;

export default MainLayout;
