import * as S from "./Profile.style";

export default function ServiceSetting() {
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
            <S.ServiceSetting.Setting>
                {"회원 탈퇴"}
            </S.ServiceSetting.Setting>
            <S.ServiceSetting.Setting>
                {"로그아웃"}
            </S.ServiceSetting.Setting>
        </S.ServiceSetting.Container>
    );
}
