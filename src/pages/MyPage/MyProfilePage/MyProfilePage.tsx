import UserProfile from './_components/UserProfile';
import ServiceSetting from './_components/ServiceSetting';
import CommonContainer from '../../../components/Layout/CommonContainer';
import { useOutletContext } from 'react-router-dom';
import { HeaderConfig } from '../../../types/header/header';
import { useEffect } from 'react';
import Modal from '../../../components/Modal/core';
import { useProfileQuery } from '../../../react-query/queries/profile/queries';
import MyProfileSkeleton from './_components/Skeleton';
export default function MyProfilePage() {
    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();
    const {data:profile, isLoading} = useProfileQuery();
    
    useEffect(() => {
        setHeaderConfig({title:"마이페이지"});
    }, []);

    return (
        <CommonContainer>
            <Modal />

            {isLoading ? <MyProfileSkeleton /> : (
                <>
                    <UserProfile avatar={profile?.avatar} />
                    <ServiceSetting />
                </>
            )}
        </CommonContainer>


    );
};