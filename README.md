# 5/31 node / react

- https://www.youtube.com/watch?v=fgoMqmNKE18&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T
- 프론트랑 백을 분리해서 구성할 경우 concurrently를 이용하여 한 번에 실행 가능
- ex) "dev": "concurrently \"npm start\" \"npm start --prefix client\"
- 로컬 등 같은 서버에 프론트와 백을 분리하여 이용할 경우 CORS 문제 발생(★)
  - 프록시를 이용하여 특정 URL의 경우 허용하는 형태로 가능(★)
- react 중 redux / hoc(★)
- 토큰(★)

# 6/6 node / react -> 영화 리뷰

- https://www.youtube.com/watch?v=e8xMcMXqYGw&list=PL9a7QRYt5fqkowXUgTj_tbkFClsPhO5XV
- {xImg && <div></div>} -> xImg가 있을 경우 div를 렌더링