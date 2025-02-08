import { ConfirmModalConfig } from "../../store/modal";
import * as S from "./Modal.styles"; 

interface ConfirmModalProps {
  config: ConfirmModalConfig;
}

export default function ConfirmModal({config}: ConfirmModalProps) {
  return (
    <>
      <S.Message>{config?.message}</S.Message>
    </>
  );
}
