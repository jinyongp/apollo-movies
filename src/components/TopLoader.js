import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import LoadingSVG from "./LoadingSVG";

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

const visible = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  animation: ${gradient} 5s infinite linear alternate;
  transition: height 0.5s cubic-bezier(0.61, 0.11, 0, 1.02);
  &.load {
    height: 10vh;
    flex-direction: row;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin: auto;
  letter-spacing: 0.2rem;
  opacity: 0;
  animation: ${visible} 0.5s ease 0.5s 1 forwards;
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
        <Title>Apollo Movie</Title>
      </Container>
    );
};

export default TopLoader;
