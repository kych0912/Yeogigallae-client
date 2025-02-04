import { z } from "zod";

const voteFormSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.string(),
  startDate: z.string().min(8).default("0000-00-00"),
  endDate: z.string().min(8).default("0000-00-00"),
  tripType: z.string(),
  voteLimitTime: z.string(),
  minDays: z.number(),
  maxDays: z.number(),
  groupName: z.string().default(""),
  activeButton: z.string().optional().default("CREATE"),
  price: z.string().optional(),
  imageUrl: z.string().optional(),
  tripPlanType: z.string().optional(),
  description: z.string().optional(),
  description_VOTE: z.string().optional(),  // ✅ VOTE용 description 추가
  description_COURSE: z.string().optional(),  // ✅ COURSE용 description 추가
});

export default voteFormSchema;
export type VoteFormData = z.infer<typeof voteFormSchema>;
