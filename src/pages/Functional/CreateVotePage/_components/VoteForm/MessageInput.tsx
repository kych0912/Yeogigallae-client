import React from "react";
import * as S from "./Message.styles";

const MessageInput: React.FC = () => {
  return (
    <S.MessageInput placeholder={"친구에게 전달할\n메시지를 작성하세요."} />
  );
};

export default MessageInput;