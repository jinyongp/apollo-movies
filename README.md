# Apollo Movies

Movie App built with React, GraphQL, Apollo

GraphQL Server: [movie-ql](https://github.com/jinyongp/movie-ql)

## packages

### styled-components

### react-router-dom

```jsx
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/:id" component={Detail} />
    </Router>
  );
}
```

`exact`를 붙이는 이유는 `/:id`로 이동했을 때 `/` 라우트는 렌더링하지 않기 위해서이다.

### apollo

[Apollo Client for React](https://www.apollographql.com/docs/react/)

#### Create a client

```jsx
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
```

#### Request Data using Query

```jsx
import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
  {
    getMovies {
      id
      title
      year
      rating
      genres
    }
  }
`;

const { data, loading, error } = useQuery(GET_MOVIES);
```

```jsx
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query GetMovie($id: Int!) {
    getMovie(movie_id: $id) {
      id
      title
      year
      rating
      genres
    }
  }
`;

const { id } = useParams();
const { data, loading, error } = useQuery(GET_MOVIE, {
  variables: { id: +id },
});
```
