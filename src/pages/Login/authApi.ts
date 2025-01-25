import apiClient from "./apiClient";

export function loginWithProvider({ code, provider }: { code: string; provider: string }): Promise<{ accessToken: string }> {
    return apiClient.post(`/login/${provider}`, { code }).then(function (response) {
        return response.data;
    });
}
