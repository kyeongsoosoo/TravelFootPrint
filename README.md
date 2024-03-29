# 여행의 발자국

## 컨텐츠 소개

일상을 보내면서 얼마만큼의 탄소발자국을 쓰는지 계산합니다. 그 활동들을 줄여 아낀 탄소발자국으로 어느지역까지 여행할 수 있을지 알아봅니다.

[여행의 발자국](https://goofy-bardeen-19cc15.netlify.app)

## 사용 기술

Front

- React
- React-Router
- Redux, Typesafe-Actions
- useSWR
- Styled-Components
- Typescript
- Webpack,Babel
- Eslint

Back

- Express

Deploy

- Heroku
- Netlify

---

## 추가사항

- 5/20

  각 라우트 별로 동적임포트를 지정해주었습니다. 쓰인 코드의 양이 많지 않아 당장 도입해야 할 만큼의 성능저하가 있지는 않았지만 lazy와 suspense의 연습을 위해 미리 도입해보았습니다.

## 현재 진행중인 것

---

- 피드백에 따른 이슈정리

  배포를 진행하면서 지속적으로 피드백을 받고 있습니다. 피드백 과정에서 예상치 못하게 발견한 에러나 UX적인 개선점들을 수용하기 위해 이슈를 등록하고 있습니다.

- UX 및 성능 개선

  팀 자체적인 회의나 피드백을 통해 얻은 아이디어를 반영하기 위해 새로운 기능을 추가하거나 기존 기능들을 수정하고 있습니다.

## 신경써서 한 것

---

<br>

- 재사용 가능한 컴포넌트나 값 만들기

  프로젝트를 진행하면서 특정한 Feature에서만 사용되지 않고 컴포넌트들이 공통적으로 사용되는 경우가 있었습니다. 이때에는 그 컴포넌트들을 Component 폴더 안으로 옮겨주어 컴포넌트가 필요한 경우 그 폴더에서 가져와 사용할 수 있게 해주었습니다. 사용되는 위치에 따라 같은 컴포넌트에 요구되는 기능에 차이가 있음을 고려하여 요구사항들을 포괄할 수 있도록 설계하였습니다. 기본적으로 사용하는 Input이나 Button을 구현해 사용했습니다.
  <br>추가적으로, 라디오박스를 반복적으로 사용했기 때문에, 재사용 가능하게 구현했습니다. 이 과정에서 useReducer 훅을 사용하여 컴포넌트의 상태를 체크하고, Redux를 활용하여 상태값이 전역적으로 저장될 수 있게 했습니다.

* 관심사의 분리

  목적에 따라 최대한 관심사를 분리하여 폴더구조를 구성하고자 하였습니다. 공통적으로 사용하는 훅은 폴더를 따로 만들었고, 컴포넌트별로 재사용성이 적은 훅의 경우 각 컴포넌트와 함께 위치하게 했습니다. 그 밖에 필요한 로직들은 서비스 폴더를 만들어 목적에 맞게 서비스 클래스를 생성하여 사용했습니다.

* Strict한 타입의 사용

  타입을 최대한 자세히 명시하려고 했습니다. 이 과정에서 Record나 Pick과 같은 Utility 타입과 타입검사를 위해 타입가드 문법을 익히고 사용해보았습니다. 이를 통해 컴포넌트들이 타입에 맞추어 견고하게 설계되는 것을 의도하였습니다.

* 웹팩 및 바벨, eslint, prettier 활용

  CRA를 사용하지 않고 웹팩과 바벨을 활용하여 세팅하였습니다. 웹팩 merge를 사용해 개발시와 배포시에 필요한 옵션들을 설정해었고, devServer와 proxy 설정을 이용해 로컬환경에서 백엔드 서버와 연동하였습니다.
  그리고 eslint와 prettier를 사용하여 정해진 컨벤션을 가지고 코드를 짤 수 있게 연습했습니다.

* 상태저장(redux, useReducer, useSWR)

  상태관리를 위해 redux를 사용했습니다. 전역적인 상태저장이 필요하지 않다고 판단될 때는 useReducer와 useState 훅을 활용했습니다. 서버로부터 데이터를 가지고 올 때는 기존에 사용하던 redux-saga를 사용하지 않고 useSWR을 활용했습니다.

* 반응형으로 설계

  프로젝트의 타겟에 모바일 이용자들도 포함이 되어있었기 때문에 모바일과 웹 환경에서 같이 동작할 수 있도록 반응형 페이지로 설계하였습니다. 이에 따라 폰트나 컴포넌트가 화면 크기에 따라 조절될 수 있도록 mixin 함수를 만들어 활용하였습니다.

## 배운 것들

---

<br>

- 브라우저와 자바스크립트,리액트의 동작원리

  컴포넌트들을 구현하면서 예상과 다르게 동작하는 경우가 있었습니다. 그 과정에서 useEffect의 동작시점이나 이벤트 루프/태스크 큐에 대해 배울 수 있었습니다. 이를 통해 함수들의 실행 순서를 예상하고 에러를 줄일 수 있었습니다.

- 클린코드

  토이프로젝트를 진행할 때보다 규모가 있는 프로젝트를 진행하면서, 작성했던 코드를 시간이 지난 후에 활용해야 할 경우가 많아졌습니다. 그래서 단순히 구현만을 위한 코드를 넘어서 가독성이 좋은 코드에 대한 필요성을 느꼈습니다. 클린코드에 관련한 강의를 참고하였습니다. 변수명이나 함수명에 이름의 의도가 잘 반영될 수 있도록 시도했고, 함수의 경우 함수 하나당 하나의 목적을 가지고 구현될 수 있도록 나누었습니다.

- 기록의 중요성

  프로젝트를 진행하면서 발생한 에러나 필요사항에 대해 놓치고 지나가게 되는 경우가 있었습니다. 그 외에 프로젝트에 필요한 라이브러리에 대해 조사한 내용들을 정리해놓을 필요성도 생겼었습니다. 그래서 개발과정을 기록하는 습관을 가지도록 노력했습니다.
  <br>
  프로젝트 내에서 필요한 todo의 경우 vscode extension인 TODO tree를 활용하여 놓치고 지나가는 일이 없도록 했습니다. 프로젝트를 진행하면서 배운 것들은 노션에 카테고리를 분류하여 기록했습니다.
  <br>
  깃 커밋 메시지도 일정한 컨벤션을 적용해서 작성하려고 했습니다.

## 느낀 점

---

<br>

처음으로 기획부터 배포까지의 과정을 다뤄 본 프로젝트였습니다. 세팅부터 구현까지 과정에서 처음 만나는 이슈들이 많았습니다. 그래도 무조건 배포까지 한다는 마음으로 진행했고, 문제들을 해결하면서 배운 것들이 많습니다. 앞으로도 프로젝트들에 참여하고 성장하는 개발자가 되고 싶습니다.
