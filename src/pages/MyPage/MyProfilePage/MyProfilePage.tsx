import UserProfile from './_components/UserProfile';
import ServiceSetting from './_components/ServiceSetting';
import CommonContainer from '../../../components/Layout/CommonContainer';
import { useOutletContext } from 'react-router-dom';
import { HeaderConfig } from '../../../types/header/header';
import { useEffect } from 'react';
import { useAuthStore } from '../../Login/useAuthStore';
export default function MyProfilePage() {
    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();
    const { profileImage, nickname } = useAuthStore();
    useEffect(() => {
        setHeaderConfig({title:"마이페이지"});
    }, []);

    return (
        <CommonContainer>
            <UserProfile avatar={profileImage} nickname={nickname} />
            <ServiceSetting />
        </CommonContainer>
    );
};