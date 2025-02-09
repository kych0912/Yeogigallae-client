import { useState, useEffect } from "react";
import { useController, Control } from "react-hook-form";
import * as S from "./Image.styles";
import DefaultImage from "../../../../../assets/icons/Default_image.svg";
import modal from "../../../../../components/Modal"; 
import Card from "../../../../../components/Card";

interface ImagePlaceholderProps {
  control: Control<any>;
  tripPlanType: "COURSE" | "SCHEDULE"; 
  roomId: number; 
}

export default function ImagePlaceholder({ control, tripPlanType, roomId }: ImagePlaceholderProps) {
  const storageKey = `image_${tripPlanType}_${roomId}`;
  const savedImage = localStorage.getItem(storageKey) || "";

  const { field } = useController({
    name: "imageUrl",
    control,
    defaultValue: savedImage,
  });

  const [image, setImage] = useState<string>(savedImage);

  useEffect(() => {
    setImage(field.value);
  }, [field.value]);

  useEffect(() => {
    if (image) {
      localStorage.setItem(storageKey, image); 
    }
  }, [image, storageKey]);

  const handleImageChange = (newImage: string) => {
    setImage(newImage);
    field.onChange(newImage); 
  };

  return (
    <>
      <S.ImagePlaceholder
        $imageUrl={image} 
        onClick={() => {
          modal.image.show({
            onConfirm: (newImage: string) => {
              handleImageChange(newImage); 
            },
            confirmText: "확인",
            cancelText: "취소"
          });
        }}
      >
        {!image && (
          <Card>
            <S.Icon src={DefaultImage} alt="Default Icon" />
            <S.Text>원하는 이미지를 첨부하세요.</S.Text>
          </Card>
        )}
      </S.ImagePlaceholder>
    </>
  );
}
