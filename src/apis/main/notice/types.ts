export interface NoticeResult {
    hasUnreadNotifications: boolean;
}

export interface NoticeResponse {
    httpStatus: string;
    code: string;
    message: string;
    result: NoticeResult;
}
