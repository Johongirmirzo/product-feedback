import React from "react";
import { BiExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { removeUser } from "../../../../redux/reducers/user";
import {
  AdminLogoutBox,
  AdminUsername,
  AdminLogoutBtn,
} from "./AdminLogout.styled";
import { logoutUser } from "../../../../api/user";

const AdminLogout = () => {
  const username = useSelector((state: RootState) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutUserClick = () => {
    (async () => {
      try {
        await logoutUser();
        dispatch(removeUser());
        navigate("/login");
      } catch (err) {
        console.error(err);
      }
    })();
  };
  return (
    <AdminLogoutBox>
      <AdminUsername>
        <span>Admin</span>
        {username}
      </AdminUsername>
      <AdminLogoutBtn onClick={handleLogoutUserClick}>
        <BiExit />
      </AdminLogoutBtn>
    </AdminLogoutBox>
  );
};

export default AdminLogout;
