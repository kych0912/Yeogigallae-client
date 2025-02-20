export interface RoomMember {
  userId: number;
  profileImage: string;
}

export interface Room {
  roomId: number;
  roomName: string;
  members: RoomMember[];
}

export interface RoomListResponse {
  httpStatus: string;
  code: string;
  message: string;
  result: {
    rooms: Room[];
  };
}

