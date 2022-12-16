import styled from "styled-components";

const NavHeader = styled.header`
  background: hsl(231, 41%, 10%);
  padding: 15px;
  @media (min-width: 768px) {
    padding: 15px 35px;
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavLogo = styled.div`
  & * {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 22px;
    text-transform: capitalize;
  }
`;
const NavAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const NavAccountUsername = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: right;
`;
const NavAccountPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  object-fit: cover;
  cursor: pointer;
`;
const NavAccountBox = styled.div`
  position: relative;
  &.menuOpen > ul {
    top: 80px;
    opacity: 1;
    visibility: visible;
  }
`;
const NavCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  background: #123;
  cursor: pointer;
`;
const NavList = styled.ul`
  position: absolute;
  top: 110px;
  right: 10px;
  width: 150px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: #fff;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-out;
`;
const NavItem = styled.li`
  padding: 10px 20px;
  list-style: none;
  font-size: 17px;
  cursor: pointer;
  & > * {
    color: #222;
    text-decoration: none;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
const NavHr = styled.hr`
  margin: 10px 0;
`;

export {
  NavHeader,
  Nav,
  NavLogo,
  NavAccount,
  NavAccountUsername,
  NavAccountPicture,
  NavAccountBox,
  NavCircle,
  NavList,
  NavItem,
  NavHr,
};
