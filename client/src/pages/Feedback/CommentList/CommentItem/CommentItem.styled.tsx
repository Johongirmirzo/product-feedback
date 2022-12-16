import styled from "styled-components";
import StarsIcon from "@mui/icons-material/Stars";

const CommentItemBox = styled.div`
  display: flex;
  gap: 10px;
  @media (min-width: 768px) {
    gap: 20px;
  }
`;
const CommentUserPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 55px;
    height: 55px;
  }
`;
const CommentPhotoCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #035e97;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
const CommentTextBox = styled.div`
  position: relative;
  margin-bottom: 45px;
  flex: 1;
`;
const CommentUsername = styled.h4`
  position: relative;
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 20px;
`;
const CommentAdminBox = styled.div`
  position: absolute;
  top: -15px;
  left: 0;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #444;
`;
const CommentAdminText = styled.span``;
const CommentAdminIcon = styled(StarsIcon)`
  font-size: 20px;
`;

const CommentDescription = styled.p`
  color: #222;
  word-break: break-all;
`;
const CommentReplyingTo = styled.span`
  margin-right: 15px;
  color: purple;
  font-weight: 600;
`;
const CommentActions = styled.div`
  margin-top: 10px;
`;
const CommentLikeBtn = styled.button``;
const CommentReplyBtn = styled.button`
  border: 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 15px;
  background: transparent;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.2s ease-out;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
const CommentToolTip = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  & button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }
`;

const CommentToolTipBtn = styled.button`
  position: relative;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 22px;
  transition: all 0.3s ease-out;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
const CommentToolTipBtns = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  border-radius: 5px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  opacity: 0;
  & > *:first-child {
    border-bottom: 1px solid #999;
  }
  &.active {
    opacity: 1;
  }
`;
const CommentToolTipActionBtn = styled.button`
  padding: 10px 0;
  width: 100%;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export {
  CommentItemBox,
  CommentUserPhoto,
  CommentPhotoCircle,
  CommentTextBox,
  CommentUsername,
  CommentDescription,
  CommentReplyingTo,
  CommentActions,
  CommentLikeBtn,
  CommentReplyBtn,
  CommentToolTip,
  CommentToolTipBtn,
  CommentToolTipBtns,
  CommentToolTipActionBtn,
  CommentAdminBox,
  CommentAdminText,
  CommentAdminIcon,
};
