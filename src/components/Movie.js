import { Link } from "react-router-dom";
import styled from "styled-components";

const Poster = styled.img`
  cursor: pointer;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-width: 0;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 2px 10px 2px gray;
  &:hover {
    transform: translateY(-7px);
    transition: transform 0.5s ease-in-out;
  }
`;

const Movie = ({
  id,
  title,
  year,
  rating,
  genres,
  runtime,
  summary,
  medium_cover_image,
}) => (
  <>
    <Link to={`/${id}`} className="movie">
      <Poster src={medium_cover_image} alt={title} draggable="false" />
    </Link>
  </>
);

export default Movie;
