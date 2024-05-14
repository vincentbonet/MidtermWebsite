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

export async function getUsers(): Promise<User[]> {
    const data = await api<User[]>("users");
    return data ? data.data : [];
}

export async function authenticateUser(username: string, password: string): Promise<User | null> {
    const users = await getUsers();
    const user = users.find(user => user.username === username && user.password === password);
    return user || null;
}

export async function createUser(newUser: User): Promise<User | null> {
    const data = await api<User>("users", {
        method: "POST",
        body: JSON.stringify(newUser)
    });
    return data ? data.data : null;
}

export async function deleteUser(userId: number): Promise<boolean> {
    const data = await api<boolean>(`users/${userId}`, {
        method: "DELETE"
    });
    return data ? data.data : false;
}

export async function updateUser(userId: number, updatedUser: Partial<User>): Promise<User | null> {
    const data = await api<User>(`users/${userId}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser)
    });
    return data ? data.data : null;
}
