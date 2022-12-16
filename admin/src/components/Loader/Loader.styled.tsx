import styled from "styled-components";

const LoaderBox = styled.div`
  position: fixed;
  inset: 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoaderText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #111;
`;

export { LoaderBox, LoaderText };
