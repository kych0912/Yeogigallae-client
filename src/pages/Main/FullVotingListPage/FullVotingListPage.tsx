import * as S from "./Styles";
import FullVotingItem from "../_components/VotingItem/FullVotingItem";
import TostModal from "../_components/TostModal/TostModal";
import { useOutletContext } from "react-router-dom";
import { useGetVoting } from "../../../react-query/queries/main/Voting/queries";
import { FullVotingCardSkeleton } from "../_components/CardSkeleton";

type LayoutContextType = {
    isModalVisible: boolean;
    handleCloseModal: () => void;
    selectedFilter: string;
    handleFilterChange: (filter: string) => void;
};
export default function FullVotingListPage() {
    const { data, isLoading, error } = useGetVoting();
    const votingRooms = data?.rooms ?? []; // ✅ rooms 속성에 접근하도록 수정

    // 로딩 상태에서 콘솔 로그
    if (isLoading) {
        console.log("Loading full voting rooms...");
    }

    // 에러 상태에서 콘솔 로그
    if (error) {
        console.error("Error loading full voting rooms:", error);
    }

    const { isModalVisible, handleCloseModal, selectedFilter, handleFilterChange } = useOutletContext<LayoutContextType>();

    return (
        <S.Container>
            {isLoading ? (
                <>
                    <FullVotingCardSkeleton />
                    <FullVotingCardSkeleton />
                    <FullVotingCardSkeleton />
                </>
            ) : (
                <FullVotingItem rooms={votingRooms} selectedFilter={selectedFilter} /> // ✅ rooms 배열만 전달
            )}
            <TostModal isVisible={isModalVisible} onClose={handleCloseModal} onFilterChange={handleFilterChange} />
        </S.Container>
    );
}
