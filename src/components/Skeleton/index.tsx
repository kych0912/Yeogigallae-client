import * as S from "./Skeleton.styles";

interface SkeletonProps {
    variant?: 'circle' | 'rectangular' | 'text';
    width?: string;
    height?: string;
    className?: string;
}

/**
 * 로딩 시 Skeleton 컴포넌트를 표시합니다.
 * @param variant circle,rectangular,text 지정할 수 있습니다.
 * @param width 너비
 * @param height 높이
 * @param className 클래스명. override 할 수 있습니다.
 * @returns 
 */

export default function Skeleton({
    variant = 'text',
    width,
    height,
    className,
    ...props
  }: SkeletonProps) {
    return (
      <S.Base
        variant={variant}
        width={width}
        height={height}
        className={className}
        {...props}
      />
    );
  }
  