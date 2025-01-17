import React from "react";
import * as S from "./Styles";
import Card from "../../../../../components/Card";
import { voteData } from "../../../voteData";
import LinkIcon from "../../../../../assets/icons/LinkIcon.svg?react";

const ConfirmSuccessCard: React.FC = () => {

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("클립보드에 복사되었습니다:", text);
    });
  };

  return (
    <Card>
      <Card.Image>  
        <img src={voteData.imageSrc} alt="placeholder" 
        style={{width:"100%",height:"100%",borderRadius:"1.5rem",objectFit:"cover"}} />
      </Card.Image>
      
      <S.InfoContainer>
        {/* 장소 */}
        <S.InfoItem>
          <S.LocationWrapper>
            <Card.Item label="장소">
              <S.TruncatedText>{voteData.location}</S.TruncatedText>
            </Card.Item>
            <S.IconWrapper onClick={() => handleCopyToClipboard(voteData.location)}>
              <LinkIcon />
            </S.IconWrapper>
          </S.LocationWrapper>
        </S.InfoItem>

        <Card.Divider />

        {/* 총액 */}
        <S.InfoItem>
          <Card.Item label="총액">{voteData.total}</Card.Item>
        </S.InfoItem>

        <Card.Divider />

        {/* 기간 */}
        <S.InfoItem>
          <Card.Item label="기간">{voteData.totalDuration}</Card.Item>
        </S.InfoItem>  
      </S.InfoContainer>
    </Card>
  );
};

export default ConfirmSuccessCard;
