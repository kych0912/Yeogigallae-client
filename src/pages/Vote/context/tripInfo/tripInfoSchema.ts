import { z } from "zod";

// 날짜 형식 검증 (yyyy-MM-dd)
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

// 개별 여행 정보 스키마
const TripInfoItemSchema = z.object({
  location: z.string(),
  description: z.string(),
  imageUrl: z.string().url(),
  customLocation: z.string(),
  price: z.string(),
  minDays: z.number(),
  maxDays: z.number(),
  month: z.number(),
  roomName: z.string(),
  userCount: z.number(),
  userName: z.string(),
  masterId: z.number(),
  masterName: z.string(),
  voteLimitTime: z.string(),
  startDate: z.string().refine((date) => dateRegex.test(date), {
    message: "Invalid date format. Expected yyyy-MM-dd.",
  }),
  endDate: z.string().refine((date) => dateRegex.test(date), {
    message: "Invalid date format. Expected yyyy-MM-dd.",
  }),
});

export const TripInfoSchema = z.object({
  httpStatus: z.string(),
  code: z.string(),
  message: z.string(),
  result: TripInfoItemSchema, 
});

export type TripInfo = z.infer<typeof TripInfoSchema>;
