import { api } from "./session";

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

export async function addUser(user: User) {
    try {
        const existingUserResponse = await api<User>(`users/${user.id}`);
        const existingUserEnvelope = await existingUserResponse;

        if (existingUserEnvelope.isSuccess) {
            const updateUserResponse = await api<User>(`users/${user.id}`, user, "PATCH");

            if (!updateUserResponse.isSuccess) {
                throw new Error(updateUserResponse.message || 'Failed to update user data');
            }
        } else {
            const addUserResponse = await api<User>("users", user, "POST");

            if (!addUserResponse.isSuccess) {
                throw new Error(addUserResponse.message || 'Failed to add user');
            }
        }

        console.log('Updated successfully');
    } catch (error: any) {
        console.error('Unsuccessful update:', error.message);
    }
}

export async function deleteUser(id: number) {
    try {
        const deleteUserResponse = await api<User>(`users/${id}`, undefined, "DELETE");

        if (!deleteUserResponse.isSuccess) {
            throw new Error(deleteUserResponse.message || 'Failed to delete user');
        }

        console.log('Deleted successfully');
    } catch (error: any) {
        console.error('Unsuccessful delete:', error.message);
    }
}

export async function addActivity(activity: Activity) {
    try {
        const addActivityResponse = await api<Activity>("activities", activity, "POST");

        if (!addActivityResponse.isSuccess) {
            throw new Error(addActivityResponse.message || 'Failed to add activity');
        }

        console.log('Added successfully');
    } catch (error: any) {
        console.error('Unsuccessful add:', error.message);
    }
}

export async function deleteActivity(id: number) {
    try {
        const deleteActivityResponse = await api<Activity>(`activities/${id}`, undefined, "DELETE");

        if (!deleteActivityResponse.isSuccess) {
            throw new Error(deleteActivityResponse.message || 'Failed to delete activity');
        }

        console.log('Deleted successfully');
    } catch (error: any) {
        console.error('Unsuccessful delete:', error.message);
    }
}

export async function getActivities() {
    try {
        const getActivitiesResponse = await api<Activity[]>("activities");

        if (!getActivitiesResponse.isSuccess) {
            throw new Error(getActivitiesResponse.message || 'Failed to get activities');
        }

        console.log('Got activities successfully');
        return getActivitiesResponse.data;
    } catch (error: any) {
        console.error('Unsuccessful get:', error.message);
    }
}

export async function getActivity(id: number) {
    try {
        const getActivityResponse = await api<Activity>(`activities/${id}`);

        if (!getActivityResponse.isSuccess) {
            throw new Error(getActivityResponse.message || 'Failed to get activity');
        }

        console.log('Got activity successfully');
        return getActivityResponse.data;
    } catch (error: any) {
        console.error('Unsuccessful get:', error.message);
    }
}

export async function getActivitiesForMonth(month: number) {
    try {
        const activitiesResponse = await api<Activity[]>("activities");
        
        if (!activitiesResponse.isSuccess) {
            throw new Error(activitiesResponse.message || 'Failed to get activities');
        }
        
        const activities = activitiesResponse.data;
        const activitiesForMonth = activities.filter(activity => {
            const activityDate = new Date(activity.date);
            return activityDate.getMonth() === month;
        });
        
        console.log('Got activities for month successfully');
        return activitiesForMonth;
    } catch (error: any) {
        console.error('Unsuccessful get activities for month:', error.message);
    }
}

export function getUsers() {
    return api<User[]>("users");
}