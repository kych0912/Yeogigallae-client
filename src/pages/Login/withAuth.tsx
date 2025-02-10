import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "./useAuthStore";

type AuthOption = true | false | null;

const withAuth = (WrappedComponent: React.ComponentType, authOption: AuthOption) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (props: any) => {
        const isAuthenticated = useAuthStore((state) => !!state.accessToken);

        //null: 로그인 여부 상관 없이 접근, true: 로그인O 접근, false: 로그인X 접근 가능
        if (authOption === null) {
            return <WrappedComponent {...props} />;
        }

        if (authOption === true && !isAuthenticated) {
            return <Navigate to="/login" replace />;
        }

        if (authOption === false && isAuthenticated) {
            return <Navigate to="/" replace />;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
