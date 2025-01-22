import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../../../../../components/Card";
import { Button } from "../../../../../components/Button";
import { afterData } from "../../_data/afterData"; 
import LinkIcon from "../../../../../assets/icons/LinkIcon.svg?react";
import DurationInfo from "../DurationInfo";
import * as S from "./Styles";
import VoteComponent from "../VoteComponent";
import VoteContent from "../VoteContent";

const ResultCard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("클립보드에 복사되었습니다:", text);
    });
  };

  return (
    <Card>
      <VoteContent />
      <DurationInfo />
      <VoteComponent />

      <Card.Divider />

      <Card.Image>  
        <S.Image src={afterData.imageSrc} alt="placeholder" />
      </Card.Image>
      
      <S.InfoContainer>
        {/* 장소 */}
        <S.InfoItem>
          <S.LocationWrapper>
            <Card.Item label="장소">
              <S.TruncatedText>{afterData.location}</S.TruncatedText>
            </Card.Item>
            <S.IconWrapper onClick={() => handleCopyToClipboard(afterData.location)}>
              <LinkIcon />
            </S.IconWrapper>
          </S.LocationWrapper>
        </S.InfoItem>

        <Card.Divider />

        {/* 금액 */}
        <S.InfoItem>
          <Card.Item label="금액">{afterData.price}</Card.Item>
        </S.InfoItem>

      </S.InfoContainer>
      <Button
        size="large"
        style={{ backgroundColor: "#434343" }}
        onClick={() => {
          if (location.pathname === "/vote/fail") {
            navigate(`/vote/fail/confirm`);
          } else if (location.pathname === "/vote/success") {
            navigate(`/vote/success/confirm`);
          }
        }}
      >
        {"투표하러 가기"}
      </Button>
    </Card>
  );
};

export default ResultCard;
