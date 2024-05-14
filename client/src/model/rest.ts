import type { DataEnvelope } from "./transporttypes";

export const ROOT = import.meta.env.VITE_API_ROOT;

export function rest(url: string, data?: unknown, method?: string, headers?: Record<string, string>){
    return fetch(url, {
        method: method ?? (data ? "POST" : "GET"),
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: data ? JSON.stringify(data) : undefined,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
}

export function api<T>(action: string, data?: unknown, method?: string): Promise<DataEnvelope<T>> {
    return rest(`${ROOT}/${action}`, data, method);
}

export function refSession() {
    const session = {
        user: null,
        isLoading: 0,
    };
    return session;
}
