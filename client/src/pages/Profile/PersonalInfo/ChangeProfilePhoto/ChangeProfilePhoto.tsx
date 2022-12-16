import React, { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineCamera } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { changeProfilePhoto } from "../../../../redux/reducers/user";
import { changeCommentPhoto } from "../../../../redux/reducers/comment";
import UploadImageModal from "./UploadImageModal/UploadImageModal";

import {
  ChangeProfilePhotoBox,
  ChangeProfileImgCon,
  ChangeProfilePhotoImg,
  ChangeProfilePhotoPlaceholder,
  ChangeProfilePhotoUploadText,
  ChangeProfilePhotoText,
} from "./ChangeProfilePhoto.styled";
import { URL } from "../../../../config/endpoints";
import { changeProfilePicture } from "../../../../api/user";

const ChangeProfilePhoto = () => {
  const {
    userPhoto,
    username,
    id,
    isThirdPartyAuth,
    accessToken,
    refreshToken,
  } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const uploadPhoto = (uploadedPhoto: any) => {
    const imageTypes = ["webp", "jpeg", "jpg", "png", "svg"];
    const imageFile = uploadedPhoto;

    console.log(imageFile);
    if (!imageTypes.includes(imageFile.type.split("/")[1])) {
      if (imageFile.size > 1000000) {
        setErrors([
          "You can only upload images of types: webp, jpeg, jpg, png, svg",
          "Maximum allowed image file size is 1mb",
        ]);
      } else {
        setErrors([
          "You can only upload images of types: webp, jpeg, jpg, png, svg",
        ]);
      }
    } else {
      const formData = new FormData();
      formData.append("avatar", imageFile);
      console.log(imageFile);
      (async () => {
        try {
          setIsLoading(true);
          const response = await changeProfilePicture(
            id,
            formData,
            accessToken,
            refreshToken
          );
          setIsLoading(false);
          setErrors([]);
          console.log("Image upload response", response);
          if (response.data.isImageTooLarge) {
            setErrors([response.data.message]);
            setIsLoading(false);

            onClose();
          } else {
            dispatch(
              changeProfilePhoto({ imagePath: response.data.user.profilePic })
            );
            dispatch(
              changeCommentPhoto({
                imagePath: response.data.user.profilePic,
                userId: id,
              })
            );
            onClose();
          }
        } catch (err) {
          setIsLoading(false);

          console.error(err);
        }
      })();
    }
  };
  const closeAlertMessage = (index: number) => {
    setErrors(errors.filter((err, i) => i !== index));
  };
  console.log(userPhoto, 999999999999);
  return (
    <ChangeProfilePhotoBox>
      <UploadImageModal
        isOpen={isOpen}
        onClose={onClose}
        uploadPhoto={uploadPhoto}
        errors={errors}
        closeAlertMessage={closeAlertMessage}
        isLoading={isLoading}
      />
      <ChangeProfileImgCon onClick={onOpen}>
        {userPhoto ? (
          <ChangeProfilePhotoImg
            src={userPhoto}
            altText={`${username} profile image`}
          />
        ) : (
          <ChangeProfilePhotoPlaceholder>
            {username.slice(0, 1)}
          </ChangeProfilePhotoPlaceholder>
        )}

        <ChangeProfilePhotoUploadText>
          <AiOutlineCamera /> Upload
        </ChangeProfilePhotoUploadText>
      </ChangeProfileImgCon>
      <ChangeProfilePhotoText>Change your profile image</ChangeProfilePhotoText>
    </ChangeProfilePhotoBox>
  );
};

export default ChangeProfilePhoto;
