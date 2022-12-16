import styled from "styled-components";

const DeleteAccountBox = styled.article`
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background: #f7f7f7;
`;
const DeleteAccountHeader = styled.header``;
const DeleteAccountTitle = styled.h2`
  font-size: clamp(1.5rem, calc(1vw + 1rem), 1.8rem);
  margin-bottom: 20px;
`;
const DeleteAccountDescription = styled.p`
  color: #555;
`;
const DeleteAccountBtn = styled.button`
  border-radius: 10px;
  border: 0;
  padding: 10px 20px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  background: #da3633;
`;

export {
  DeleteAccountBox,
  DeleteAccountHeader,
  DeleteAccountTitle,
  DeleteAccountDescription,
  DeleteAccountBtn,
};
