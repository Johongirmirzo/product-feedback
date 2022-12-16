import styled from "styled-components";

const CommentListBox = styled.div`
  border-radius: 10px;
  margin: 20px 0;
  padding: 15px 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  background: #f7f7f7;
  @media (min-width: 768px) {
    padding: 25px 30px;
  }
`;
const CommentListTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export { CommentListBox, CommentListTitle };
