import * as S from "./Styles";
import FullVotingItem from "../_components/VotingItem/FullVotingItem";
import TostModal from "../_components/TostModal/TostModal";
import { useOutletContext } from "react-router-dom";

type LayoutContextType = {
    isModalVisible: boolean;
    handleCloseModal: () => void;
};

export default function FullVotingListPage() {
    const { isModalVisible, handleCloseModal } = useOutletContext<LayoutContextType>();

    return (
        <S.Container>
            <FullVotingItem />
            <TostModal isVisible={isModalVisible} onClose={handleCloseModal} />
        </S.Container>
    );
}
