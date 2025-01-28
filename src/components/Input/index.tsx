import React, { InputHTMLAttributes } from "react";
import * as S from "./Input.style";
import SearchIcon from "../../assets/icons/SearchIcon.svg?react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  variant?: 'search' | 'default';
  onSearch?: () => void;
  isSearchButtonDisabled?: boolean;
  placeholder?: string;
}

export default function Input({
  value,
  onChange,
  isError = false,
  variant = 'default',
  onSearch,
  isSearchButtonDisabled = false,
  placeholder,
  ...props
}: InputProps) {
    const handleClear = () => {
        onChange({target: {value: ""}} as React.ChangeEvent<HTMLInputElement>);
    }

  const renderInput = () => (
      <S.InputWrapper>
        <S.StyledInput
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
      />
      {value && (
        <S.ClearButton onClick={handleClear}>
          ⨉
        </S.ClearButton>
        )}
      </S.InputWrapper>
  );

  if (variant === 'search') {
    return (
      <S.Container $isError={isError}>
        {renderInput()}
        <S.SearchButton
          $disabled={isSearchButtonDisabled}
          onClick={onSearch}
          disabled={isSearchButtonDisabled}
        >
          <SearchIcon />
        </S.SearchButton>
      </S.Container>
    );
  }

  return (
    <S.Container $isError={isError}>
      {renderInput()}
    </S.Container>
  );
}

// 기본 Input
// <Input 
//   value={value} 
//   onChange={handleChange} 
//   placeholder="입력해주세요" 
// />

// 검색 Input
// <Input 
//   variant="search"
//   value={query}
//   onChange={(e) => setQuery(e.target.value)}
//   onSearch={handleSearch}
//   isSearchButtonDisabled={isButtonDisabled}
//   isError={isError}
//   placeholder="도로명 또는 지번을 입력하세요"
// />

