import { useState, useEffect } from "react";
import Modal from "../Modal";
import * as S from "./Modal.styles";
import getImageData from "./imageData";
interface SelectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const imageData = getImageData();

const getRandomImages = (category: string): React.FC<React.SVGProps<SVGSVGElement>>[] => {
  const images = imageData[category] || [];
  const randomCount = Math.floor(Math.random() * 6) + 3;

  const uniqueImages = Array.from(new Set(images));
  return uniqueImages.sort(() => 0.5 - Math.random()).slice(0, randomCount);
};

export default function ImageModal({ isOpen, onClose }: SelectModalProps) {
  const [activeTab, setActiveTab] = useState<string>("건물");
  const [randomImages, setRandomImages] = useState<React.FC<React.SVGProps<SVGSVGElement>>[]>(getRandomImages("건물"));
  const [selectedImage, setSelectedImage] = useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null); // ✅ 타입 명시

  const tabList = Object.keys(imageData);

  useEffect(() => {
    setRandomImages(getRandomImages(activeTab));
    setSelectedImage(null);
  }, [activeTab]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleImageClick = (image: React.FC<React.SVGProps<SVGSVGElement>>) => {
    setSelectedImage((prevSelected: React.FC<React.SVGProps<SVGSVGElement>> | null) => 
      prevSelected === image ? null : image
    ); 
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} modalType="select">
      <>
        <S.TabContainer>
          {tabList.map((tab) => (
            <S.Tab key={tab} active={tab === activeTab} onClick={() => handleTabClick(tab)}>
              {tab}
            </S.Tab>
          ))}
        </S.TabContainer>
        <S.ImageGrid>
          {randomImages.map((ImageComponent, index) => (
            <S.ImageWrapper
              key={index}
              onClick={() => handleImageClick(ImageComponent)}
              selected={selectedImage === ImageComponent} 
            >
              <ImageComponent />
            </S.ImageWrapper>
          ))}
        </S.ImageGrid>
      </>
    </Modal>
  );
}
