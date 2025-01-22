import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../../../../components/Card";
import { Button } from "../../../../../components/Button";
import { tempData } from "./tempData"; // 임시 데이터
import * as S from "./Styles";

const TravelCard: React.FC = () => {
  const navigate = useNavigate(); // useNavigate 훅 호출

  const handleButtonClick = () => {
    navigate("/vote/agree"); // "/vote/agree"로 페이지 이동
  };
  return (
    <Card>
      <Card.Image>  
        <img src="https://s3-alpha-sig.figma.com/img/19e3/d758/89fc76fe69058e9d77f8b9d8eb86b52a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UD7-M2Kzy6ZypAZp1TcmODXyjkhe9B7i2um316iL6yO4noUirY-KyX2rCFKo1-6AZrianWPaXaaoA5tbU2ZguoL1G-0azGwL1VNVD6Y46adpX5KaGUIZGHJqNscdNBi5t0M1tA5v5CKL4CIhG8OpEfNW3TeA57i3np-iISxtoG8zc8H61trwbw3WCS4p6xg5v5d9e~xE15oGCXJ7gG678mnNuJX8OpVdAFOTPhh7dXkbleZcv2sqQ3ES1T3qOez7awav5iTgkRWyUTWglT9tYTX40IJf7EBX-UD2ffpxovnI926qcAULaKaK-XOXxY9bag14~jRS3SdueUe4xKmjmg__" alt="placeholder" 
        style={{width:"100%",height:"100%",borderRadius:"1.5rem",objectFit:"cover"}} />
      </Card.Image>

      <Card.Title>{tempData.title}</Card.Title>

      <Card.Divider />

      <Card>
      <S.InfoContainer>
        {/* 장소 */}
        <S.InfoItem>
          <S.InfoLabel>장소</S.InfoLabel>
          <Card.Item label="장소">{tempData.location}</Card.Item>
        </S.InfoItem>

        {/* 금액 */}
        <S.InfoItem>
          <S.InfoLabel>금액</S.InfoLabel>
          <Card.Item label="금액">{tempData.price}</Card.Item>
        </S.InfoItem>

        {/* 기간 */}
        <S.InfoItem>
          <S.InfoLabel>기간</S.InfoLabel>
          <Card.Item label="기간">{tempData.duration}</Card.Item>
        </S.InfoItem>
      </S.InfoContainer>  
      </Card>
      <Button size="large" onClick={handleButtonClick}>{"투표하기"}</Button>
    </Card>
  );
};

export default TravelCard;
