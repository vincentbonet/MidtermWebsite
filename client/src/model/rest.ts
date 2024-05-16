import type { DataEnvelope } from "./transporttypes";

export const API_ROOT = import.meta.env.VITE_API_ROOT;

export async function rest<T>(url: string, data?: unknown, method?: string, headers?: Record<string, string>): Promise<T> {
    const requestOptions: RequestInit = {
        method: method ?? (data ? "POST" : "GET"),
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: data ? JSON.stringify(data) : undefined,
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    return response.json();
}

export function api<T>(action: string, data?: unknown, method?: string): Promise<T> {
    return rest<T>(`${API_ROOT}/${action}`, data, method);
}
