import { createContext, useContext, ReactNode, useState } from 'react';
import { z } from 'zod';
import { roomSchema } from '../pages/MyPage/RoomPage/schema';

type Friend = z.infer<typeof roomSchema>["roomFriend"][number];

//친구목록 관리리
//setAvailableFriends 친구목록 설정

interface FriendContextType {
  availableFriends: Friend[];
  setAvailableFriends: (friends: Friend[]) => void;
  removeFriend: (friend: Friend) => void;
  addFriend: (friend: Friend) => void;
}

const FriendContext = createContext<FriendContextType | null>(null);

export function FriendProvider({ children }: { children: ReactNode }) {
    const [availableFriends, setAvailableFriends] = useState<Friend[]>([]);

    const removeFriend = (friend: Friend) => {
        setAvailableFriends(prev => prev.filter(f => f.friendId !== friend.friendId));
    };

    const addFriend = (friend: Friend) => {
        setAvailableFriends(prev => [...prev, friend]);
    };

    return (
        <FriendContext.Provider 
            value={{
                availableFriends,
                setAvailableFriends,
                removeFriend,
                addFriend,
            }}
        >
            {children}
        </FriendContext.Provider>
    );
}

export function useFriend() {
    const context = useContext(FriendContext);
    if (!context) {
        throw new Error('useFriend must be used within a FriendProvider');
    }
    return context;
} 