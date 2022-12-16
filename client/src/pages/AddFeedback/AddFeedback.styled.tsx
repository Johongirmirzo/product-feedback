import styled from "styled-components";
import { Link } from "react-router-dom";

const AddFeedbackBox = styled.div`
  margin: 50px auto;
  max-width: 760px;
  width: 90%;
`;
const AddFeedbackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 50px;
  text-decoration: none;
  font-weight: 600;
  color: #444;
  cursor: pointer;
`;

export { AddFeedbackBox, AddFeedbackLink };
