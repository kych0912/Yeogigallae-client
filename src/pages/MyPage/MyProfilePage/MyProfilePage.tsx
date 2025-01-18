// 프로필 화면
import React from 'react';
import * as S from './_components/Profile.style'; 
import UserProfile from './_components/UserProfile';
import ServiceSetting from './_components/ServiceSetting';
const MyProfilePage: React.FC = () => {
    return (
        <S.Container>
            <UserProfile avatar={"https://picsum.photos/200/300"} />
            <ServiceSetting />
        </S.Container>
    );
};

export default MyProfilePage;
