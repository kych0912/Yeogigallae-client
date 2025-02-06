import styled from 'styled-components';
import { Member } from "../../../../apis/room/types";
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
            left: 0;
            top: 16px;
          `;
        case 3:
          return `
            left: 16px;
            top: 16px;
          `;
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
  right: 0;
  bottom: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #6E6E6E;
  border: 1.88px solid #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
  font-family:${({theme})=>theme.fontFamily.semiBold};
`;


export default function ProfileGroup({ members = [] }: { members: Member[] }) {
  const displayMembers = members.slice(0, 4);
  const remainingCount = Math.max(0, members.length - 4);



  return (
    <Container>
      {displayMembers.map((member, index) => (
        <MemberAvatar
          key={member.userId}
          position={index}
          total={displayMembers.length}
        >
          <AvatarImage
            src={member.profileImage}
            alt={`Member ${member.userId}`}
          />
        </MemberAvatar>
      ))}
        {remainingCount > 0 && (
          <ExtraCount>+{remainingCount}</ExtraCount>
        )}
    </Container>
  );
};
