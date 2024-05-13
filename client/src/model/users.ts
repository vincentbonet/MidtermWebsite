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

export function getUsers() {
    return api<User[]>('users');
}