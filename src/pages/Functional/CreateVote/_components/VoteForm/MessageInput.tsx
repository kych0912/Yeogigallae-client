import * as S from "./Message.styles";

export default function MessageInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <S.MessageInput
      placeholder={"친구에게 전달할\n메시지를 작성하세요."}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
