import { useMutation } from "@tanstack/react-query";
import { deleteAccount, logout } from "../../../apis/profile";
import { useNavigate } from "react-router-dom";

export const useLogoutAccount = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: logout,
        onSuccess: () => {
            navigate("/onboarding");
        },
    });
};

export const useDeleteAccount = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: deleteAccount,
        onSuccess: () => {
            navigate("/");
        },
    });
};
