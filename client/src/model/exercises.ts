import { api } from '../viewModel/session';
export interface Exercise{
    id: number,
    name: string,
    description: string,
    difficulty: string,
    muscleGroup: string,
}
export function getExercises(){
    return api<Exercise[]>('exercises');
}