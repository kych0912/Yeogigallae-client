import * as S from "./Styles";
import { useVoteForm } from "../../../../../hooks/useForm/useVoteForm";
import { useVoteFormContext } from "../../../context/VoteFormContext";
import { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SkeletonForm, { setGlobalLoadingState } from "../VoteForm/Skeleton/SkeletonForm";
import { useRoomListQuery } from "../../../../../react-query/queries/functional/roomListQuery";

interface SlideContainerProps {
  hiddenRooms: number[];
}

export default function SlideContainer({ hiddenRooms }: SlideContainerProps) {
  const { roomId, setRoomId, tripPlanType } = useVoteFormContext();
  const { control, reset, setValue } = useVoteForm(tripPlanType, roomId);
  const navigate = useNavigate();
  const { data, isLoading, isError } = useRoomListQuery();
  const rooms = data?.result.rooms || [];

  const [roomList, setRoomList] = useState<
    { roomId: number; roomName: string; profileImage?: string }[]
  >([]);

  useEffect(() => {
    setGlobalLoadingState(isLoading);
    if (!isLoading && !isError && rooms.length > 0) {
      const filteredRooms = rooms
        .filter((room) => !hiddenRooms.includes(room.roomId))
        .sort((a, b) => b.roomId - a.roomId)
        .map((room) => ({
          roomId: room.roomId,
          roomName: room.roomName || `방 ${room.roomId}`,
          profileImage: room.members?.[0]?.profileImage,
        }));

      setRoomList(filteredRooms);

      if (filteredRooms.length > 0) {
        const firstRoomId = filteredRooms[0].roomId;
        setRoomId(firstRoomId);
        setValue("roomId", firstRoomId);
      }
    }
  }, [isLoading, isError, rooms, hiddenRooms, setRoomId, setValue]);

  const handleCreateNewRoom = () => {
    navigate("/mypage/room");
  };

  return (
    <S.CustomCard>
      <Controller
        name="roomId"
        control={control}
        defaultValue={roomList[1]?.roomId}
        render={({ field }) => (
          <>
            <S.SlideContainer $isFirst={true}>
              <SkeletonForm slidewidth>
                <S.Slide $isCreateButton={true} $active={false} onClick={handleCreateNewRoom}>
                  <S.PlusIcon />
                </S.Slide>
              </SkeletonForm>
              <SkeletonForm smallwidth>
                <S.Label $active={true} $isCreateButton={true}>
                  생성하기
                </S.Label>
              </SkeletonForm>
            </S.SlideContainer>

            {roomList.map(({ roomId: id, roomName, profileImage }) => (
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
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="프로필 이미지"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    ) : (
                      <S.DefaultImage />
                    )}
                  </S.Slide>
                </SkeletonForm>
                <SkeletonForm smallwidth>
                  <S.Label $active={id === field.value}>
                    {roomName.length > 5 ? `${roomName.slice(0, 3)}..` : roomName}
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
