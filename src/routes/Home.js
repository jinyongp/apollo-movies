import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { Movies, TopLoader } from "../components";
import { GET_MOVIES } from "../queries/movie";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  width: 100%;
  position: absolute;
  top: 10vh;
  display: flex;
  justify-content: center;
  padding: 3rem;
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_MOVIES);
  const { movies } = data || {};
  return (
    <Container>
      <TopLoader loading={loading} />
      <Main>
        <Movies movies={movies} />
      </Main>
    </Container>
  );
};

export default Home;
