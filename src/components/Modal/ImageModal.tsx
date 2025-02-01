import { useState, useEffect } from "react";
import Modal from "../Modal";
import * as S from "./Modal.styles";
import getImageData from "./imageData";
import { useImageStore } from "../../store/useImageStore";
import { mockSelectedImage } from "../../mocks/imageMock"; // ✅ 기본 React 이미지 사용

interface SelectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const imageData = getImageData();

const getRandomImages = (category: string): string[] => {
  const images = imageData[category] || [];
  
  const imageUrls = images.map((image) => 
    typeof image === "string" ? image : mockSelectedImage
  );

  return imageUrls.length > 0 ? imageUrls.sort(() => 0.5 - Math.random()).slice(0, 6) : [mockSelectedImage];
};

export default function ImageModal({ isOpen, onClose }: SelectModalProps) {
  const [activeTab, setActiveTab] = useState<string>("건물");
  const [randomImages, setRandomImages] = useState<string[]>(getRandomImages("건물"));
  const { selectedImage, setSelectedImage } = useImageStore();

  useEffect(() => {
    setRandomImages(getRandomImages(activeTab));
  }, [activeTab]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image); 
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} modalType="select" isImageModal={true}> {/* ✅ isImageModal 추가 */}
      <>
        <S.TabContainer>
          {Object.keys(imageData).map((tab) => (
            <S.Tab key={tab} $active={tab === activeTab} onClick={() => handleTabClick(tab)}>
              {tab}
            </S.Tab>
          ))}
        </S.TabContainer>
        <S.ImageGrid>
          {randomImages.map((image, index) => (
            <S.ImageWrapper
              key={index}
              onClick={() => handleImageClick(image)}
              selected={selectedImage === image}
            >
              <img src={image} alt="선택 이미지" />
            </S.ImageWrapper>
          ))}
        </S.ImageGrid>
      </>
    </Modal>
  );
}
