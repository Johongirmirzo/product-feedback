import styled from "styled-components";

const SidebarBannerBox = styled.div`
  border-radius: 20px;
  padding-left: 30px;
  height: 200px;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(
      to right,
      rgb(87, 179, 236),
      rgba(87, 179, 236, 0.1) 45%
    ),
    linear-gradient(
      to right,
      hsl(276, 100%, 58%),
      hsla(276, 100%, 58%, 0.4) 30%
    ),
    linear-gradient(to right, hsl(306, 54%, 54%), rgba(203, 77, 190, 0.7) 50%),
    linear-gradient(to right, rgb(203, 153, 77), rgba(203, 153, 77, 0.3) 90%);
`;
const SidebarBannerTextBox = styled.div`
  margin-bottom: 30px;
`;
const SidebarBannerTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 2rem;
  color: #fff;
`;
const SidebarBannerDescription = styled.p`
  font-weight: 600;
  color: #e7e7e7;
`;

export {
  SidebarBannerBox,
  SidebarBannerTextBox,
  SidebarBannerTitle,
  SidebarBannerDescription,
};
