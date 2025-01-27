import NoticeItem from "./_components/NoticeItem";
import { useNotice } from "../../../hooks/useNotice";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../types/header/header";
export default function NoticePage(){
    const {notices, handleNoticeClick} = useNotice();
    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();
    setHeaderConfig({title:"알림"});
    
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
