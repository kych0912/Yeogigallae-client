import { useMutation } from "@tanstack/react-query";
import { postSelectedImage } from "../../apis/functional/imageApi";
import { ImageSelectRequest, ImageSelectResponse } from "../../types/functionalTypes/functionalTypes";
import { useImageStore } from "../../store/useImageStore";

export const useImageMutation = () => {
  const { setSelectedImage } = useImageStore();

  return useMutation<ImageSelectResponse, Error, ImageSelectRequest>({
    mutationFn: postSelectedImage,
    onSuccess: (data) => {
      console.log(data);
      setSelectedImage(data.result);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
