import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { Movies, TopLoader } from "../components";
import { GET_MOVIES } from "../queries/movie";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_MOVIES);
  const { movies } = data || {};
  return (
    <Container>
      <TopLoader loading={loading} />
      <Movies movies={movies} />
    </Container>
  );
};

export default Home;
