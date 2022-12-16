import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
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
} from "./Navbar.styled";
import type { RootState } from "../../redux/store";
import { removeUser } from "../../redux/reducers/user";
import { logoutUser } from "../../api/user";
import { URL } from "../../config/endpoints";
import Loader from "../Loader/Loader";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const closeMenu = () => {
      console.log("Parent", isMenuOpen);
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.body.addEventListener("click", closeMenu);
      return () => {
        document.body.removeEventListener("click", closeMenu);
      };
    }
  }, [isMenuOpen]);
  const openMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogoutClick = () => {
    (async () => {
      try {
        setIsLoading(true);
        await logoutUser();
        setIsLoading(false);
        dispatch(removeUser());
        navigate("/login");
      } catch (err) {
        setIsLoading(false);
        console.error(err);
      }
    })();
  };

  return (
    <NavHeader>
      {isLoading && <Loader />}
      <Nav>
        <NavLogo>
          <Link to="/">Product Feedback</Link>
        </NavLogo>
        <NavAccount>
          <NavAccountUsername>{user.username}</NavAccountUsername>
          <NavAccountBox className={isMenuOpen ? "menuOpen" : ""}>
            {user.userPhoto ? (
              <NavAccountPicture
                src={`${
                  user.userPhoto.includes("https")
                    ? user.userPhoto
                    : `${URL}${user.userPhoto}`
                }`}
                alt={`${user.username} is current profile owner`}
                onClick={openMenu}
              />
            ) : (
              <NavCircle onClick={openMenu}>
                {user.username.slice(0, 1)}
              </NavCircle>
            )}
            <NavList>
              <Link to="/profile" style={{ display: "block" }}>
                <NavItem>Profile</NavItem>
              </Link>
              <NavItem onClick={handleLogoutClick}>Log Out</NavItem>
            </NavList>
          </NavAccountBox>
        </NavAccount>
      </Nav>
    </NavHeader>
  );
};

export default Navbar;
