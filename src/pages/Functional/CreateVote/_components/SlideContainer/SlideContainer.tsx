import * as S from "./Styles";
import { useVoteForm } from "../../../../../hooks/useForm/useVoteForm";
import { useVoteFormContext } from "../../../context/VoteFormContext";
import { useState } from "react";
import { Controller } from "react-hook-form";
import SkeletonForm from "../VoteForm/Skeleton/SkeletonForm";
// import { useNavigate } from "react-router-dom"; // 네비게이션 주석 처리
// import { useRoomListQuery } from "../../../../../react-query/queries/functional/roomListQuery"; // API 주석 처리

export default function SlideContainer() {
  const { roomId, setRoomId, tripPlanType } = useVoteFormContext();
  const { control, reset } = useVoteForm(tripPlanType, roomId);
  // const navigate = useNavigate(); // 주석 처리

  // 기존 상태 유지 (API 대신 직접 관리)
  const [roomList, setRoomList] = useState<number[]>([roomId]);


  // "생성하기" 버튼 클릭 시 새로운 ID 추가















  const handleCreateNewRoom = () => {
    const newRoomId = roomList.length > 0 ? Math.max(...roomList) + 1 : 1;

    if (!roomList.includes(newRoomId)) {
      setRoomList([...roomList, newRoomId]);























    }
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

            {/* 생성된 방 목록 렌더링 */}
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