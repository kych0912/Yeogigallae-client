import { Controller } from "react-hook-form";
import * as S from "../../../_components/Functional.styles";

interface PriceInputProps {
  control: any;
  nights: number;
}

const formatPrice = (price?: number) => {
  if (!price || price === 0) return "20만원";
  const mainUnit = Math.floor(price / 10000);
  const subUnit = price % 10000;
  return subUnit === 0 ? `${mainUnit}만 원` : `${mainUnit}만 ${subUnit}원`;
};

export default function PriceInput({ control, nights }: PriceInputProps) {
  return (
    <Controller
      name="scheduleDetails.price"
      control={control}
      render={({ field }) => {
        let priceValue = field.value ? field.value.replace(/\D/g, "") : "";
        let priceNumber = priceValue ? parseInt(priceValue, 10) : 0;

        if (priceNumber > 10000000 || priceValue.length > 8) {
          priceNumber = 10000000;
        }

        return (
          <S.Input
            type="text"
            placeholder={`${nights}박 / 20만원`}
            value={field.value || ""}
            onChange={(e) => {
              let newValue = e.target.value.replace(/\D/g, "").slice(0, 7);
              field.onChange(newValue);
            }}
            onBlur={() => {
              if (field.value) {
                let parsedValue = parseInt(field.value, 10) || 0;
                field.onChange(`${nights}박 / ${formatPrice(parsedValue)}`);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                let newValue = field.value ? field.value.slice(0, -1) : "";
                field.onChange(newValue);
              }
            }}
          />
        );
      }}
    />
  );
}
