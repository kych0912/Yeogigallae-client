export interface RoomFormValues {
    roomName:string;
    userIds:number[];
}

export interface Room {
    roomId:number;
    roomName:string;
    masterName:string;
}