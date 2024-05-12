import type { User } from "../model/users";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import * as myfetch from "../model/myFetch";
import { useToast }  from "vue-toastification";

const session = reactive({
    user: null as User | null,
    isLoading: 0,
});

export function getSession() {
    return session;
}

export function useLogin() {
    const router = useRouter();

    async function login(user: User) {
        const x = await api<User>("users/login", user);
        if (x) {
            session.user = x.data;
            router.push("/");
        }
    }

    function logout() {
        session.user = null;
        router.push("/");
    }

    return { login, logout };
}

export const refSession = () => session;

export function api<T>(action: string, data?: unknown, method?: string) {
    session.isLoading++;

    return myfetch.api<T>(action, data, method)
        .then(x => {
            if (!x.isSuccess) {
                showError(x);
            }
            return x;
        })
        .finally(() => session.isLoading--);
}

const toast = useToast();

export function showError(error: any) {
    console.error(error);
    toast.error(error.message || error);
}
