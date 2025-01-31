import * as S from "./Pagination.styles";
import { PaginationProps } from "../types/types";

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  if (totalPages === 0) return null;

  return (
    <S.PaginationWrapper>
      <S.ArrowButton onClick={handlePrevious} $disabled={currentPage === 1}>
        {"<"}
      </S.ArrowButton>
      <S.PageIndicator $isActive={true}>{currentPage}</S.PageIndicator>
      <S.Separator>/</S.Separator>
      <S.PageIndicator $isActive={false}>{totalPages}</S.PageIndicator>
      <S.ArrowButton onClick={handleNext} $disabled={currentPage === totalPages}>
        {">"}
      </S.ArrowButton>
    </S.PaginationWrapper>
  );
}
