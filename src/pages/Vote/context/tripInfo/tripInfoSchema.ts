import { z } from "zod";

// 날짜 형식 검증 (yyyy-MM-dd)
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const TripInfoSchema = z.object({
  tripId: z.number(),  
  roomId: z.number(),  
  masterId: z.number(), 
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
  masterName: z.string(),
  voteLimitTime: z.string(),
  startDate: z.string().refine((date) => dateRegex.test(date), {
    message: "Invalid date format. Expected yyyy-MM-dd.",
  }),
  endDate: z.string().refine((date) => dateRegex.test(date), {
    message: "Invalid date format. Expected yyyy-MM-dd.",
  }),
});

export type TripInfo = z.infer<typeof TripInfoSchema>;
