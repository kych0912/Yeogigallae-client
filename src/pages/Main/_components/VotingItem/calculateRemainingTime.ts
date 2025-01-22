// 남은 시간 계산 함수

const calculateRemainingTime = (createdAt: string): string => {
    const createdTime = new Date(createdAt).getTime();
    const now = Date.now();
    const diff = 6 * 60 * 60 * 1000 - (now - createdTime);

    if (diff <= 0) return "00:00:00";

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export default calculateRemainingTime;
