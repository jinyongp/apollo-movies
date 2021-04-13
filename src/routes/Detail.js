import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_MOVIE } from "../queries/movie";
import { Movies, LoadingSVG } from "../components";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Left = styled.div`
  width: ${({ $loading }) => ($loading ? 100 : 60)}%;
  transition: width 0.5s cubic-bezier(0.61, 0.11, 0, 1.02);
  z-index: 1;
  background-size: 400% 400%;
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  background-attachment: scroll;
  animation: ${gradient} 10s infinite linear alternate;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 5rem;
  font-weight: 200;
  letter-spacing: -0.1rem;
  margin: 1rem;
`;

const Year = styled.span`
  color: white;
  font-size: 2rem;
  font-weight: 200;
  margin: 1rem;
`;

const Summary = styled.p`
  color: white;
  max-height: 50%;
  overflow-y: scroll;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.7rem;
  margin: 2rem 0 2rem 3rem;
  width: 50%;
  padding: 1rem;
  &::-webkit-scrollbar {
    background-color: #0000;
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 1000px;
  }
`;

const Info = styled.div`
  margin: 0.3rem 0 0.3rem 3rem;
  color: white;
`;

const Genres = styled.div`
  display: flex;
  width: 60%;
  margin-left: 7rem;
`;

const Genre = styled.div`
  background-color: #ccc;
  border-radius: 20px;
  padding: 5px;
  margin-left: 3px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
`;

const Right = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 60%;
`;

const Poster = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 2px 10px 2px gray;
`;

const MovieWrapper = styled.div``;

const Detail = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });
  const { movie, suggestions } = data || {};
  const {
    title,
    year,
    rating,
    genres,
    runtime,
    description_full,
    large_cover_image,
  } = movie || {};
  if (loading) {
    return (
      <Container>
        <Left $loading={loading}>
          <LoadingSVG scale={1} />
        </Left>
      </Container>
    );
  } else {
    return (
      <Container>
        <Left>
          <Title>
            <Year>{year}</Year>
            {title}
          </Title>
          <Genres>
            {genres?.map((genre, index) => (
              <Genre key={index}>{genre}</Genre>
            ))}
          </Genres>
          <Summary>{description_full}</Summary>
          <Info>Rating: {rating} / 10.0</Info>
          <Info>Runtime: {runtime} min.</Info>
        </Left>
        <Right>
          <Poster src={large_cover_image} />
        </Right>
      </Container>
    );
  }
};

export default Detail;
