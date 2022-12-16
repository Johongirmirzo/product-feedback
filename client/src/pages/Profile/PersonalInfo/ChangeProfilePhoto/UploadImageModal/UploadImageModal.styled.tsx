import styled from "styled-components";

const UploadImageModalPhotoBox = styled.div`
  height: 80vh;
`;
const UploadImageModalBtnsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const Button = styled.button`
  padding: 10px 20px;
  font-size: 17px;
  font-weight: 600;
  border-radius: 5px;
`;
const UploadImageModalCancelBtn = styled(Button)`
  border: 2px solid #5a8dee;
  color: #5a8dee;
`;
const UploadImageModalImageAddBtn = styled(Button)`
  background: hsl(219, 81%, 54%);
  border: 2px solid transparent;
  color: #fff;
`;
const UploadImageModalPhoto = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const UploadImageModalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;
const UploadImageText = styled.div`
  font-size: 2.5rem;
  text-align: center;
`;
const UploadImageModalBtn = styled.button`
  position: relative;
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
const UploadImageModalInput = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
`;

export {
  UploadImageModalPhotoBox,
  UploadImageModalPhoto,
  UploadImageModalBtnsBox,
  UploadImageModalCancelBtn,
  UploadImageModalImageAddBtn,
  UploadImageModalBox,
  UploadImageText,
  UploadImageModalBtn,
  UploadImageModalInput,
};
