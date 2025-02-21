import * as S from "./Styles";
import defaultProfile from "../../../../../assets/icons/Profile.svg"; 

export default function ProfileGroup({
  members = [],
}: {
  members: { userId: number; profileImage?: string }[];
}) {
  const displayMembers = members.slice(0, 4);
  const remainingCount = Math.max(0, members.length - 4);

  return (
    <S.ProfileGroupContainer>
      {remainingCount > 0 && (
        <S.ExtraCount>
          <S.MemberCount>+{remainingCount}</S.MemberCount>
        </S.ExtraCount>
      )}
      {displayMembers.map((member, index) => (
        <S.MemberAvatar key={member.userId} position={index} total={displayMembers.length}>
          <S.AvatarImage
            src={member.profileImage || defaultProfile} 
            alt={`Member ${member.userId}`}
            onError={(e) => (e.currentTarget.src = defaultProfile)} 
          />
        </S.MemberAvatar>
      ))}
    </S.ProfileGroupContainer>
  );
}
