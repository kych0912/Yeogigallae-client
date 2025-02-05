import * as V from "./VotingItem.Styles";

const renderParticipantProfiles = (profiles: string[]) => {
    const maxVisible = 5;
    const extraCount = profiles.length - maxVisible;

    return (
        <>
            {profiles.slice(0, maxVisible).map((profile, index) => {
                // 마지막 이미지를 "+n" 텍스트로 표시
                if (index === maxVisible - 1 && extraCount > 0) {
                    return <V.ProfileImageOverlay key={index}>+{extraCount}</V.ProfileImageOverlay>;
                }

                return <V.ProfileImage key={index} src={profile} alt={`Participant ${index + 1}`} />;
            })}
        </>
    );
};

export default renderParticipantProfiles;
