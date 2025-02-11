import * as z from "zod";

export const ShareCourseSchema = z.object({
    image: z.string().min(1, { message: "이미지를 추가해주세요." }),
    place: z.object({
        placeId: z.number(),
        placeName: z.string(),
        lat:z.number(),
        lng:z.number(),
    }),
    description: z.string().min(1, { message: "설명을 입력해주세요." }),
});

export const ShareCourseListSchema = z.array(ShareCourseSchema)
.min(
    1, { message: "장소를 추가해주세요." }
)
.refine(
    (codes) => {
        const uniqueCodes = new Set(codes.map(c => c));
        return uniqueCodes.size === codes.length;
    },
    {
        message: "중복된 장소가 있습니다.",
    }
);


