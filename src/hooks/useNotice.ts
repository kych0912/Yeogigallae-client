import { useState } from 'react';
import { Notice } from '../apis/notice/types';

interface NoticeWithRead extends Notice {
    isRead: boolean;
}



export function useNotice() {
    const [noticeWithRead, setNoticeWithRead] = useState<NoticeWithRead[]>([]);
    //DB로부터 data를 받아오는 것으로 가정

    //localStorage에 읽은 알림 id를 불러온 후 해당 알림을 읽은 상태로 변경
    const setNoticesInitial = (notices: Notice[]) => {
        const readNoticeIds = JSON.parse(localStorage.getItem('readNoticeIds') || '[]');
        const updatedNotices = notices.map(notice => ({
            ...notice,
            isRead: readNoticeIds.includes(notice.id)
        }));
        setNoticeWithRead(updatedNotices);
    }

    //클릭 시 localSoage에 읽은 알림 id를 저장하고 해당 알림을 읽은 상태로 변경

    const handleNoticeClick = (id: number) => {
        const readNoticeIds = JSON.parse(localStorage.getItem('readNoticeIds') || '[]');
        
        if (!readNoticeIds.includes(id)) {
            const updatedIds = [...readNoticeIds, id];
            localStorage.setItem('readNoticeIds', JSON.stringify(updatedIds));
            setNoticeWithRead(prev => 
                prev.map(notice => 
                    notice.id === id ? { ...notice, isRead: true } : notice
                )
            );
        }
    };

    const hasNotification = (notices: Notice[]) => {
        const readNoticeIds = JSON.parse(localStorage.getItem('readNoticeIds') || '[]');
        return notices.some(notice => !readNoticeIds.includes(notice.id));
    }

    return {
        noticeWithRead,
        handleNoticeClick,
        setNoticesInitial,
        hasNotification
    };

}