import { useState, useEffect } from "react";
import { useController, Control } from "react-hook-form";
import * as S from "./Message.styles";
import SkeletonForm from "./Skeleton/SkeletonForm";
import { Toast } from "../../../../../components/Calendar/CompleteButton.styles";

interface MessageInputProps {
  control: Control<any>;
  tripPlanType: "SCHEDULE" | "COURSE";
  roomId: number;
}

export default function MessageInput({ control, tripPlanType, roomId }: MessageInputProps) {
  const fieldName = tripPlanType === "COURSE" ? "courseDetails.message" : "scheduleDetails.message";
  const storageKey = `message_${tripPlanType}_${roomId}`;
  const savedMessage = localStorage.getItem(storageKey) || "";

  const { field } = useController({
    name: fieldName,
    control,
    defaultValue: savedMessage,
  });

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (field.value.length > 0) {
      setShowToast(false);
    }
  }, [field.value]);

  return (
    <>
      <SkeletonForm fullcontent>
        <S.MessageInput
          placeholder={"친구에게 전달할\n메시지를 작성하세요."}
          value={field.value}
          maxLength={25} 
          onChange={(e) => {
            const newValue = e.target.value.slice(0, 25);
            field.onChange(newValue);
            if (newValue.length === 0) {
              setShowToast(true);
            } else {
              setShowToast(false);
            }
          }}
          onBlur={() => {
            if (!field.value) {
              setShowToast(false);
            }
          }}
          />
          {showToast && <Toast>메시지를 입력해주세요! (최대 25자)</Toast>}
      </SkeletonForm>

    </>
  );
}
