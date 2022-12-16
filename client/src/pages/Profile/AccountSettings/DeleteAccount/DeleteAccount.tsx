import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../../redux/reducers/user";
import type { RootState } from "../../../../redux/store";
import {
  DeleteAccountBox,
  DeleteAccountHeader,
  DeleteAccountTitle,
  DeleteAccountDescription,
  DeleteAccountBtn,
} from "./DeleteAccount.styled";
import DeleteModal from "../../../../components/DeleteModal/DeleteModal";
import { deleteAccount, logoutUser } from "../../../../api/user";

const DeleteAccount = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    id: userId,
    accessToken,
    refreshToken,
    isAdmin,
  } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteAccountClick = () => {
    (async () => {
      try {
        await deleteAccount(userId, accessToken, refreshToken);
        await logoutUser();
        dispatch(removeUser());
        navigate("/register");
      } catch (err) {
        console.error(err);
      }
    })();
  };
  return !isAdmin ? (
    <>
      <DeleteAccountBox>
        <DeleteModal
          isOpen={isOpen}
          onClose={onClose}
          text="Account"
          deleteAccount={handleDeleteAccountClick}
        />
        <DeleteAccountHeader>
          <DeleteAccountTitle>Delete Account</DeleteAccountTitle>
          <DeleteAccountDescription>
            Permanently delete your account and all data associated with it.
            Please beware that deleted account can't be recoved!!!
          </DeleteAccountDescription>
          <DeleteAccountBtn onClick={onOpen}>
            Delete My Account
          </DeleteAccountBtn>
        </DeleteAccountHeader>
      </DeleteAccountBox>
    </>
  ) : (
    <p></p>
  );
};

export default DeleteAccount;
