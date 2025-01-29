import { useState } from "react";
import Modal from "../Modal";
import * as S from "./Modal.styles"; 

export default function ConfirmModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} modalType="confirm">
        <S.ConfirmText>완성된 코스를 기반으로 <br /> AI기반 예산을 짜기를 시작하시겠습니까?</S.ConfirmText>
      </Modal>
    </>
  );
}
