import styled from "styled-components";

const LoadingSVG = styled.img.attrs({
  src: "/assets/hearts.svg",
  alt: "Loading...",
})`
  display: block;
  margin: 0 auto;
  transition: all 0.5s cubic-bezier(0.61, 0.11, 0, 1.02);
  transform: scale(${({ scale }) => scale});
`;

export default LoadingSVG;
