import * as S from "./Styles";
import FullVotingItem from "../_components/VotingItem/FullVotingItem";
import TostModal from "../_components/TostModal/TostModal";
import { useOutletContext } from "react-router-dom";

type LayoutContextType = {
    isModalVisible: boolean;
    handleCloseModal: () => void;
    selectedFilter: string;
    handleFilterChange: (filter: string) => void;
};

export default function FullVotingListPage() {
    const { isModalVisible, handleCloseModal, selectedFilter, handleFilterChange } = useOutletContext<LayoutContextType>();

    return (
        <S.Container>
            <FullVotingItem selectedFilter={selectedFilter} />
            <TostModal isVisible={isModalVisible} onClose={handleCloseModal} onFilterChange={handleFilterChange} />
        </S.Container>
    );
}
