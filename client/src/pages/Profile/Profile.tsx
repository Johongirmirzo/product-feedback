import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  ProfileBox,
  ProfileFlexContainer,
  ProfileSidebar,
  ProfileNav,
  ProfileList,
  ProfileItem,
} from "./Profile.styled";

const Profile = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    if (location.pathname === "/profile/personalInfo") {
      setActiveLink("personal");
    } else {
      setActiveLink("account");
    }
  }, [location]);
  console.log(location);
  return (
    <ProfileBox>
      <ProfileFlexContainer>
        <ProfileSidebar>
          <ProfileNav>
            <ProfileList>
              <ProfileItem>
                <Link
                  to="/profile"
                  className={activeLink === "account" ? "account" : ""}
                >
                  Account Settings
                </Link>
              </ProfileItem>
              <ProfileItem>
                <Link
                  to="/profile/personalInfo"
                  className={activeLink === "personal" ? "personal" : ""}
                >
                  Personal Info
                </Link>
              </ProfileItem>
            </ProfileList>
          </ProfileNav>
        </ProfileSidebar>
        <Outlet />
      </ProfileFlexContainer>
    </ProfileBox>
  );
};

export default Profile;
