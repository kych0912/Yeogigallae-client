// 6시간 카운트다운 계산 함수
const calculateRemainingTime = (createdAt: string): number => {
    const createdTime = new Date(createdAt).getTime();
    const now = Date.now();
    const diff = 6 * 60 * 60 * 1000 - (now - createdTime);
    return diff > 0 ? diff : 0;
};

// 남은 시간을 "HH:MM:SS" 형식으로 변환
const formatTime = (milliseconds: number): string => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export { calculateRemainingTime, formatTime };
