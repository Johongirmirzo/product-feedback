import styled from "styled-components";

const PersonalInfoBox = styled.section`
  flex: 0 1 600px;
  width: 100%;
`;
const PersonalInfoHeader = styled.header``;
const PersonalInfoTitle = styled.h1`
  margin-bottom: 20px;
  font-size: clamp(2rem, calc(2vw + 1rem), 2.5rem);
  font-weight: 600;
  color: #222;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export { PersonalInfoBox, PersonalInfoHeader, PersonalInfoTitle };
