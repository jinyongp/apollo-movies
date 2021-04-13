import styled from "styled-components";
import Movie from "./Movie";

const Container = styled.div`
  width: 80%;
  top: 15vh;
  position: absolute;
  padding: 1rem 2rem;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, max-content));
  grid-auto-rows: min-content;
  grid-gap: 20px;
  position: relative;
  place-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 0;
`;

const Movies = ({ movies }) => {
  return (
    <Container>
      <GridWrapper>
        {movies?.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </GridWrapper>
    </Container>
  );
};

export default Movies;
