import { useController, Control } from "react-hook-form";
import * as S from "./Message.styles";

interface MessageInputProps {
  control: Control<any>;
  tripPlanType: "VOTE" | "COURSE"; // ✅ tripPlanType 추가
}

export default function MessageInput({ control, tripPlanType }: MessageInputProps) {
  const { field } = useController({
    name: tripPlanType === "VOTE" ? "description_VOTE" : "description_COURSE", // ✅ 각 탭별로 description 분리
    control,
    defaultValue: "",
  });

  return (
    <S.MessageInput
      placeholder={"친구에게 전달할\n메시지를 작성하세요."}
      value={field.value ?? ""}
      onChange={field.onChange}
    />
  );
}
