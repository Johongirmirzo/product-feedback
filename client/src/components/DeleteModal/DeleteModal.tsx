import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { DeleteModalInput } from "./DeleteModal.styled";

type DeleteCommentModalProps = {
  onClose: () => void;
  deleteFeedback?: () => void;
  deleteCommentFromStore?: () => void;
  deleteAccount?: () => void;
  isOpen: boolean;
  text?: string;
};

const DeleteCommentModal = ({
  onClose,
  deleteFeedback,
  deleteCommentFromStore,
  deleteAccount,
  isOpen,
  text,
}: DeleteCommentModalProps) => {
  const [agreementTerm, setAgreementTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const updateConfirmation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreementTerm(e.target.value);
  };
  const handleDeleteFeedbackClick = () => {
    if (deleteFeedback) {
      setIsLoading(true);
      deleteFeedback();
      setIsLoading(false);
    } else if (deleteCommentFromStore) {
      setIsLoading(true);
      deleteCommentFromStore();
      setIsLoading(false);
    } else if (deleteAccount) {
      setIsLoading(true);
      deleteAccount();
      setIsLoading(false);
    }

    onClose();
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} p="5">
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent pb="5">
        <ModalHeader>
          <Heading>You Are Deleting {text}</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody color="#555" fontWeight="600">
          <Text mb="4">
            Warning!!! You are deleting {text}. Beware this action can't be
            undone. All the data that associated with this {text} will deleted!
            Once you confirm that you want to delete {text}, you can't restore
            it back. If you are really sure then fill input with "I'm sure that
            I want to delete this {text}".
          </Text>

          <Text fontWeight="bold" mb="2">
            Type: I'm sure that I want to delete this {text}
          </Text>
          <DeleteModalInput
            type="text"
            onChange={updateConfirmation}
            value={agreementTerm}
            placeholder={`I'm sure that I want to delete this ${text}`}
          />
          <Button
            onClick={handleDeleteFeedbackClick}
            disabled={
              agreementTerm !== `I'm sure that I want to delete this ${text}` ||
              false
                ? true
                : false
            }
            colorScheme="red"
            w="100%"
            mt="3"
            type="submit"
          >
            {isLoading
              ? "Performing requested action..."
              : "I understand the consequences"}
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DeleteCommentModal;
