import NoticeItem from "./_components/NoticeItem";
import { useNotice } from "../../../hooks/useNotice";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../types/header/header";
import { useEffect } from "react";
import { useGetNotice } from "../../../react-query/queries/notice/queries";
import NoticeSkeleton from "./_components/Skeleton";
export default function NoticePage(){
    const {noticeWithRead, handleNoticeClick, setNoticesInitial} = useNotice();
    const {data: notices, isLoading, isError} = useGetNotice();
    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();


    useEffect(() => {   
        setHeaderConfig({title:"알림"});
        if(notices) setNoticesInitial(notices);
    },[notices]);

    if(isLoading) return <NoticeSkeleton/>;
    if(isError) return <div>Error...</div>;

    return (
        <>
            {noticeWithRead.map((notice) => (
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
