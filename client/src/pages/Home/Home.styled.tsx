import styled from "styled-components";

const HomeContainer = styled.main`
  margin: 50px auto;
  max-width: 1160px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  & > *:first-child {
    width: auto;
  }
  & > *:last-child {
    flex: 1;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    & > *:first-child {
      width: 350px;
    }
  }
`;

export { HomeContainer };
