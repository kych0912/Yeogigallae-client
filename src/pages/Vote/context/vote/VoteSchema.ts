import { z } from "zod";

export const VoteSchema = z.object({ 
  tripId: z.number(),
  type: z.string(),
  voteRoomId: z.number(),
})

export type VoteData = z.infer<typeof VoteSchema>;