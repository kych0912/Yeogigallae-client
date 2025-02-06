import { useState, useEffect, useRef } from "react";
import { calculateRemainingTime } from "./calculateRemainingTime";

interface Room {
    roomName: string;
    createdAt: string;
}

const useRemainingTimes = (rooms: Room[]) => {
    const [remainingTimes, setRemainingTimes] = useState<{ [key: string]: number }>({});
    const roomsRef = useRef(rooms);

    useEffect(() => {
        roomsRef.current = rooms;
    }, [rooms]);

    useEffect(() => {
        const updateRemainingTimes = () => {
            setRemainingTimes(
                roomsRef.current.reduce((acc, room) => {
                    acc[room.roomName] = calculateRemainingTime(room.createdAt);
                    return acc;
                }, {} as { [key: string]: number })
            );
        };

        updateRemainingTimes();

        const interval = setInterval(updateRemainingTimes, 1000);
        return () => clearInterval(interval);
    }, []);

    return remainingTimes;
};

export default useRemainingTimes;
