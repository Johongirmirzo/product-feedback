import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { FileUploader } from "react-drag-drop-files";
import { Progress } from "@chakra-ui/react";

import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../../../styles/FormStyles.styled";
import {
  UploadImageModalPhotoBox,
  UploadImageModalPhoto,
  UploadImageModalBtnsBox,
  UploadImageModalCancelBtn,
  UploadImageModalImageAddBtn,
  UploadImageModalBox,
  UploadImageText,
  UploadImageModalBtn,
  UploadImageModalInput,
} from "./UploadImageModal.styled";
import { UploadImageModalProps } from "./UploadImageModal.types";

const fileTypes = ["JPG", "JPEG", "SVG", "PNG", "WEBP"];

const UploadImageModal = ({
  isOpen,
  isLoading,
  errors,
  onClose,
  uploadPhoto,
  closeAlertMessage,
}: UploadImageModalProps) => {
  const [photo, setPhoto] = useState("");
  const [uploadedPhoto, setUploadedPhoto] = useState();

  const handleUploadPhoto = (e: any) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
    setUploadedPhoto(e.target.files[0]);
  };
  const removePhoto = () => {
    setPhoto("");
  };
  const handleUploadPhotoClick = () => {
    uploadPhoto(uploadedPhoto);
    setPhoto("");
  };

  const handleChange = (file: any) => {
    setPhoto(URL.createObjectURL(file));
    setUploadedPhoto(file);
  };
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent my="5" width={{ base: "90%", md: "60%" }}>
        <ModalCloseButton />
        <ModalBody>
          {errors.length > 0 && (
            <div style={{ position: "relative", paddingTop: "150px" }}>
              {errors.map((err, i) => (
                <Alert key={i} style={{ marginTop: "10px" }}>
                  <AlertText>{err}</AlertText>
                  <AlertCancelBtn onClick={closeAlertMessage.bind(null, i)}>
                    x
                  </AlertCancelBtn>
                </Alert>
              ))}
            </div>
          )}

          {photo ? (
            <UploadImageModalPhotoBox>
              <UploadImageModalPhoto src={photo} alt="Preview image" />
              <UploadImageModalBtnsBox>
                <UploadImageModalCancelBtn onClick={removePhoto}>
                  Cancel
                </UploadImageModalCancelBtn>
                <UploadImageModalImageAddBtn onClick={handleUploadPhotoClick}>
                  Add
                </UploadImageModalImageAddBtn>
              </UploadImageModalBtnsBox>
            </UploadImageModalPhotoBox>
          ) : (
            <UploadImageModalBox>
              {isLoading ? (
                <Progress
                  w="100%"
                  h="20px"
                  hasStripe
                  isIndeterminate
                  background="#c7c7c7"
                />
              ) : (
                <>
                  <UploadImageText>
                    Drag & Drop
                    <br />
                    Any Image
                    {!photo && (
                      <FileUploader
                        handleChange={handleChange}
                        name="file"
                        types={fileTypes}
                      />
                    )}
                  </UploadImageText>
                  <Text color="#777" my="5">
                    or
                  </Text>
                  <UploadImageModalBtn>
                    Choose a local file
                    <UploadImageModalInput
                      onChange={handleUploadPhoto}
                      type="file"
                      id="file"
                      name="avatar"
                      placeholder=""
                    />
                  </UploadImageModalBtn>
                </>
              )}
            </UploadImageModalBox>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UploadImageModal;
