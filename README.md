# 5/31 node / react

- https://www.youtube.com/watch?v=fgoMqmNKE18&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T
- 프론트랑 백을 분리해서 구성할 경우 concurrently를 이용하여 한 번에 실행 가능
- ex) "dev": "concurrently \"npm start\" \"npm start --prefix client\"
- 로컬 등 같은 서버에 프론트와 백을 분리하여 이용할 경우 CORS 문제 발생(★)
  - 프록시를 이용하여 특정 URL의 경우 허용하는 형태로 가능(★)
- react 중 redux / hoc(★)
- 토큰(★)

# 6/6, 6/19 node / react -> 영화 리뷰

- https://www.youtube.com/watch?v=e8xMcMXqYGw&list=PL9a7QRYt5fqkowXUgTj_tbkFClsPhO5XV
- {xImg && <div></div>} -> xImg가 있을 경우 div를 렌더링

# 6/20, 6/22, 6/25, 6/26 node / react -> 영화 웹(노마드코더)

- https://nomadcoders.co/
- npx create-react-app my-app 으로 react 기본 설정 설치(my-app에는 원하는 폴더 및 프로젝트명 입력)
- react component = html을 반환하는 함수
- jsx = html + javascript
- props.data = {data}
- class component는 자동으로 render를 호출함
- setState가 호출되면 render도 함께 다시 호출됨(state 값을 setState가 아니라 그냥 대입하는 식으로 수정하면 렌더가 되지 않기 때문에 화면에 표시되지 않음)
- setState({count: this.state.count - 1}) = setState(current => ({count: current.count - 1}))
- componentDidMount : 컴포넌트가 처음으로 렌더된 후 호출
- componentDidUpdate : 컴포넌트가 다시 렌더된 후 호출
- componentWillUnmount : 컴포넌트를 떠날 때 호출
- 리액트에서 태그 속성으로 쓰이는 class는 className으로 작성 클래스 컴포넌트 사용시 명시되는 클래스와 혼동(브라우저가)할 수 있기 때문
- gh-pages
  - npm i gh-pages
  - pachage.json 에 "homepage": "https://jumpupmoon.github.io/js-framework" 추가(https://{깃허브 계정}.github.io/{레파지토리명})
  - pachage.json -> script 에 "deploy": "gh-pages -d build",
    "predeploy": "npm run build" 추가(preXX 하면 XX 했을 때 preXX를 실행 후 XX 실행 -> npm run deply 명령시 predeply 먼저 실행 후 deploy 실행)
  - npm run deploy 실행
- react-router-dom : 네비게이션을 만들어 줌
- react-router-dom : exact=true로 하지 않으면 겹치는 URL일 때 모두 다 렌더링 함
  - ex) /user/list/1 -> /user + /user/list + /user/list/1 까지 해당되는 세 컴포넌트를 모두 다 겹치게 렌더링 함
- a href는 페이지 이동 / router 안에서 link to를 사용하면 리액트가 렌더링만 다시 함

# 6/26 react native(노마드코더)

- expo는 react-create-app과 같음
  - expo init {폴더명(프로젝트명)}
  - blank 기본 / blank(typeScript) / tabs(typescript) 이미 화면이 있을 때
- 아이폰 터미널에서 expo login 후 run on IOS
- 안드로이드 npm start 후 나오는 expo dev tool에서 QR코드 스캔
  - local 환경에서 실제 폰으로 테스트 할 경우 같은 wifi에 연결되어 있어야 함
- react native는 자바스크립트 코드를 IOS의 경우 스위프트, 안드로이드의 경우는 자바로 연결해주는 브릿지 역할을 함(브릿지 역할을 하기 때문에 스위프트 자바 등으로 만든 네이티브 보다는 느림)
  - 하이브리드 형식의 진화된 버전 느낌 / 속도 하이브리드앱 < 리액트 네이티브 < 네이티브
  - 일반적인 경우에는 괜찮지만 3D 게임 등 많은 데이터와 처리가 필요한 경우에는 적합하지 않음
- div -> view / span -> text

# 7/11 react+node Management System

- https://www.youtube.com/watch?v=_yEH9mczm3g&list=PLRx0vPvlEmdD1pSqKZiTihy5rplxecNpz
- useEffect(() => {}) componentDidMount + componentDidUpdate
  - useEffect(() => {}, [x]) x값이 변할 때에만 호출 됨
  - useEffect(() => {}, []) componentDidMount + componentWillUnmount
  - useEffect(() => return cleanup() => {}) cleanup = componentWillUnmount(useEffect 호출 될 때마다 cleanup도 호출 됨)
- react-hook-form