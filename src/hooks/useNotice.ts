import { useState, useEffect } from 'react';

interface Notice {
    id: number;
    title: string;
    caption: string;
    type:NoticeType;
    isRead: boolean;
}

interface NoticeDBItem {
    id: number;
    title: string;
    caption: string;
    type:NoticeType;
}

type NoticeType = "VOTE" | "COURSE" | "BUDGET";

export function useNotice() {
    const [notices, setNotices] = useState<Notice[]>([]);

    const mocks:NoticeDBItem[] = [{
        id: 1,
        title: "홈 화면 테스트",
        caption: "홈 화면 테스트 캡션",
        type:"VOTE",
    },{
        id: 2,
        title: "홈 화면 테스트",
        caption: "홈 화면 테스트 캡션",
        type:"BUDGET",
    }];

    useEffect(() => {
        const readNoticeIds = JSON.parse(localStorage.getItem('readNoticeIds') || '[]');
        const updatedNotices = mocks.map(notice => ({
            ...notice,
            isRead: readNoticeIds.includes(notice.id)
        }));
        setNotices(updatedNotices);
    }, []);

    const handleNoticeClick = (id: number) => {
        const readNoticeIds = JSON.parse(localStorage.getItem('readNoticeIds') || '[]');
        
        if (!readNoticeIds.includes(id)) {
            const updatedIds = [...readNoticeIds, id];
            localStorage.setItem('readNoticeIds', JSON.stringify(updatedIds));
            
            setNotices(prev => 
                prev.map(notice => 
                    notice.id === id ? { ...notice, isRead: true } : notice
                )
            );
        }
    };

    return {
        notices,
        handleNoticeClick
    };
}