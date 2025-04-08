todo 
- no react 기능 추가 (base에)
- 유저 핸들러
- 공통 컴포넌트 개발 
- 폰트 처리 (성능 개선)
- robot.txt 추가 







# 상태관리 


선정 이유 

redux 


액션 명명 규칙 
-------
get~~
edit ~~ 
del ~~ 
create __
-------
Status 뒤에 붙일것  

로컬 리듀서도 
액션 명이 Fail, Success 로 끝나면 안됨 << 자동 생성후 인식떄문에 (todo prefix 추가? 등의 개선 필요)






SS components
사용한 라이브러리 
shadcn 
이슈 - 다운로드시 cn 경로가 적용이 똑바로 안됨 cn 만 바꿔주면 됨 (components.json 수정했는대 잘 모르겠음)


-------------------
프리티어
yarn exec prettier . --write
혹은 자동 정렬마다 설정 원할시

웹스톰 기준 
파일 | 설정 | 언어 및 프레임워크 | JavaScript | Prettier
jetbrains://WebStorm/settings?name=%EC%96%B8%EC%96%B4+%EB%B0%8F+%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC--JavaScript--Prettier
여기서 자동 활성화 혹은 저장시 적용 활성화

todo  깃 커밋시 자동 적용 ex) husky

-------------------------



## 동적 라우팅 생성 기능 추가

feature랑 파일명 구분을 위해 Page를 뒤에 붙이는걸 권장 (필수는 아님)

테마 색상 설정
https://zippystarter.com/tools/shadcn-ui-theme-generator
위 사이트에서 원하는 디자인 색상 추출 후

src/shared/components/lib/shadcn/styles/shadcn-variables.css
에 적용

---

추천 크롬 익스텐션

0. Reduc DevTools: state, action 관리해준다. DevTools 에서 확인 가능
   https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko
   https://github.com/reduxjs/redux-devtools
1. LocatorJS: 크롬에서 컴포넌트 alt + 마우스 좌클릭시 바로 에디터에서 해당 파일이 열림
   https://www.locatorjs.com/
   https://github.com/infi-pc/locatorjs
   https://chromewebstore.google.com/detail/locatorjs/npbfdllefekhdplbkdigpncggmojpefi

2. colorZilla: 크롬에서 스포이드로 색상 확인 및 복사
   https://www.colorzilla.com/
   https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=ko

3. Page Ruler: 크롬 화면에서 영역 지정하여 길이 px 확인 가능
   https://chromewebstore.google.com/detail/page-ruler/jcbmcnpepaddcedmjdcmhbekjhbfnlff?hl=ko
