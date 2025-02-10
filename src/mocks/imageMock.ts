import { ImageSelectResponse } from "../types/functionalTypes/functionalTypes";

export const mockSelectedImage = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";

export const mockImageSelectResponse: ImageSelectResponse = {
  httpStatus: "OK",
  code: "COMMON_200",
  message: "성공적으로 처리되었습니다.",
  result: "대표 이미지가 저장되었습니다.",
};
