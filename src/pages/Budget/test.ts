export const budgetPageData = {
    roomName: "Skrrr",
    peopleCount: 4,
    priceRange: {
        min: 10,
        max: 30,
    },
    location: "강릉, 강원도",
    period: {
        nights: 2,
        startDate: "2025-07-15",
        endDate: "2025-07-17",
    },
};

export const sampleBudgetData = [
    {
        day: "Day 1",
        items: [
            { id: 1, name: "차이나타운, 용현시장, 평화시장", category: "식사비", cost: "120,000원", icon: "🍎" },
            { id: 2, name: "월미도, 롯데월드타워", category: "활동비", cost: "30,000원", icon: "📸" },
            { id: 3, name: "로데오, 더 현대", category: "쇼핑비", cost: "30,000원", icon: "🛍️" },
            { id: 4, name: "6인승 차 렌트", category: "교통비", cost: "60,000원", icon: "🚗" },
        ],
    },
    {
        day: "Day 2",
        items: [
            { id: 1, name: "한강 피크닉", category: "식사비", cost: "40,000원", icon: "🍎" },
            { id: 2, name: "서울타워", category: "활동비", cost: "50,000원", icon: "📸" },
        ],
    },
    {
        day: "Day 3",
        items: [
            { id: 1, name: "경복궁 투어", category: "활동비", cost: "20,000원", icon: "📸" },
            { id: 2, name: "기념품 구매", category: "쇼핑비", cost: "10,000원", icon: "🛍️" },
        ],
    },
];
