// 프로필 이미지 렌더링 함수
import * as V from "./VotingItem.Styles";

const renderParticipantProfiles = (profiles: string[], extraProfiles: string) => {
    const maxVisible = 5;
    const extraCount = profiles.length - maxVisible;

    return profiles.slice(0, maxVisible).map((profile, index) => {
        // 마지막 이미지에 extraProfiles 표시
        if (index === maxVisible - 1 && extraCount > 0) {
            return (
                <V.ProfileImageOverlay key={index}>
                    <V.ProfileImage src={extraProfiles} alt={`Extra Profiles`} />
                </V.ProfileImageOverlay>
            );
        }

        return <V.ProfileImage key={index} src={profile} alt={`Participant ${index + 1}`} />;
    });
};

export default renderParticipantProfiles;
