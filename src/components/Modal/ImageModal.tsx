import { useState } from "react";
import * as S from "./Modal.styles";
import getImageData from "./imageData";
import ImageLoader from "./ImageLoader";

const imageData = getImageData();
const tabList = Object.keys(imageData) as Array<keyof typeof imageData>;

export default function ImageModal({ selectedImage, setSelectedImage }: { 
  selectedImage: string | null, 
  setSelectedImage: (image: string) => void }
) {
  const [activeTab, setActiveTab] = useState<typeof tabList[number]>(tabList[0]);

  const handleImageSelect = (ImageComponent: string) => {
    setSelectedImage(ImageComponent);
  };

  return (
    <>
      <S.TabContainer>
        {tabList.map((tab) => (
          <S.Tab key={tab} $active={tab === activeTab} onClick={() => setActiveTab(tab)}>
            {tab}
          </S.Tab>
        ))}

      </S.TabContainer>
        <S.ImageGrid>
          {imageData[activeTab].images.map((ImageUrl, index) => (
            <S.ImageWrapper
              key={index}
              onClick={() => handleImageSelect(ImageUrl)}
              selected={selectedImage === ImageUrl} 
              >
                <ImageLoader 
                  src={ImageUrl} 
                  alt={`Image ${index}`} 
                  selected={selectedImage === ImageUrl} 
                  onClick={() => handleImageSelect(ImageUrl)} 
                />
            </S.ImageWrapper>
          ))}
        </S.ImageGrid>
    </>
  );
}
