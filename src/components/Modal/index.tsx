import { useEffect } from "react";
import * as S from "./Modal.styles";
import { Button } from "../Button";

export default function Modal({ isOpen, onClose, modalType, children }: { 
  isOpen: boolean; 
  onClose: () => void; 
  modalType: "confirm" | "select"; 
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <S.StyledContainer onClick={onClose}>
        <S.ModalContent>
          {modalType === "confirm"}
          {modalType === "select"}
          {children}
          <S.ButtonGroup>
            <Button style={{ background: "#434343" }} variant= "contained" size="large" onClick={onClose}>
              취소
            </Button>
            <Button color="primary" variant= "contained" size="large" onClick={onClose}>
              확인
            </Button>
          </S.ButtonGroup>
        </S.ModalContent>
    </S.StyledContainer>
  );
}

