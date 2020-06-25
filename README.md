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

# 6/20 node / react -> 영화 웹

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
- gh-pages(★)
- react-router-dom : 네비게이션을 만들어 줌
- react-router-dom : exact=true로 하지 않으면 겹치는 URL일 때 모두 다 렌더링 함
  - ex) /user/list/1 -> /user + /user/list + /user/list/1 까지 해당되는 세 컴포넌트를 모두 다 겹치게 렌더링 함
- a href는 페이지 이동 / router 안에서 link to를 사용하면 리액트가 렌더링만 다시 함
