import { useState, useEffect } from "react";
import { useController, Control } from "react-hook-form";
import * as S from "./Message.styles";

interface MessageInputProps {
  control: Control<any>;
  tripPlanType: "SCHEDULE" | "COURSE"; 
  roomId: number; 
}

export default function MessageInput({ control, tripPlanType, roomId }: MessageInputProps) {
  const fieldName =
    tripPlanType === "COURSE" ? "courseDetails.message" : "scheduleDetails.message"; 

  const storageKey = `message_${tripPlanType}_${roomId}`; 
  const savedMessage = localStorage.getItem(storageKey) || "";

  const { field } = useController({
    name: fieldName,
    control,
    defaultValue: savedMessage, 
  });

  const [message, setMessage] = useState(savedMessage); 

  useEffect(() => {
    setMessage(field.value);
  }, [field.value]);

  useEffect(() => {
    localStorage.setItem(storageKey, message); 
  }, [message, storageKey]);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    field.onChange(e.target.value); 
  };

  return (
    <S.MessageInput
      placeholder={"친구에게 전달할\n메시지를 작성하세요."}
      value={message}
      onChange={handleMessageChange}
    />
  );
}
