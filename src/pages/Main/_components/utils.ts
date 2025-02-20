export const isTimeExpired = (createdAt: string, remainingTime: string): boolean => {
    const createdTime = new Date(createdAt).getTime();
    const now = Date.now() // ✅ 현재 시간을 한국 시간(KST)으로 변환
    let duration = 0;

    switch (remainingTime) {
        case "THIRTY_MINUTES":
            duration = 30 * 60 * 1000;
            break;
        case "SIXTY_MINUTES":
            duration = 60 * 60 * 1000;
            break;
        case "FOUR_HOURS":
            duration = 4 * 60 * 60 * 1000;
            break;
        case "SIX_HOURS":
            duration = 6 * 60 * 60 * 1000;
            break;
        default:
            return true;
    }

    const expired = now >= createdTime + duration;

    return expired;
};
