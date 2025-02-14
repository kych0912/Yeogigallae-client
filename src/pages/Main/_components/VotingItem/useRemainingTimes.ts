import { useState, useEffect } from "react";

// 서버에서 제공하는 remainingTime 값을 매핑
const TIMER_UNITS: { [key: string]: number } = {
    THIRTY_MINUTES: 30 * 60 * 1000,
    SIXTY_MINUTES: 60 * 60 * 1000,
    FOUR_HOURS: 4 * 60 * 60 * 1000,
    SIX_HOURS: 6 * 60 * 60 * 1000,
};

const calculateRemainingTime = (createdAt: string, countdownTime: number): number => {
    const createdTime = new Date(createdAt).getTime() - 9 * 60 * 60 * 1000; // UTC+9 시간 보정
    const now = Date.now();

    const remaining = countdownTime - (now - createdTime);
    return remaining > 0 ? remaining : 0;
};

// 시간을 `HH:MM:SS` 형식으로 변환하는 함수
const formatTime = (milliseconds: number): string => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

// 남은 시간을 관리하는 커스텀 훅
const useRemainingTimes = (rooms: { tripPlanId: number; createdAt: string; remainingTime: string }[]) => {
    const [remainingTimes, setRemainingTimes] = useState<{ [key: number]: string }>({});

    useEffect(() => {
        const updateRemainingTimes = () => {
            setRemainingTimes(() => {
                const updatedTimes: { [key: number]: string } = {};
                rooms.forEach(({ tripPlanId, createdAt, remainingTime }) => {
                    const countdownTime = TIMER_UNITS[remainingTime] || 0; // 만약 잘못된 값이 오면 0으로 처리
                    updatedTimes[tripPlanId] = formatTime(calculateRemainingTime(createdAt, countdownTime));
                });
                return updatedTimes;
            });
        };

        updateRemainingTimes(); // 초기 값 설정

        const interval = setInterval(updateRemainingTimes, 1000);
        return () => clearInterval(interval);
    }, [rooms]);

    return remainingTimes;
};

export default useRemainingTimes;
