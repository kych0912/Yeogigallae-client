type NoticeType = "VOTE_START" | "VOTE_COMPLETE" | "COURSE_START" | "COURSE_COMPLETE" | "BUDGET_START" | "BUDGET_COMPLETE";

export interface Notice {
    id: number;
    title: string;
    caption: string;
    type: NoticeType;
};

export interface NoticeResponse {
    httpStatus: number;
    message: string;
    code: string;
    result: Notice[];
}


