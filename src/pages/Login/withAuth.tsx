import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "./useAuthStore";
import { getUser } from "../../apis/user";

type AuthOption = true | false | null;

const withAuth = (WrappedComponent: React.ComponentType, authOption: AuthOption) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (props: any) => {
        const isAuthenticated = useAuthStore((state) => state.email !== "");
        const { setProfile } = useAuthStore();

        useEffect(() => {
            const fetchUser = async () => {
                //null: 로그인 여부 상관 없이 접근, true: 로그인O 접근, false: 로그인X 접근 가능
                if (authOption === null) {
                    return <WrappedComponent {...props} />;
                }

                //만약 전역 상태에 유저 정보가 없다면 유저 정보를 가져온다.
                if(!isAuthenticated){
                    const user = await getUser();
                    setProfile(
                        user.userId,
                        user.email,
                        user.nickname,
                        user.profileImage
                    );
                }

                if (authOption === true && !isAuthenticated) {
                    return <Navigate to="/login" replace />;
                }

                if (authOption === false && isAuthenticated) {
                    return <Navigate to="/" replace />;
                }
            };
            fetchUser();
        }, []);

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
