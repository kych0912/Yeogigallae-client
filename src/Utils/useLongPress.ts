import { useCallback, useRef } from 'react';

interface UseLongPressOptions {
  onClick?: () => void;  // 일반 클릭 시 실행할 함수
  onLongPress: () => void;  // 길게 눌렀을 때 실행할 함수
  ms?: number;  // 길게 누르는 기준 시간 (밀리초)
}

export function useLongPress({ onClick, onLongPress, ms = 500 }: UseLongPressOptions) {
  const timerRef = useRef<number>();
  const isLongPress = useRef(false);

  const startPressTimer = useCallback(() => {
    isLongPress.current = false;
    timerRef.current = setTimeout(() => {
      isLongPress.current = true;
      onLongPress();
    }, ms);
  }, [onLongPress, ms]);

  const handleOnClick = useCallback(() => {
    if (isLongPress.current) return;
    onClick?.();
  }, [onClick]);

  const handleOnMouseDown = useCallback(() => {
    startPressTimer();
  }, [startPressTimer]);

  const handleOnMouseUp = useCallback(() => {
    clearTimeout(timerRef.current);
  }, []);

  const handleOnTouchStart = useCallback(() => {
    startPressTimer();
  }, [startPressTimer]);

  const handleOnTouchEnd = useCallback(() => {
    clearTimeout(timerRef.current);
  }, []);

  return {
    onClick: handleOnClick,
    onMouseDown: handleOnMouseDown,
    onMouseUp: handleOnMouseUp,
    onTouchStart: handleOnTouchStart,
    onTouchEnd: handleOnTouchEnd
  };
}