import { z } from "zod";

export const VoteResultSchema = z.object({ 
  userId: z.number(),
  userName: z.string(),
  type: z.string(),
  count: z.number(),
})

export type VoteResultData = z.infer<typeof VoteResultSchema>;