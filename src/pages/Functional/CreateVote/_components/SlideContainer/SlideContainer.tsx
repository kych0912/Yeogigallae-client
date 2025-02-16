import * as S from "./Styles";
import { useVoteForm } from "../../../../../hooks/useForm/useVoteForm";
import { useVoteFormContext } from "../../../context/VoteFormContext";
import { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SkeletonForm, { setGlobalLoadingState } from "../VoteForm/Skeleton/SkeletonForm";
import { useRoomListQuery } from "../../../../../react-query/queries/functional/roomListQuery";

export default function SlideContainer() {
  const { roomId, setRoomId, tripPlanType } = useVoteFormContext();
  const { control, reset } = useVoteForm(tripPlanType, roomId);
  const navigate = useNavigate(); 

  const { data, isLoading, isError } = useRoomListQuery();
  const rooms = data?.result.rooms || [];

  const [roomList, setRoomList] = useState<number[]>([roomId]);

  useEffect(() => {
    setGlobalLoadingState(isLoading);  
    if (!isLoading && !isError && rooms.length > 0) {
      setRoomList(rooms.map(room => room.roomId));
    }
  }, [isLoading, isError, rooms]);

  const handleCreateNewRoom = () => {
    navigate("/mypage/room"); 
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
              <SkeletonForm slidewidth>
                <S.Slide $isCreateButton={true} $active={false} onClick={handleCreateNewRoom}>
                  <S.PlusIcon />
                </S.Slide>
              </SkeletonForm>
              <SkeletonForm smallwidth>
                <S.Label $active={true} $isCreateButton={true}>생성하기</S.Label>
              </SkeletonForm>  
            </S.SlideContainer>

            {roomList.map((id) => (
              <S.SlideContainer key={id}>
                <SkeletonForm slidewidth>
                  <S.Slide
                    $active={id === field.value}
                    onClick={() => {
                      field.onChange(id);
                      setRoomId(id);
                      reset(); 
                    }}
                  >
                  </S.Slide>
                </SkeletonForm>
                <SkeletonForm smallwidth>
                  <S.Label $active={id === field.value}>
                    {id.toString().length > 3 ? `${id.toString().slice(0, 2)}..` : id}
                  </S.Label>
                </SkeletonForm>
              </S.SlideContainer>
            ))}
          </>
        )}
      />
    </S.CustomCard>
  );
}
