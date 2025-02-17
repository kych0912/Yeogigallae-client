export type Friend = {
    friendId: number;
    friendName: string;
    profileImageUrl: string;
}


export interface FriendResponse {
    code:number;
    message:string;
    httpStatus:string;
    result:Friend[]
}

