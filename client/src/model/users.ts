import { api } from "../viewModel/session";

export interface User {
    firstName: string;
    lastName: string;
    id: number;
    username: string;
    email: string;
    password: string;
    age: number;
    phone: string;
    birthDate: string;
    image: string;
    role: string;
    admin: boolean;
}

export async function getUsers() {
    const data = await api<User[]>("users");
    return data ? data.data : [];
}