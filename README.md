
### 1.프로젝트 설명
 특정 Github Repo의 Issue리스트를 코멘트 순으로 정렬, Issue리스트엔 특정 셀마다 배너 삽입, 잘못된 접근 및 요청 에러페이지 구현, 무한스크롤 적용
### 2.프로젝트의 실행 방법
1. git clone
2. 해당 프로젝트 경로에서
   ```npm install```
   ```npm start```
#### 링크 : [http://wanted-pre-onboarding-frontend-jin0816.s3-website.ap-northeast-2.amazonaws.com/](http://github-issuelist.s3-website.ap-northeast-2.amazonaws.com)


```
### 6. 추후 평가
- 구현 범위가 적고, 기능 구현만 고려하여 클린코드 X
 - 코드 리팩토링 필요
   1. 각각의 스크립트에서 같은 변수 재선언 많음
   2. API를 모듈화 하지 않아 코드 가독성 떨어짐 
   3. 각각의 스크립트에서 같은 기능의 변수 재선언 많음 (상수로 따로 처리)
   4. 쓸 데 없는 주석이 많음
 - axios사용으로 api 단순화 및 예외처리 쉽게 변경 고려(작성된 API는 Fetch로 구현)
