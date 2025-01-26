// withAuthHandler.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "./useAuthStore";

const withAuthHandler = <P extends object>(WrappedComponent: React.FC<P>) => {
    return (props: P) => {
        const navigate = useNavigate();
        const { accessToken } = useAuthStore();

        if (!accessToken) {
            navigate("/login", { replace: true });
            return null;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuthHandler;
