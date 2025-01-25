// withAuth.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "./useAuthStore";

export function withAuth(Component: React.ComponentType): React.ComponentType {
    return function AuthenticatedComponent() {
        const accessToken = useAuthStore(function (state) {
            return state.accessToken;
        });

        if (!accessToken) {
            return <Navigate to="/login" replace />;
        }

        return <Component />;
    };
}
