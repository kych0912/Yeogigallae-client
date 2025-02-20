import styled from 'styled-components';
import { Member } from "../../../../apis/room/types";
import defaultProfile from "../../../../assets/icons/Profile.svg";

const Container = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
`;

const MemberAvatar = styled.div<{ position: number, total: number }>`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1.88px solid #0A0A0A;
  overflow: hidden;
  background-color: #f0f0f0;


  ${({ position, total }) => {
    if (total === 1) {
      return `
        left: 0;
        top: 0;
        width: 40px;
        height: 40px;
      `;

    }

    if (total === 2) {
        if (position === 0) {
          return `
            left: 0px;
            top: 0px;
          `;
        }
        return `
          left: 16px;
          top: 16px;
        `;

      }

    if (total === 3) {
      switch (position) {
        case 0:
          return `
            left: 0;
            top: 0;
          `;
        case 1:
          return `
            left: 16px;
            top: 0;
          `;
        case 2:
          return `
            left: 8px;
            top: 16px;
          `;
        default:
          return '';
      }
    }

    if (total === 4) {
      switch (position) {
        case 0:
          return `
            left: 0px;
            top: 16px;
          `;
        case 1:
          return `
            left: 0px;
            top: 0px;
          `;
        case 2:
          return `
            left: 16px;
            top: 0px;
          `;
        case 3:
            return `
                visibility: hidden;
            `
        default:
          return '';
      }
    }
  }}
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ExtraCount = styled.div`
  position: absolute;
  top:16px;
  left:16px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: #6E6E6E;
  display: flex;
  align-items: end;
  justify-content: end;
  font-size: 0.5rem;
  color: white;
  font-family:${({theme})=>theme.fontFamily.medium};
`;

const MemberCount = styled.div`
  position: absolute;
  top:9px;
  left:9px;
  font-size: 0.5rem;
  color: white;
`;


export default function ProfileGroup({ members = [] }: { members: Member[] }) {
  const displayMembers = members.slice(0, 4);
  const remainingCount = Math.max(0, members.length - 4);

  return (
    <Container>
        {remainingCount > 0 && (
          <ExtraCount>
            <MemberCount>+{remainingCount}</MemberCount>
          </ExtraCount>
        )}

      {displayMembers.map((member, index) => (
        <MemberAvatar
          key={member.userId}
          position={index}
          total={displayMembers.length}
        >
          <AvatarImage
            src={member.profileImage ?? defaultProfile}
            alt={`Member ${member.userId}`}
          />
        </MemberAvatar>
      ))}
    </Container>
  );
};
