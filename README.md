# 여행의 발자국

## 컨텐츠 소개

일상을 보내면서 얼마만큼의 탄소발자국을 쓰는지 계산합니다. 그 활동들을 줄여 아낀 탄소발자국으로 어느지역까지 여행할 수 있을지 알아봅니다.

[여행의 발자국](https://goofy-bardeen-19cc15.netlify.app/result/final)

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

## 배운 것 & 신경써서 한 것

---

<br>

- 관심사의 분리

  목적에 따라 최대한 관심사를 분리하여 폴더구조를 구성하고자 하였습니다. 공통적으로 사용하는 훅은 폴더를 따로 만들었고, 컴포넌트별로 재사용성이 적은 훅의 경우 각 컴포넌트와 함께 위치하게 했습니다. 그 밖에 필요한 로직들은 서비스 폴더를 만들어 목적에 맞게 서비스 클래스를 생성하여 사용했습니다. 이를 통해 Feature 폴더에서 뷰에 대한 관심사에만 집중할 수 있게 했습니다.

- Strict한 타입의 사용

  타입을 최대한 자세히 명시하려고 했습니다. 이 과정에서 Record나 Pick과 같은 Utility 타입과 타입검사를 위해 타입가드 문법을 익히고 사용해보았습니다. 이를 통해 컴포넌트들이 타입에 맞추어 견고하게 설계되는 것을 의도하였습니다.

- 웹팩 및 바벨, eslint, prettier 활용

  CRA를 사용하지 않고 웹팩과 바벨을 활용하여 세팅하였습니다. 웹팩 merge를 사용해 개발시와 배포시에 필요한 옵션들을 설정해었고, devServer를 이용해 로컬환경에서 백엔드 서버와 연동하였습니다.
  그리고 eslint와 prettier를 사용하여 정해진 컨벤션을 가지고 코드를 짤 수 있게 연습했습니다.

- 상태저장(redux, useReducer, useSWR)

  상태관리를 위해 redux를 사용했습니다. 전역적인 상태저장이 필요하지 않다고 판단될 때는 useReducer와 useState 훅을 활용했습니다. 서버로부터 데이터를 가지고 올 때는 기존에 사용하던 redux-saga를 사용하지 않고 useSWR을 활용했습니다.
