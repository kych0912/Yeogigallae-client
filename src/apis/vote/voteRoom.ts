import axios from "axios";
import { VoteRoomRequest, VoteRoomResponse, VoteErrorResponse } from "../../types/voteTypes/voteTypes";

const API_URL = import.meta.env.VITE_API_URL as string;

export const createVoteRoom = (voteRoomData: VoteRoomRequest): Promise<VoteRoomResponse> => {
    console.log("POST test: ", voteRoomData);

    return axios.post<VoteRoomResponse>(`${API_URL}/vote/new-room`, voteRoomData)
    .then((response) => {
        console.log(response.data);
        return response.data;
    })
    .catch((error) => {
        return Promise.reject(error.response?.data as VoteErrorResponse);
    });
};
