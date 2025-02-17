import { z } from "zod";

export const VoteTypeSchema = z.union([z.literal("GOOD"), z.literal("BAD")]);

export const VoteResultSchema = z.object({
  httpStatus: z.string(),
  code: z.string(),
  message: z.string(),
  result: z.array( 
    z.object({
      userId: z.number(),
      userName: z.string(),
      type: VoteTypeSchema, 
      count: z.number(),
    })
  ),
});

export type VoteResult = z.infer<typeof VoteResultSchema>;
