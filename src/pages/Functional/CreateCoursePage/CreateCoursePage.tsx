import React from "react";
import * as S from "./Styles"; 
import Header from "../../../components/Header/index";
import HomeIcon from "../../../assets/icons/Home.svg?react";
import BackIcon from "../../../assets/icons/Back.svg?react";
import { IconButton } from "../../../components/Button";

const CreateCoursePage: React.FC = () => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <Header 
          leftContent={<IconButton><BackIcon /></IconButton>}
          centerContent={<S.Typography>{"생성하기"}</S.Typography>}
          rightContent={<IconButton><HomeIcon /></IconButton>}
        />
      </S.HeaderContainer>
      <S.Content>
        <S.ImagePlaceholder>
          원하는 이미지를 첨부하세요.
        </S.ImagePlaceholder>

        <S.MessageInput placeholder="친구에게 전달할 메시지를 작성하세요." />

        <S.OptionSection>
          <S.Label>장소</S.Label>
          <S.TextInput placeholder="장소를 입력하세요." />
        </S.OptionSection>

        <S.OptionSection>
          <S.Label>인원</S.Label>
          <S.TextInput placeholder="최소 0명 ~ 최대 0명" />
        </S.OptionSection>

        <S.DatePickerWrapper>
          <S.Label>날짜</S.Label>
          <S.TextInput placeholder="2024.00.00 ~ 2024.00.00" />
        </S.DatePickerWrapper>

        <S.ColorSelector>
          {["#000000", "#888888", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF"].map((color) => (
            <S.ColorCircle key={color} color={color} />
          ))}
        </S.ColorSelector>

        <S.SubmitButton>코스 공유하기</S.SubmitButton>
      </S.Content>
    </S.Container>
  );
};

export default CreateCoursePage;
