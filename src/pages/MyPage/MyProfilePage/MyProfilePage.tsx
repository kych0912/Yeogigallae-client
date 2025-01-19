// 프로필 화면
import React from 'react';
import UserProfile from './_components/UserProfile';
import ServiceSetting from './_components/ServiceSetting';
import CommonContainer from '../../../components/Layout/CommonContainer';

const MyProfilePage: React.FC = () => {
    return (
        <CommonContainer>
            <UserProfile avatar={"https://picsum.photos/200/300"} />
            <ServiceSetting />
        </CommonContainer>
    );
};

export default MyProfilePage;
