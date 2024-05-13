import { api } from '../viewModel/session';

export interface Exercise {
    id: number;
    name: string;
    description: string;
    difficulty: string;
    muscleGroup: string;
}

export async function getExercises(): Promise<Exercise[]> {
    const data = await api<Exercise[]>("exercises");
    return data ? data.data : [];
}

export async function createExercise(newExercise: Exercise): Promise<Exercise | null> {
    const data = await api<Exercise>("exercises", {
        method: "POST",
        body: JSON.stringify(newExercise)
    });
    return data ? data.data : null;
}

export async function deleteExercise(exerciseId: number): Promise<boolean> {
    const data = await api<boolean>(`exercises/${exerciseId}`, {
        method: "DELETE"
    });
    return data ? data.data : false;
}

export async function updateExercise(exerciseId: number, updatedExercise: Partial<Exercise>): Promise<Exercise | null> {
    const data = await api<Exercise>(`exercises/${exerciseId}`, {
        method: "PUT",
        body: JSON.stringify(updatedExercise)
    });
    return data ? data.data : null;
}
