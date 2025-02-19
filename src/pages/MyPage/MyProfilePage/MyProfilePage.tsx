import UserProfile from './_components/UserProfile';
import ServiceSetting from './_components/ServiceSetting';
import CommonContainer from '../../../components/Layout/CommonContainer';
import { useAuthStore } from '../../Login/useAuthStore';
import useSetHeader from '../../../hooks/useSetHeader';


export default function MyProfilePage() {
    useSetHeader({title:"마이페이지"});
    const { profileImage, nickname } = useAuthStore();

    return (
        <CommonContainer>
            <UserProfile avatar={profileImage} nickname={nickname} />
            <ServiceSetting />
        </CommonContainer>
    );
};