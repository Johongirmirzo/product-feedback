import styled from "styled-components";

const ProfileBox = styled.section`
  max-width: 1160px;
  width: 90%;
  margin: 50px auto;
`;
const ProfileFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const ProfileSidebar = styled.aside`
  margin-top: 10px;
  padding: 20px;
  width: 200px;
  height: 120px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #f7f7f7;
  @media (min-width: 768px) {
    position: sticky;
    top: 100px;
    margin-top: 110px;
  }
`;
const ProfileNav = styled.nav``;
const ProfileList = styled.ul``;
const ProfileItem = styled.li`
  margin-bottom: 20px;
  font-size: 17px;
  & > * {
    &.account {
      font-weight: 700;
    }
    &.personal {
      font-weight: 700;
    }
  }
`;

export {
  ProfileBox,
  ProfileFlexContainer,
  ProfileSidebar,
  ProfileNav,
  ProfileList,
  ProfileItem,
};
