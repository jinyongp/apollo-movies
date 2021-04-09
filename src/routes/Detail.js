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

const Detail = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });
  console.log(data, loading, error);
  return <h1>Detail</h1>;
};

export default Detail;
