import type { User } from "../model/users";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import * as rest from "../model/rest";
import { useToast } from "vue-toastification";

const session = reactive({
    user: null as User | null,
    isLoading: 0,
});

export function useLogin() {
    const router = useRouter();
    return {
        async login(user: User) {
            const x = await api<User>("users/login", user);
            if (x) {
                session.user = x.data;
                router.push("/");
            }
        },
        async logout() {
            await api("users/logout");
            session.user = null;
            router.push("/");
        },
    }
}

export const refSession = () => session;

const toast = useToast();

export function api<T>(action: string, data?: unknown, method?: string) {
    session.isLoading++;
    return rest.api<T>(action, data, method)
        .then(x => {
            if (!x.isSuccess) {
                showError(x);
            }
            return x;
        })
        .catch(showError)
        .finally(() => session.isLoading--);
}

export function showError(error: any) {
    console.error(error);
    toast.error(error.message || error);
}