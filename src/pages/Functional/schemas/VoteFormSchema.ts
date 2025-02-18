import * as z from "zod";

export const voteFormSchema = z
  .object({
    location: z.string().min(1, { message: "위치를 입력해주세요." }),

    latitude: z.number().optional().nullable(), 
    longitude: z.number().optional().nullable(), 

    startDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "유효한 날짜 형식(YYYY-MM-DD)이 아닙니다." }),

    endDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "유효한 날짜 형식(YYYY-MM-DD)이 아닙니다." }),

    tripType: z.enum(["DOMESTIC", "OVERSEAS"], {
      errorMap: () => ({ message: "여행 유형을 선택해주세요." }),
    }),

    voteLimitTime: z.string().min(1, { message: "투표 마감 시간을 선택해주세요." }),

    minDays: z.number().min(1, { message: "최소 여행 일수는 1일 이상이어야 합니다." }),
    maxDays: z.number().min(1, { message: "최대 여행 일수는 1일 이상이어야 합니다." }),

    roomId: z.number().min(1, { message: "올바른 방 ID가 필요합니다." }),

    imageUrl: z.string().url({ message: "올바른 이미지 URL을 입력해주세요." }),

    tripPlanType: z.enum(["COURSE", "SCHEDULE"], {
      errorMap: () => ({ message: "여행 계획 유형을 선택해주세요." }),
    }),

    scheduleDetails: z
      .object({
        message: z.string().min(1, { message: "일정 내용을 입력해주세요." }),
        price: z.string().min(1, { message: "가격을 입력해주세요." }),
      })
      .optional(),

    courseDetails: z
      .object({
        message: z.string().min(1, { message: "코스 내용을 입력해주세요." }),
      })
      .optional(),
  })
  .refine(
    (data) => {
      if (data.tripPlanType === "SCHEDULE") {
        return !!data.scheduleDetails;
      }
      return true;
    },
    {
      message: "일정 정보를 입력해야 합니다.",
      path: ["scheduleDetails"],
    }
  )
  .refine(
    (data) => {
      if (data.tripPlanType === "COURSE") {
        return !!data.courseDetails;
      }
      return true;
    },
    {
      message: "코스 정보를 입력해야 합니다.",
      path: ["courseDetails"],
    }
  );

export type VoteFormBody = z.infer<typeof voteFormSchema>;
export type VoteFormData = VoteFormBody;
