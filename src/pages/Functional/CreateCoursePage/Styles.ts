import styled from "styled-components";

export const Typography = styled.div`
  font-size:1rem;
  color:#ffffff;
  font-weight:500;
  line-height:1.178rem;
  position: fixed;
`
export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
`;

// 기본 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondary};
  color: #fff;
  height: 100vh;
  padding: 20px;
`;

// 콘텐츠 영역
export const Content = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 1;
`;

// 이미지 첨부 공간
export const ImagePlaceholder = styled.div`
  height: 150px;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 14px;
  color: #aaa;
`;

// 메시지 입력
export const MessageInput = styled.textarea`
  background: #333;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  resize: none;
  height: 80px;
`;

// 옵션 섹션
export const OptionSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const TextInput = styled.input`
  background: #333;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
`;

// 날짜 선택
export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// 색상 선택
export const ColorSelector = styled.div`
  display: flex;
  gap: 10px;
`;

export const ColorCircle = styled.div<{ color: string }>`
  width: 30px;
  height: 30px;
  background: ${(props) => props.color};
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// 제출 버튼
export const SubmitButton = styled.button`
  background: #6200ee;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #7c4dff;
  }
`;
