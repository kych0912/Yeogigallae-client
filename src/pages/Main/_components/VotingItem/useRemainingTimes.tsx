import { useState, useEffect, memo } from "react";

interface RemainingTimeProps {
    createdAt: string;
    remainingTime: string;
}

const TIMER_UNITS: { [key: string]: number } = {
    THIRTY_MINUTES: 30 * 60 * 1000,
    SIXTY_MINUTES: 60 * 60 * 1000,
    FOUR_HOURS: 4 * 60 * 60 * 1000,
    SIX_HOURS: 6 * 60 * 60 * 1000,
};

const calculateRemainingTime = (createdAt: string, countdownTime: number): number => {
    const createdTime = new Date(createdAt).getTime() - 9 * 60 * 60 * 1000; // UTC+9 보정
    const now = Date.now();
    return Math.max(countdownTime - (now - createdTime), 0);
};

const formatTime = (milliseconds: number): string => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

// ⬇️ 개별적으로 상태를 관리하는 컴포넌트 (memo로 불필요한 리렌더링 방지)
const RemainingTimeDisplay: React.FC<RemainingTimeProps> = memo(({ createdAt, remainingTime }) => {
    const countdownTime = TIMER_UNITS[remainingTime] || 0;
    const [displayTime, setDisplayTime] = useState(formatTime(calculateRemainingTime(createdAt, countdownTime)));

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayTime(formatTime(calculateRemainingTime(createdAt, countdownTime)));
        }, 1000);

        return () => clearInterval(interval);
    }, [createdAt, remainingTime]);

    return <span>{displayTime}</span>;
});

export default RemainingTimeDisplay;
