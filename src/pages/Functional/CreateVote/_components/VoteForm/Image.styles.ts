import styled from "styled-components";

// 이미지 플레이스홀더
export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 170px;
  background-color: transparent; 
  border-radius: 20px; 
  border: 0.5px solid #434343; 
  display: flex;
  justify-content: center;
  align-items: center;
  color: #434343; 
  margin-bottom: 35px; 
  font-size: 16px;
`;

export const Default = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Icon = styled.img`
  margin-bottom: 16px; 
`;

export const Text = styled.p`
  font-size: 16px;
  color: #6e6e6e; 
  margin: 0;
`;
