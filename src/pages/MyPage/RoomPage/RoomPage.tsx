import CommonContainer from "../../../components/Layout/CommonContainer";
import { FriendProvider } from "../../../contexts/FriendContext";
import RoomPageContent from "./RoomPageContent";

export default function RoomPage() {

    return (
        <CommonContainer>
            <FriendProvider>
                <RoomPageContent />
            </FriendProvider>
        </CommonContainer>

    );
}

