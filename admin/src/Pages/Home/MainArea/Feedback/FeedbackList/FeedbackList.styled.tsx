import styled from "styled-components";

const FeedbackListTable = styled.table`
  border-collapse: collapse;
  margin-right: 20px;
  margin-top: 50px;
  background: #fff;
  & th,
  td {
    border: 1px solid #111;
    padding: 10px 15px;
  }
  & th {
    background: #111;
    color: #fff;
    &:not(:last-child) {
      border-right: 1px solid #fff;
    }
  }
`;
const FeedbackListThead = styled.thead``;
const FeedbackListTr = styled.tr``;
const FeedbackListTh = styled.th``;
const FeedbackListTbody = styled.tbody``;
const FeedbackListTd = styled.td``;
const FeedbackListLoadingTitle = styled.h2``;

export {
  FeedbackListTable,
  FeedbackListThead,
  FeedbackListTr,
  FeedbackListTh,
  FeedbackListTbody,
  FeedbackListTd,
  FeedbackListLoadingTitle,
};
