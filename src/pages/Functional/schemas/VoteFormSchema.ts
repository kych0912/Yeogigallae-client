import * as z from "zod";

export const voteFormSchema = z.object({
  location: z.string().min(1),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  tripType: z.enum(["DOMESTIC", "OVERSEAS"]),
  voteLimitTime: z.string().min(1),
  minDays: z.number().min(1),
  maxDays: z.number().min(1),
  roomId: z.number(),
  imageUrl: z.string().url(),
  scheduleDetails: z
    .object({
      message: z.string().min(1),
      price: z.string().optional(),
    })
    .optional(),
  courseDetails: z
    .object({
      message: z.string().min(1),
    })
    .optional(),
});

export type VoteFormBody = z.infer<typeof voteFormSchema>;

export type VoteFormData = VoteFormBody & {
  tripPlanType: "COURSE" | "SCHEDULE"; 
};