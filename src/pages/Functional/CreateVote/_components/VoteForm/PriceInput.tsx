import * as S from "../../../_components/Functional.styles";

interface PriceInputProps {
  field: any; // ✅ `Controller`에서 전달되는 전체 `field` 객체를 받음
  nights: number;
}

// ✅ 가격을 "몇만 몇원" 형식으로 변환하는 함수
const formatPrice = (price?: number) => {
  if (!price || price === 0) return "20만원"; // 기본값 설정
  const mainUnit = Math.floor(price / 10000);
  const subUnit = price % 10000;
  return subUnit === 0 ? `${mainUnit}만 원` : `${mainUnit}만 ${subUnit}원`;
};

export default function PriceInput({ field, nights }: PriceInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.replace(/\D/g, ""); // 숫자만 허용
    field.onChange(newValue); // 원본 값 유지
  };

  const handleEnter = () => {
    if (field.value.trim() !== "") {
      let parsedValue = parseInt(field.value, 10) || 0;
      field.onChange(`${formatPrice(parsedValue)}`); // ✅ `몇만 몇원` 형식 변환
    }
  };

  return (
    <S.Input
      type="text"
      placeholder={`${nights}박 / 가격 입력`}
      value={field.value || ""}
      onChange={handleChange}
      onBlur={handleEnter} // ✅ 엔터 없이도 포맷 적용
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleEnter(); // ✅ 엔터 입력 시 포맷 적용
        }
        if (e.key === "Backspace" && field.value.length === 1) {
          field.onChange(""); // ✅ 백스페이스로 모두 지우면 완전 초기화
        }
      }}
    />
  );
}
