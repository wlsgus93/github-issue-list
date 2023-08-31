import { Octokit } from '@octokit/rest';
const octokit = new Octokit(
  {OCTOKIT_TOKEN:process.env.OCTOKIT_TOKEN}
);
//repo이름 가져오기
export async function getRepositoryInfo(owner, repo) {
  try {
    const response = await octokit.repos.get({
      owner,
      repo,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
//org 이름 가져오기
export async function getOrganizationInfo(org) {
  try {
    const response = await octokit.orgs.get({
      org,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getIssuesByCommentCount(owner, repo, page, perPage) {
  try {
    const response = await octokit.issues.listForRepo({
      owner,
      repo,
      page,
      per_page: perPage,
      sort: 'comments', // 코멘트 수를 기준으로 정렬
      direction: 'desc', // 오름차순으로 정렬
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function getIssueContent(owner,repo,issueNumber) {
  try {
    console.log('success')
    const response = await octokit.issues.get({
      owner,
      repo,
      issue_number: issueNumber,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching issue content:', error);
    return null;
  }
}