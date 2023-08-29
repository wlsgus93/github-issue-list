// Organization Name / Repository Name
import React,{useState,useEffect} from 'react';
import { getIssuesByCommentCount } from '../common/api/githubApi';
import { useNavigate } from "react-router-dom";
const Card = () =>{

  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const perPage = 10; // 페이지당 항목 수
  const navigate = useNavigate();    
const goDetail = (id)=>{
  console.log(id)
      navigate(`/detail/${id}`)
    }
  useEffect(() => {
    const owner = 'facebook'; // 리포지토리 소유자 이름
    const repo = 'react';   // 리포지토리 이름

    const fetchIssues = async () => {
      setLoading(true);

      try {
        const newIssues = await getIssuesByCommentCount(owner, repo, page, perPage);
        setIssues(prevIssues => [...prevIssues, ...newIssues]);
        setPage(page + 1);
        console.log(issues)
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
//작성자, 작성일, 코멘트수

    return <div>
      <h1>Card</h1>
      
      <div>
      <h1>GitHub 이슈 목록</h1>
      <ul>
        {issues.map(issue => (
          <li onClick={()=>{goDetail(issue.id)}} key={issue.id}
            issuenumber={issue.number} issuetitle={issue.title} issuewriter={issue.user.login} issueprofile={issue.user.avatar_url} issuebody={issue.body}
          >
            <strong>이슈번호: #{issue.number}:{issue.title}</strong>
            {/* <p>{issue.body}</p> */}
            <p>코멘트 수: {issue.comments}</p>
            <p>작성자: {issue.user.login} // 작성일: {issue.created_at}</p>
            {Array(issue)}
          </li>
        ))}
      </ul>
      <div className="observer" style={{ marginTop: '20px' }}>
        {loading ? <p>Loading...</p> : null}
      </div>
    </div>

    </div>;
}

export default Card;
