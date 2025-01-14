import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../../../../components/Card";
import { Button } from "../../../../../components/Button";
import { voteData } from "./voteData"; // 임시 데이터
import LinkIcon from "../../../../../assets/icons/LinkIcon.svg?react";
import * as S from "./Styles";

const VoteCard: React.FC = () => {
  const navigate = useNavigate(); // useNavigate 훅 호출

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

        {/* 금액 */}
        <S.InfoItem>
          <Card.Item label="금액">{voteData.price}</Card.Item>
        </S.InfoItem>

        <Card.Divider />

        {/* 기간 */}
        <S.InfoItem>
          <Card.Item label="기간">{voteData.duration}</Card.Item>
        </S.InfoItem>  
      </S.InfoContainer>
      <S.TwoSelect>
        <Button size="large" onClick={() => {
          navigate(`/vote/fail`);
          }}
        >
          {"난 못 가.."}
        </Button>
        <Button size="large" onClick={() => {
          navigate(`/vote/date`);
          }}
        >
          {"좋아!"} {/*따로 사이즈 조정 필요.*/}
        </Button>
      </S.TwoSelect>
    </Card>
  );
};

export default VoteCard;
