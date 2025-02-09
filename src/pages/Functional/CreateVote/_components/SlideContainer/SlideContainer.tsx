import * as S from "./Styles";
import { useVoteForm } from "../../../../../hooks/useForm/useVoteForm";
import { useVoteFormContext } from "../../../context/VoteFormContext";
import { useState } from "react";
import { Controller } from "react-hook-form";

export default function SlideContainer() {
  const { roomId, setRoomId, tripPlanType } = useVoteFormContext();
  const { control, reset } = useVoteForm(tripPlanType, roomId);

  const [roomList, setRoomList] = useState<number[]>([roomId]);

  const handleCreateNewRoom = () => {
    const newRoomId = Math.max(...roomList) + 1;
    setRoomList((prev) => [...prev, newRoomId]);
    setRoomId(newRoomId);
    reset(); 
  };

  return (
    <S.CustomCard>
      <Controller
        name="roomId"
        control={control}
        defaultValue={roomId}
        render={({ field }) => (
          <>
            <S.SlideContainer $isFirst={true}>
              <S.Slide $isCreateButton={true} $active={false} onClick={handleCreateNewRoom}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5v14m7-7H5"
                    stroke="#3b46f1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </S.Slide>
              <S.Label $active={true} $isCreateButton={true}>생성하기</S.Label>
            </S.SlideContainer>

            {roomList.map((id) => (
              <S.SlideContainer key={id}>
                <S.Slide
                  $active={id === field.value}
                  onClick={() => {
                    field.onChange(id);
                    setRoomId(id);
                    reset(); 
                  }}
                >
                </S.Slide>
                <S.Label $active={id === field.value}>
                {id.toString().length > 3 ? `${id.toString().slice(0, 2)}..` : id}
                </S.Label>
              </S.SlideContainer>
            ))}
          </>
        )}
      />
    </S.CustomCard>
  );
}
