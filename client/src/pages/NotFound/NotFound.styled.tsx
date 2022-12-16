import styled from "styled-components";

const NotFoundBox = styled.div`
  padding: 50px;
  height: 100vh;
  background: #1a202c;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotFoundImgWrapper = styled.figure`
  line-height: 0;
`;

const NotFoundImg = styled.img`
  height: 500px;
  object-fit: contain;
`;
const NotFoundTitle = styled.h1`
  color: #fff;
  margin-top: -40px;
  font-size: clamp(1.7rem, calc(5vw + 1rem), 3rem);
`;
const NotFoundDescription = styled.p`
  margin-top: 10px;
  color: #cecece;
  font-weight: 600;
`;

export {
  NotFoundBox,
  NotFoundImgWrapper,
  NotFoundImg,
  NotFoundTitle,
  NotFoundDescription,
};
