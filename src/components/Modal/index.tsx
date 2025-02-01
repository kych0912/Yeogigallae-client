import { useEffect } from "react";
import * as S from "./Modal.styles";
import { Button } from "../Button";
import { useImageStore } from "../../store/useImageStore";
import { useImageMutation } from "../../react-query/mutation/useImageMutation";
import { ImageSelectRequest } from "../../types/functionalTypes/functionalTypes";
import { mockSelectedImage } from "../../mocks/imageMock"; 

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType: "confirm" | "select"; 
  children: React.ReactNode;
  isImageModal?: boolean; 
}

export default function Modal({ isOpen, onClose, modalType, children, isImageModal = false }: ModalProps) {
  const { selectedImage } = useImageStore();
  const mutation = useImageMutation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (isImageModal) {
      const requestData: ImageSelectRequest = {
        userId: 1,
        imageUrl: selectedImage || mockSelectedImage,
      };

      mutation.mutate(requestData);
    }
    onClose();
  };

  return (
    <S.StyledContainer onClick={onClose}>
      <S.ModalContent>
        {modalType === "confirm"}
        {modalType === "select"}
        {children}
        <S.ButtonGroup>
          <Button style={{ background: "#434343" }} variant="contained" size="large" onClick={onClose}>
            취소
          </Button>

          {/* isImageModal -> handleConfirm | onClose */}
          <Button 
            color="primary" 
            variant="contained" 
            size="large" 
            onClick={isImageModal ? handleConfirm : onClose}
          >
            확인
          </Button>
        </S.ButtonGroup>
      </S.ModalContent>
    </S.StyledContainer>
  );
}
