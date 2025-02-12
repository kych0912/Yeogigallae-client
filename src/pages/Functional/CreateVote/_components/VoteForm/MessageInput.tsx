import { useController, Control } from "react-hook-form";
import * as S from "./Message.styles";
import SkeletonForm from "./Skeleton/SkeletonForm";

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

  return (
    <SkeletonForm fullcontent>
      <S.MessageInput
        placeholder={"친구에게 전달할\n메시지를 작성하세요."}
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
      />
    </SkeletonForm>
  );
}
