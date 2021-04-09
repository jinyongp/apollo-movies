import { Link } from "react-router-dom";

const Movie = ({ id }) => (
  <Link to={`/${id}`} className="movie">
    <div>{id}</div>
  </Link>
);

export default Movie;
