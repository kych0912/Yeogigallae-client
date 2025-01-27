import UserProfile from './_components/UserProfile';
import ServiceSetting from './_components/ServiceSetting';
import CommonContainer from '../../../components/Layout/CommonContainer';
import { useOutletContext } from 'react-router-dom';
import { HeaderConfig } from '../../../types/header/header';
import { useEffect } from 'react';

export default function MyProfilePage() {
    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();
    
    useEffect(() => {
        setHeaderConfig({title:"마이페이지"});
    }, []);

    return (
        <CommonContainer>
            <UserProfile avatar={"https://picsum.photos/200/300"} />
            <ServiceSetting />
        </CommonContainer>
    );
};