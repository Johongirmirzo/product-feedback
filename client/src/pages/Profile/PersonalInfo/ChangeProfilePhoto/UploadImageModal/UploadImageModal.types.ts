export type UploadImageModalProps = {
    isOpen: boolean;
    isLoading: boolean;
    errors: string[];
    onClose: () => void;
    uploadPhoto: (uploadedPhoto: any) => void;
    closeAlertMessage(index: number): void;
  };