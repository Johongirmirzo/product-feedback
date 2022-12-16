import styled from "styled-components";

const ChangeProfilePhotoBox = styled.article`
  display: flex;
  align-items: center;
  gap: 25px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background: #f7f7f7;
`;
const ChangeProfileImgCon = styled.figure`
  position: relative;
  display: flex;
  cursor: pointer;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  & > img,
  div {
    width: inherit;
    height: inherit;
    border-radius: inherit;
  }
  &:hover > span {
    opacity: 1;
  }
`;

const ChangeProfilePhotoImg = styled.img`
  object-fit: cover;
`;
const ChangeProfilePhotoPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #035e97;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
`;
const ChangeProfilePhotoUploadText = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  opacity: 0;
  transition: all 0.3s ease-out;
`;
const ChangeProfilePhotoText = styled.span``;

export {
  ChangeProfilePhotoBox,
  ChangeProfileImgCon,
  ChangeProfilePhotoImg,
  ChangeProfilePhotoPlaceholder,
  ChangeProfilePhotoUploadText,
  ChangeProfilePhotoText,
};
