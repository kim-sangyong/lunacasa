# 🛏️ 루나카사 - LUNACASA 가구 쇼핑몰
<img src="https://github.com/kim-sangyong/test/raw/main/ReadMe.png" alt="루나카사 가구 쇼핑몰 이미지" width="1000"/>  

### 📎 배포 URL : https://kim-sangyong.github.io/lunacasa
---
<br />
<br />

## 📝 프로젝트 소개
- 웹 표준성, 웹 접근성 및 SEO 최적화를 통해 웹사이트의 노출도를 높였습니다.
- 하위 디렉토리 배포, 최근 등록한 사이트에 비해 검색결과가 상위에 노출 되도록 구현되었습니다.
- 루나카사는 고급 가구 쇼핑몰을 위한 웹사이트로 모던하고 직관적인 디자인을 통해 사용자가 손쉽게 쇼핑을 할 수 있도록 돕습니다.
- 깔끔하고 현대적인 레이아웃을 통해 제품을 보다 효과적으로 보여줍니다.
- 실제 기업 환경을 고려하여 폴더 구조를 체계적으로 설계하고 반응형 디자인 파일을 별도로 분리하여 효율적으로 관리하였습니다.
- 각 해상도에 보여지게끔 반응형을 구현하였습니다.
<br />
<br />

## 🙎‍♂️ 팀원 구성
- 1인 개발
- 개발 기간 : 2025-1-10 ~ 2025-2-28 (Figma, Photoshop 단계 포함)
<br />
<br />

## 🖥️ 개발 환경
- Visual Studio Code ( VS Code )
- React
- Git
- Figma, Adobe Photoshop
- npm 
<br />
<br />

## ✏️ 기술
- React
  - 반복적으로 사용되는 코드나 UI 요소들을 컴포넌트화하여 코드 중복을 줄이고  
  각 컴포넌트가 독립적으로 관리되도록 함으로써 코드의 가독성을 개선하고  
  추후 유지보수 시 코드 변경을 용이하게 하였습니다. 
<br />

- SCSS
  - 색상, 폰트 크기 등 반복적으로 사용되는 값을 변수로 선언하여 코드 중복을 줄이고  
    유지보수를 수월하게 만들었습니다.
  - 계층적인 구조 방식으로 선택자를 중복해서 작성할 필요 없이, 중첩문을 사용하여 코드 양을 줄였습니다.
  - 스타일이 구조적으로 정리되어있어, 추후에 수정이나 추가가 필요할때 빠르게 찾아서 수정할 수 있습니다.
<br />

- SCSS 모듈화 (CSS Modules with SCSS)
  - 각 컴포넌트에 고유한 클래스명을 지정할 수 있게 하여 혹시 모를 스타일 충돌을 방지하였습니다.
<br />

- react-helmet-async
  - 각 페이지마다 헤더에 헬멧을 적용하여 메타 태그, 제목(title)을 동적으로 관리하여 SEO 최적화를 하였습니다.
  - meta name="description" content="" , meta name="keywords" content="" 등등 을 사용하여  
    페이지별로 최적화된 정보를 제공하여 SEO 최적화를 하였습니다.
<br />

- React-Snap
  - SPA의 SEO 개선을 위해 사용했습니다.
  - 빌드 시 각 페이지의 정적 HTML을 생성해 검색 엔진 크롤러가 동적으로 관리하는 메타 태그를 제대로 읽을 수 있도록 하였습니다.

- React Slick
  - React Slick 라이브러리를 사용하여 이미지 슬라이드 기능을 구현하였습니다.
<br />

- JavaScript
  - 사용자가 특정 버튼을 클릭했을때 자바스크립트를 사용하여 모달을  
    동적으로 열고 닫는 기능을 구현했습니다.
  - JavaScript 객체 배열을 사용하여 침대, 소파 제품 정보를 정적 데이터로 만들고 API 호출 없이 데이터를  
    JS파일로 관리하여 임포트하는 방식으로 데이터 바인딩을 하였습니다. 파일을 따로 관리하기 때문에  
    유지보수가 용이하고 가독성이 좋습니다.
<br />

- Figma 
  - 초기 레이아웃 및 디자인을 Figma를 사용하여 시각적으로 설계한 후 이를 바탕으로 개발을 진행했습니다.   
    이를 통해 디자인과 개발 간의 일관성을 유지하고, 빠르고 효율적인 개발이 가능했습니다.
<br />

- Adobe Photoshop
  - 배너 디자인, Photoshop에 적합한 시각적 요소를 만들었습니다.
<br />

- Git 
  - GitHub Pages를 통해 gh-pages 브랜치를 사용하여 프로젝트를 간편하게 배포하고 실시간으로 프로젝트의   
    업데이트 및 수정 사항을 반영하여 구글 봇이 빠르게 읽을 수 있도록 최적화하였습니다.
<br />

- Google Search Console
  - 구글 서치 콘솔을 사용하여 웹사이트의 URL을 등록하고 색인 요청하여 실제 구글 검색에 보여지게  
    적용하였고 구글 검색 결과에 대한 가시성을 향상시켰습니다.
<br />
<br />

## 📌 1인 개발 기획
1. 디자인 구상
  - 사용자의 편의성과 직관적인 인터페이스를 고려하여 레이아웃을 구상
  - 사용자 경험을 최적화하기 위해 페이지 이동 흐름과 주요 기능 배치를 기획
  - Photoshop으로 배너를 만들고, Figma로 초기 레이아웃 및 디자인을 기획.
<br />

2. 웹 표준 & 웹 접근성
  - W3C(Web Standards) 권장 사항을 준수하여 개발
  - 시멘틱 태그 사용 및 role, aria-label 적용으로 보조기술 지원 강화
  - 이미지에는 alt 속성을 추가하고, 색상 대비를 고려하여 가독성 향상
  - 입력폼에 label을 명확하게 연결하여 가독성 향상
<br />

4.  SEO & 검색 최적화
  - React Helmet을 적용하여 페이지별 메타 태그 설정
  - meta태그, Open Graph(OG) 메타 태그를 사용하여 검색시 사이트 설명,  
    키워드, SNS 공유시 설명이 보여지게끔 적용
  - React-Snap을 사용하여 동적으로 관리하는 메타 태그를 크롤러가 제대로 읽을 수 있도록 적용
  - 사이트 링크 공유시 각 페이지에 적용한 메타 태그가 제대로 노출이 됨
  - Google Search Console을 통해 사이트 색인 요청 및 검색 노출 최적화
<br />

5. SCSS
  - SCSS 사용하여 코드 유지보수성 강화
  - 각 컴포넌트별로 스타일을 모듈화하여 충돌 방지 및 재사용성 증대
<br />
<br />

## 🛠️ 웹 접근성 개선
- LightHouse에서 확인시 span 태그에 대한 color 값 에러 확인  
<br />
<img src="https://github.com/kim-sangyong/test/raw/main/AccOne.png" alt="접근성 수정 전" width="550px"/>
<br />
<br />

### span태그 세일 값에 빨간색을 적용해 흰색인 배경색과 사용되어 대비가 낮아 읽기 어려움을 개선
- 개선 후  
<br />
<img src="https://github.com/kim-sangyong/test/raw/main/AccTwo.png" alt="접근성 수정 후" width="550px">
<br />
<br />

- 개선 후 모든 페이지에서 Accessibility, Best Practices, SEO 점수는 100으로 우수함.
- Performance 점수가 대체적으로 미흡하여 향후 개선 예정
  - 이미지를 Webp로 압축하여 파일용량을 줄일 예정
  - WOFF2 폰트 포맷을 적용할 예정
<br />
<br />

## 📢 프로젝트 후기
이 프로젝트는 저에게 정말 뜻 깊은 시간이었습니다. 협업도 중요하지만, 혼자서 처음부터 끝까지 모든 과정을 경험하는 것이 정말 많은 도움이 되었다고 느꼈습니다.  
React, Figma, Photoshop, SCSS, 그리고 다양한 라이브러리들을 처음 사용해 보면서 많은 것을 배웠고, 그 과정에서 부족한 부분도 정확히 파악할 수 있었습니다.  
이 프로젝트는 끝이 아니라, 계속해서 기능을 추가하고 개선해 나가면서 반응형 웹 디자인, SEO 최적화, 웹 접근성 등을 더 깊이 있게 작업할 계획입니다.  
앞으로는 JavaScript를 더 많이 활용하여 정적 기능뿐만 아니라 동적 기능도 추가하며 프로젝트를 더욱 발전시켜 나갈 예정이고, 더 많은 프로젝트를 경험해 보려고 합니다.

- 2025-03-24 최종 후기
<br />
이번 프로젝트를 통해 react-helmet-async에 대해 잘못 이해하고 있었다는 것을 깨달았습니다. <br />
각 컴포넌트에 메타 태그를 적용했다고 해서 SEO 최적화가 되는 것은 아니었습니다.
**CRA (Create React App)**는 CSR (Client Side Rendering) 방식을 사용하기 때문에 <br />
하나의 index.html만 크롤링되어 메타 태그가 제대로 노출되지 않는 문제가 있었습니다. <br />
이를 해결하기 위해 React-Snap을 적용했습니다.
React-Snap을 사용하면 빌드 시 각 페이지에 정적인 HTML을 생성해 검색 엔진에 메타 태그가 제대로 노출이 될 수 있었습니다. <br />
**SSR (Server Side Rendering)**은 서버가 HTML을 동적으로 제공하지만 CRA는 정적 HTML을 <br />
생성해 배포해야 한다는 차이점을 확실히 이해할 수 있었습니다. <br />
이로 인해 각 페이지를 공유할 때 메타 태그가 제대로 적용되는 것을 확인할 수 있었습니다.<br />
이 과정을 통해 SEO 최적화의 중요성과 다양한 접근 방식에 대해 깊이 배울 수 있었습니다.