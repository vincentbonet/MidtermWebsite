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
}

export interface Activity {
    date: string;
    duration: number;
    exerciseData : {
        steps: number;
        caloriesBurned: number;
        image: string;
        description: string;
    }
}

export function getUsers() {
    return api<User[]>("users");
}