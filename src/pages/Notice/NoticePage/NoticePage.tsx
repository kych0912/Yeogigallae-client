import NoticeItem from "./_components/NoticeItem";
import { useNotice } from "../../../hooks/useNotice";

export default function NoticePage(){
    const {notices, handleNoticeClick} = useNotice();

    return (
        <>
            {notices.map((notice) => (
                <NoticeItem 
                    key={notice.id}
                    title={notice.title} 
                    caption={notice.caption}
                    isRead={notice.isRead}
                    type={notice.type}
                    onClick={() => handleNoticeClick(notice.id)}
                />
            ))}
        </>
    );
};
