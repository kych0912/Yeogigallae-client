import { z } from "zod";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

const TripInfoItemSchema = z.object({
  location: z.string(),              
  description: z.string(),
  imageUrl: z.string().url(),
  customLocation: z.string().nullable(),  
  price: z.string(),              
  minDays: z.number().nullable(),        
  maxDays: z.number().nullable(),     
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
