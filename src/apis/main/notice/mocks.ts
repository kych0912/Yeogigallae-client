import { NoticeResponse } from "./types";

export const NoticeResult: NoticeResponse = {
    httpStatus: "200 OK",
    code: "SUCCESS",
    message: "Request was successful",
    result: {
        hasUnreadNotifications: true,
    },
};
