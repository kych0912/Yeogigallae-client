import { useState } from "react";
import * as S from "./Styles";
import Floating from "../../../../assets/icons/Floating.svg";
import MyFloating from "../../../../assets/icons/MyFloating.svg";
import EditFloating from "../../../../assets/icons/EditFloating.svg";
import { useNavigate } from "react-router-dom";
import useVoteRoomMutation from "../../../../react-query/mutation/useVoteRoomMutation";
import useVoteRoomStore from "../../../../store/useVoteRooomStore"; 

export default function FloatingMenu() {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
    const { tripId } = useVoteRoomStore(); 
    
    const { mutate: voteRoom, isPending } = useVoteRoomMutation(); 

    const toggleMenu = () => setIsActive(!isActive);
    const closeMenu = () => setIsActive(false);

    const handleVoteClick = () => {
        voteRoom(
            { tripId },
            {
                onSuccess: () => {
                    console.log("투표 방 생성 성공!");
                    navigate("/vote");
                    closeMenu();
                },
            }
        );
    };

    const handleEditClick = () => {
        navigate("/functional");
        closeMenu();
    };

    return (
        <S.FloatingContainer $isActive={isActive}>
            <S.Overlay $isActive={isActive} onClick={closeMenu} />

            <S.FloatingButtonStyled $isMain $isActive={isActive} onClick={toggleMenu}>
                <img src={Floating} alt="Floating Icon" />
            </S.FloatingButtonStyled>

            {/* 기능별 화면 이동 */}
            <S.SubButton $isActive={isActive} onClick={handleEditClick}>
                <img src={EditFloating} alt="Edit Floating Icon" />
            </S.SubButton>

            {/* 투표 방 생성 요청 후 화면 이동 */}
            <S.SubButton $isActive={isActive} onClick={handleVoteClick} disabled={isPending}> 
                <img src={MyFloating} alt="My Floating Icon" />
            </S.SubButton>
        </S.FloatingContainer>
    );
}
