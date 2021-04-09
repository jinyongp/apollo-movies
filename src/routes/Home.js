import { gql, useQuery } from "@apollo/client";
import Movie from "../components/Movie";

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

const Home = () => {
  const { data, loading, error } = useQuery(GET_MOVIES);
  return (
    <div className="App">
      {loading && <div>Loading</div>}
      {loading ||
        data?.getMovies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
};

export default Home;
