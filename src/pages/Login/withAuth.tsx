import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "./useAuthStore";
import { getUser } from "../../apis/user";
import Modal from "../../components/Modal/core";
import modal from "../../components/Modal";
import axiosError from "axios";
import { DEFAULT_User } from "../../apis/user/mocks";
type AuthOption = true | false | null;

const withAuth = (WrappedComponent: React.ComponentType, authOption: AuthOption,isNeedMock:boolean = false) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (props: any) => {
        // 목데이터 테스트 시 로그인 여부 상관 없이 접근
        const isAuthenticated = useAuthStore((state) => state.email !== "") && isNeedMock;
        const { setProfile } = useAuthStore();
        const navigate = useNavigate();

        useEffect(() => {
            const fetchUser = async () => {
 
                //null: 로그인 여부 상관 없이 접근, true: 로그인O 접근, false: 로그인X 접근 가능
                if (authOption === null) {
                    return;
                }

                if(authOption === false){
                    return;
                }

                if(authOption === true){
                    //만약 전역 상태에 유저 정보가 없다면 유저 정보를 가져온다.
                    if (!isAuthenticated) {
                        try {
                            //만약 로그인 안 되어 있을 때 400 에러 발생
                            const user = await getUser();
                            setProfile(
                                user.userId,
                                user.email,
                                user.nickname,
                                user.profileImage
                            );
                        } catch (error) {
                            if(axiosError.isAxiosError(error) && error.response?.status === 400){

                                //목데이터 테스트 시 목데이터 반환
                                if(isNeedMock){
                                    setProfile(
                                        DEFAULT_User.userId,
                                        DEFAULT_User.email,
                                        DEFAULT_User.nickname,
                                        DEFAULT_User.profileImage
                                    );
                                    return;
                                }

                                //목데이터 테스트 아닐 경우 에러 모달
                                modal.confirm.show({
                                    message: "로그인이 필요한 서비스입니다.",
                                    confirmText: "로그인",
                                    cancelText: "취소",
                                    onConfirm: () => {
                                        navigate('/login');
                                    },
                                    onCancel: () => {
                                        navigate(-1);
                                    }
                                });
                            }
                            if (authOption === true) {
                                modal.confirm.show({
                                    message: "로그인이 필요한 서비스입니다.",
                                    confirmText: "로그인",
                                    cancelText: "취소",
                                    onConfirm: () => {
                                        navigate('/login');
                                    },
                                    onCancel: () => {
                                        navigate(-1);
                                    }
                                });
                                return; // 모달 표시 후 추가 실행 방지
                            }
                        }
                    }

                    return;
                }
            };
            fetchUser();
        }, []);

        
        
        return(
            <>
                <Modal/>
                <WrappedComponent {...props} />
            </>
        );
    };
};

export default withAuth;
