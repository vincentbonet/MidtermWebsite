import { api } from "../viewModel/session";

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

export async function getActivites() {
    const data = await api<Activity[]>("activity");
    return data ? data.data : [];
}