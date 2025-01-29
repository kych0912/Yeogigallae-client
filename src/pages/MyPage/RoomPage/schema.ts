import * as z from "zod";

export const roomSchema = z.object({
    roomName: z.string().min(1, { message: "방 이름을 입력해주세요." }),
    roomFriend: z.array(z.string())
    .min(1, { message: "친구를 추가해주세요." })
    .refine(
        (codes) => {
          const uniqueCodes = new Set(codes.map(c => c));
          return uniqueCodes.size === codes.length;
        },

        {
          message: "중복된 친구 코드가 있습니다",
        }
    ),
});
