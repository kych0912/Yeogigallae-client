import { useModalStore } from "../../store/modal";
import { ImageModalConfig, ConfirmModalConfig } from "../../store/modal";

/**
 * @description Modal 관리를 위한 Modal service
 * @example
 * confirm 모달 표시
 * modal.confirm.show({
 *   message: "저장하시겠습니까?",
 *   onConfirm: async () => {
 *     await saveData();
 *   }
 * });
 * 
 * image 모달 표시
 * modal.image.show({
 *   onConfirm: (selectedImage: string) => {
 *     console.log(selectedImage);
 *   }
 * });  
 */

class ModalService{
    private store = useModalStore;

    //confirm 모달 표시
    confirm = {
        show: ( props: Omit<ConfirmModalConfig,"type"> ) => {
            this.store.getState().showModal({
                message:props.message,
                onConfirm:props.onConfirm,
                onCancel:props.onCancel,
                confirmText:props.confirmText,
                cancelText:props.cancelText,
                type:"confirm"

            })
        },
        hide: () =>{
            this.store.getState().hideModal();
        }
    }

    //이미지 모달 표시
    //onConfirm만 전달하면 됨
    //onConfirm은 선택된 이미지를 전달하는 콜백 함수
    image = {
        show: ( props: Omit<ImageModalConfig,"type"> ) => {
            this.store.getState().showModal({
                onConfirm:props.onConfirm,
                onCancel:props.onCancel,
                confirmText:props.confirmText,
                cancelText:props.cancelText,
                type:"image"
            })
        },
        hide: () =>{
            this.store.getState().hideModal();
        }
    }
}

const modal = new ModalService();
export default modal;