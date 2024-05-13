import { api } from "../viewModel/session";

export interface Activity {
    date: string;
    duration: number;
    exerciseData: {
        steps: number;
        caloriesBurned: number;
        image: string;
        description: string;
    };
}

export async function getActivities(): Promise<Activity[]> {
    const data = await api<Activity[]>("activities");
    return data ? data.data : [];
}

export async function createActivity(newActivity: Activity): Promise<Activity | null>  {
    const data = await api<Activity>("activities", {
        method: "POST",
        body: JSON.stringify(newActivity)
    });
    return data ? data.data : null;
}

export async function deleteActivity(activityDate: string): Promise<boolean> {
    const data = await api<boolean>(`activities/${activityDate}`, {
        method: "DELETE"
    });
    return data ? data.data : false;
}

export async function updateActivity(activityDate: string, updatedActivity: Partial<Activity>): Promise<Activity | null> {
    const data = await api<Activity>(`activities/${activityDate}`, {
        method: "PUT",
        body: JSON.stringify(updatedActivity)
    });
    return data ? data.data : null;
}
