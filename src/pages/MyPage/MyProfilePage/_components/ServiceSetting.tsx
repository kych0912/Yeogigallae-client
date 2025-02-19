import * as S from "./Profile.style";
import modal from "../../../../components/Modal";
import { useDeleteAccount, useLogoutAccount } from "../../../../react-query/mutation/profile/mutations";

export default function ServiceSetting() {
    const {mutate:logout} = useLogoutAccount();
    const {mutate:deleteAccount} = useDeleteAccount();
    return (
        <S.ServiceSetting.Container>
            <S.ServiceSetting.Title>
                {"서비스 설정"}
            </S.ServiceSetting.Title>
            <S.ServiceSetting.Setting>
                {"알림 설정"}
            </S.ServiceSetting.Setting>
            <S.ServiceSetting.Setting>
                {"약관 및 서비스 이용 동의"}
            </S.ServiceSetting.Setting>
            <S.ServiceSetting.Setting onClick={()=>{
                modal.confirm.show({
                    message:"여기갈래 서비스를 탈퇴하시겠습니까?",
                    onConfirm:()=>{
                        deleteAccount();
                    }
                });
            }}>
                {"회원 탈퇴"}
            </S.ServiceSetting.Setting>
            <S.ServiceSetting.Setting onClick={()=>{
                modal.confirm.show({
                    message:"로그아웃 하시겠습니까?",
                    onConfirm:()=>{
                        logout();
                    }
                });
            }}>
                {"로그아웃"}

            </S.ServiceSetting.Setting>
        </S.ServiceSetting.Container>
    );
}
