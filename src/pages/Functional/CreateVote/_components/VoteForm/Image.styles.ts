import styled from "styled-components";

export const ImagePlaceholder = styled.div<{ $imageUrl: string }>`
  width: 100%;
  height: 12.5rem;
  background-image: url(${(props) => props.$imageUrl}); 
  background-size: cover;
  background-position: center;
  border-radius: 1.5rem; 
  display: flex;
  justify-content: center;
  align-items: center;
  color: #434343; 
  margin-bottom: 1.375rem; 
  font-size: 1rem;
  cursor: pointer; 
  position: relative;
  background-clip: padding-box;

  border: ${({ $imageUrl }) => (!$imageUrl ? "0.5px solid rgba(255, 255, 255, 0.08)" : "none")};
`;

export const Default = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Icon = styled.img`
`;

export const Text = styled.p`
  font-size: 0.875rem;
  font-weight: regular;
  color: #6e6e6e; 
`;