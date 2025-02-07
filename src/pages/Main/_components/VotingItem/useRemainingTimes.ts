import { useState, useEffect } from "react";

const COUNTDOWN_TIME = (6 - 9) * 60 * 60 * 1000;

const calculateRemainingTime = (createdAt: string): number => {
    const createdTime = new Date(createdAt).getTime();
    const now = Date.now();

    const remaining = COUNTDOWN_TIME - (now - createdTime);
    return remaining > 0 ? remaining : 0;
};

const formatTime = (milliseconds: number): string => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const useRemainingTimes = (rooms: { roomName: string; createdAt: string }[]) => {
    const [remainingTimes, setRemainingTimes] = useState<{ [key: string]: string }>(() => Object.fromEntries(rooms.map(({ roomName, createdAt }) => [roomName, formatTime(calculateRemainingTime(createdAt))])));

    useEffect(() => {
        const updateRemainingTimes = () => {
            setRemainingTimes((prev) => {
                const updatedTimes = { ...prev };
                for (const { roomName, createdAt } of rooms) {
                    updatedTimes[roomName] = formatTime(calculateRemainingTime(createdAt));
                }
                return updatedTimes;
            });
        };

        const interval = setInterval(updateRemainingTimes, 1000);
        return () => clearInterval(interval);
    }, [rooms]);

    return remainingTimes;
};

export default useRemainingTimes;
