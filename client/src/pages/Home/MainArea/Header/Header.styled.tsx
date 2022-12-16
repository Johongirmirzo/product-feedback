import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderBox = styled.div`
  border-radius: 10px;
  padding: 25px 15px;
  align-self: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  background: hsl(231, 41%, 10%);
  color: #fff;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  & > *:first-child {
    margin-right: 20px;
  }
`;
const HeaderRight = styled.div``;
const HeaderLink = styled(Link)`
  text-decoration: none;
`;
const HeaderBtn = styled.button`
  border-radius: 10px;
  padding: 10px 15px;
  background: hsl(279, 87%, 50%);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  @media (min-width: 768px) {
    padding: 14px 20px;
  }
`;

export { HeaderBox, HeaderLeft, HeaderRight, HeaderLink, HeaderBtn };
