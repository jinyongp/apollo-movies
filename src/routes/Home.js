import { useQuery } from "@apollo/client";
import Movie from "../components/Movie";
import { GET_MOVIES } from "../queries/movie";

const Home = () => {
  const { data, loading, error } = useQuery(GET_MOVIES);
  return (
    <div className="App">
      {loading && <div>Loading</div>}
      {loading ||
        data?.movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
};

export default Home;
