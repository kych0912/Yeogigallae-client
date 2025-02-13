import * as S from "./Pagination.styles";
import { useSearch } from "../context/SearchContext";

export default function Pagination() {
  const { currentPage, totalPages, setCurrentPage } = useSearch();

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  if (totalPages === 0) return null;

  return (
    <S.PaginationWrapper>
      <S.ArrowButton onClick={handlePrevious} $disabled={currentPage === 1}>
        {"<"}
      </S.ArrowButton>
      <S.PageIndicator $isActive>{currentPage}</S.PageIndicator>
      <S.Separator>/</S.Separator>
      <S.PageIndicator $isActive={false}>{totalPages}</S.PageIndicator>
      <S.ArrowButton onClick={handleNext} $disabled={currentPage === totalPages}>
        {">"}
      </S.ArrowButton>
    </S.PaginationWrapper>
  );
}
