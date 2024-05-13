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

export function getUsers() {
    return api<Activity[]>('activities');
}