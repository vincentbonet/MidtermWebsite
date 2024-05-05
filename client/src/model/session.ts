import { type User } from "./users";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import * as myfetch from "./myfetch";
import  useToast  from "vue-toastification";

const session = reactive({
    user: null as User | null,
    isLoading: 0,
})

export const refSession = () => session;

export function getSession(){
    return session;
}

export function useLogin(){
    const router = useRouter();
    return {
        async login(user: User) {
            const x = await api<User>("users/login", user);
            if(x){
                session.user = x.data;
                router.push("/");
            }
        },
        logout() {
            session.user = null;
            router.push("/");
        }
    };
}

export function api<T>(action: string, data?: unknown, method?: string) {
    session.isLoading++;

    return myfetch.api<T>(action, data, method)
    .then(x => {
        if (!x.isSuccess){
            //showError(x);
        }
        return x;
    })
    //.catch(showError)
    .finally(() => session.isLoading--);
}

const toast = useToast();

export function showError(error: any) {
    console.error(error);
    
    toast.error(error.message || error);
}