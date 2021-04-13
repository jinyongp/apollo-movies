import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

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

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
  background-size: 400% 400%;
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${gradient} 5s infinite linear alternate;
  transition: height 0.5s cubic-bezier(0.61, 0.11, 0, 1.02);
  &.load {
    height: 10vh;
    flex-direction: row;
  }
`;

const Title = styled.h2`
  position: absolute;
  width: 300px;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingSVG = styled.img.attrs({
  src: "/assets/hearts.svg",
  alt: "Loading...",
})`
  display: block;
  margin: 0 auto;
  transition: transform 0.3s 0.1s cubic-bezier(0.61, 0.11, 0, 1.02);
  &.loading-icon {
    transform: scale(0.6);
  }
`;

const TopLoader = ({ loading }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [loading]);

  if (loading)
    return (
      <Container>
        <LoadingSVG />
      </Container>
    );
  else
    return (
      <Container className="load">
        <Title>
          <p>Apollo Movie</p>
        </Title>
        <LoadingSVG className="loading-icon" />
      </Container>
    );
};

export default TopLoader;
