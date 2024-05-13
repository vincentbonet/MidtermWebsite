import type { DataEnvelope } from "./transporttypes";
import { useToast } from "vue-toastification";

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
        console.log("response", response);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Check if the response is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json();
        } else {
            // Throw an error with a custom message for non-JSON responses
            throw new Error("Unexpected response format. Expected JSON.");
        }
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

export function refSession() {
    const session = {
        user: null,
        isLoading: 0,
    };
    return session;
}
