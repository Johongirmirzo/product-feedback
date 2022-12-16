import styled from "styled-components";

const FilterFeedbackStatusSelect = styled.select`
  margin-top: 20px;
  display: block;
  width: 200px;
  padding: 10px 8px;
  border: 1px solid #546990;
  background: #fff;
  outline: 0;
  border-radius: 5px;
  font-size: 0.95rem;
  color: #222;
  transition: padding 0.25s ease-out;
  &::placeholder {
    color: #444;
  }
  &:focus {
    padding-left: 15px;
  }
`;
const FilterFeedbackStatusOption = styled.option``;

export { FilterFeedbackStatusSelect, FilterFeedbackStatusOption };
