import Modal from "../Modal";
import * as S from "./Modal.styles"; 

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfirmModal({ isOpen, onClose }: ConfirmModalProps) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} modalType="confirm">
        <S.ConfirmText>
          완성된 코스를 기반으로 <br /> 
          AI기반 예산을 짜기를 시작하시겠습니까?
        </S.ConfirmText>
      </Modal>
    </>
  );
}
