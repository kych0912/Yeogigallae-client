import { useModalStore } from "../../store/modal";
import { Button } from "../Button";
import ConfirmModal from "./ConfirmModal";
import { useState } from "react";
import ImageModal from "./ImageModal";
import * as S from "./Modal.styles";
import { createPortal } from "react-dom";

export default function Modal() {
  const { config, isOpen, hideModal } = useModalStore();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if(!config || !isOpen) return null;

  //큰 틀은 유지하면서 type에 따라 다른 모달 렌더링
  const renderModal = () => {

    switch(config.type){
      case("confirm"):
        return <ConfirmModal config={config} />
      case("image"):
        return <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      default:
        return null;
    }
  }

  //confirm 버튼 클릭 시 타입에 따라 다르게 작동
  const handleConfirm = () => {
    //이미지일 경우 selectedImage를 콜백 함수에 전달
    switch(config.type){
      case("image"):
        if(selectedImage){
          config.onConfirm(selectedImage); 
          hideModal();
        }
        break;
      default:
        //아닐 경우 콜백 함수 실행
        config.onConfirm();
        hideModal();
        break;
    }
    setSelectedImage(null);
  };

  const handleCancel = () => {
    if(config.onCancel){
      config.onCancel();
    }
    setSelectedImage(null);
    hideModal();
  }


  return(
    createPortal(
      <S.StyledContainer onClick={handleCancel}>

      <S.ModalContent onClick={(e)=>e.stopPropagation()} gap="1.5rem">
        {renderModal()}
        <S.ButtonGroup>

          <Button style={{ background: "#434343" }} variant="contained" size="large" onClick={handleCancel}>
            {config.cancelText || "취소"}
          </Button>

          <Button 
            color="primary" 
            variant="contained" 
            size="large" 
            onClick={handleConfirm}
          >
            {config.confirmText || "확인"}
          </Button>
        </S.ButtonGroup>
      </S.ModalContent>
    </S.StyledContainer>,
    document.body
  ))
}



