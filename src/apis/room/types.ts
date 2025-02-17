export interface RoomFormValues {
    roomName:string;
    userIds:number[];
}

export interface Member {
    userId: number;
    profileImage: string;
}

export interface Room {
    roomId: number;
    roomName: string;
    members: Member[];

}

export interface Rooms {
    rooms:Room[]
}

export interface RoomResponse {
    code:number;
    message:string; 
    httpStatus:string;
    result:Rooms
}
