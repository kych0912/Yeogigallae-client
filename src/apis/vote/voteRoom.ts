import axios from "axios";
import { VoteRoomRequest, VoteRoomResponse, VoteErrorResponse } from "../../types/voteTypes/voteTypes";

const API_URL = "http://43.201.12.8:8081/api/vote/new-room";

export const createVoteRoom = (voteRoomData: VoteRoomRequest): Promise<VoteRoomResponse> => {
    console.log("POST test: ", voteRoomData);

    return axios.post<VoteRoomResponse>(API_URL, voteRoomData)
    .then((response) => {
        console.log(response.data);
        return response.data;
    })
    .catch((error) => {
        return Promise.reject(error.response?.data as VoteErrorResponse);
    });
};
