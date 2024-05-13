import type { DataEnvelope } from "./transporttypes";
import { useToast } from "vue-toastification";
import { refSession } from "../viewModel/session";

const session = refSession();
const toast = useToast();


export const API_ROOT = import.meta.env.VITE_API_ROOT;

export function rest(url: string, data?: unknown, method?: string) {
    return fetch(url, {
        method: method ?? (data ? "POST" : "GET"),
        headers: {
            "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : undefined,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error("Fetch error:", error);
        throw error; 
    });
}

export function api<T>(action: string, data?: unknown, method?: string): Promise<DataEnvelope<T>> {
    return rest(`${API_ROOT}/${action}`, data, method);
}

export function handleError(error: Error) {
    console.error("API error:", error);
    toast.error(error.message || error);
}

