import type { DataEnvelope } from "./transporttypes";
import { api } from "./session"

export interface User {
    id: number;
    name: string;
    email: string;
    admin: boolean;
    profilePicture: string;
    token?: string;
    friends: number[]
    activities: Activity[]
}

export interface Activity {
    activityID: number
    date: string
    caloriesBurned: number
    distance: number
    image: string
    description: string
}
  
export async function addUser(user: User) {
    try {
        // Check if the user already exists
        const existingUserResponse = await api<User>(`users/${user.id}`);
        const existingUserEnvelope = await existingUserResponse;

        // Check if the request was successful
        if (existingUserEnvelope.isSuccess) {
            // If the user already exists, update it
            const updateUserResponse = await api<User>(`users/${user.id}`, user, "PATCH");

            // Check if the update was successful
            if (!updateUserResponse.isSuccess) {
                throw new Error(updateUserResponse.message || 'Failed to update user data');
            }
        } else {
            // If the user doesn't exist, add it
            const addUserResponse = await api<User>("users", user, "POST");

            // Check if the addition was successful
            if (!addUserResponse.isSuccess) {
                throw new Error(addUserResponse.message || 'Failed to add user');
            }
        }

        console.log('User added/updated successfully');
    } catch (error: any) {
        console.error('Error adding/updating user:', error.message);
        // Handle errors
    }
}

export async function getUserById(userId: number) {
    try {
        const response = await api(`users/${userId}`, null, "GET");

        return response;
    } catch (error) {
        throw new Error('Failed to fetch user by ID');
    }
}

export async function deleteUser(userId: number) {
    await api(`users/${userId}`, null, "GET");
}
  
export async function addActivity(user : User | null, activity : Activity) {
    if (!user) {
        throw new Error("User is required");
    }

    const existingActivityIndex = user.activities.findIndex(
        (act) => act.activityID === activity.activityID
    );

    if (existingActivityIndex !== -1) {
        // If the activity already exists, update it
        user.activities[existingActivityIndex] = { ...activity };
    } else {
        // If the activity doesn't exist, add it
        const activitiesCount = user.activities.length;
        activity.activityID = activitiesCount + 1;
        user.activities.push({ ...activity });
    }

    // Update the user data in the backend
    await api(`users/${user.id}`, user, "PATCH");
}

export async function deleteActivity(user : User | null, activity : Activity) {
    try {
        if (!user) {
            console.error('User is null');
            return;
        }

        // Fetch user data
        const userDataResponse = await getUserById(user.id);
        const userDataEnvelope = await userDataResponse; // await the response

        // Check if the request was successful
        if (!userDataEnvelope.isSuccess) {
            throw new Error(userDataEnvelope.message || 'Failed to fetch user data');
        }

        const userData = userDataEnvelope.data as User[]; // Access data property and type assertion

        // Find the index of the user in the data
        const userIndex = userData.findIndex(u => u.id === user.id);

        if (userIndex === -1) {
            console.error('User not found');
            return;
        }

        // Find the index of the activity in the user's activities array
        const userActivities = userData[userIndex].activities;
        const activityIndex = userActivities.findIndex(a => a.activityID === activity.activityID);

        if (activityIndex === -1) {
            console.error('Activity not found');
            return;
        }

        // Remove the activity from the user's activities array
        userActivities.splice(activityIndex, 1);

        // PATCH the updated user data back to the server
        const updateResponse = await api(`users/${user.id}`, userData, 'PATCH');

        // Check if the update was successful
        if (!updateResponse.isSuccess) {
            throw new Error(updateResponse.message || 'Failed to update user data');
        }

        console.log('Activity removed and user data updated successfully');
    } catch (error: any) {
        console.error('Error removing activity and updating user:', error.message);
        // Handle errors
    }
}

export async function getActivity(user : User | null, id: number): Promise<Activity> {
    try {
        if (!user) {
            throw new Error('User is null');
        }

        // Fetch user data
        const userDataResponse = await getUserById(user.id);

        const userDataEnvelope = await userDataResponse; // await the response

        // Check if the request was successful
        if (!userDataEnvelope.isSuccess) {
            throw new Error(userDataEnvelope.message || 'Failed to fetch user data');
        }

        const userData = userDataEnvelope.data as User; // Access data property and type assertion

        // Find the activity in the user's activities array
        const activity = userData.activities.find(a => a.activityID === id);

        if (!activity) {
            throw new Error('Activity not found');
        }

        return activity;
    } catch (error: any) {
        console.error('Error getting activity:', error.message);
        throw error; // rethrow the error to handle it in the calling code
    }
}

export async function getFriendsActivities(user: User | null): Promise<Activity[]> {
    try {
        if (!user) {
            console.error('User is null');
            return [];
        }

        // Fetch all users' data
        const usersResponse = await getUsers();
        const usersEnvelope = await usersResponse; // await the response

        // Check if the request was successful
        if (!usersEnvelope.isSuccess) {
            throw new Error(usersEnvelope.message || 'Failed to fetch users data');
        }

        const allUsers = usersEnvelope.data as User[]; // Access data property and type assertion

        // Extract friend IDs from the current user
        const friendIds = user.friends;

        // Filter users to get friends' data
        const friendData = allUsers.filter(u => friendIds.includes(u.id));

        // Aggregate activities of each friend
        const friendsActivities: Activity[] = [];
        for (const friend of friendData) {
            friendsActivities.push(...friend.activities);
        }

        return friendsActivities;
    } catch (error: any) {
        const errorMessage = (error as DataEnvelope<any>).message || 'An unknown error occurred';
        console.error('Error getting friends activities:', errorMessage);
        return [];
    }
}

export async function getUserByName(userName: string): Promise<User | null> {
    try {
        // Make a request to the search endpoint with the provided userName
        const searchResponse = await api<User[]>('users/search' + `?q=${userName}`, null, 'GET');
        const searchEnvelope = await searchResponse; // await the response

        // Check if the request was successful
        if (!searchEnvelope.isSuccess) {
            throw new Error(searchEnvelope.message || 'Failed to search for users');
        }

        const searchResults = searchEnvelope.data as User[]; // Access data property and type assertion

        // If there are search results, return the first one
        if (searchResults.length > 0) {
            return searchResults[0];
        } else {
            console.log('No user found matching the search query:', userName);
            return null;
        }
    } catch (error: any) {
        const errorMessage = (error as DataEnvelope<any>).message || 'An unknown error occurred';
        console.error('Error getting user by name:', errorMessage);
        return null;
    }
}

export async function getActivities(user: User | null): Promise<Activity[]> {
    try {
        if (!user) {
            console.error('User is null');
            return [];
        }

        // Fetch user data
        const userDataResponse = await getUserById(user.id);
        const userDataEnvelope = await userDataResponse; // await the response

        // Check if the request was successful
        if (!userDataEnvelope.isSuccess) {
            throw new Error(userDataEnvelope.message || 'Failed to fetch user data');
        }

        const userData = userDataEnvelope.data as User; // Access data property and type assertion

        // Check if userData is undefined or empty
        if (!userData) {
            console.error('User data is empty or undefined');
            return [];
        }

        // Return all activities for the current user
        return userData.activities;
    } catch (error: any) {
        const errorMessage = (error as DataEnvelope<any>).message || 'An unknown error occurred';
        console.error('Error getting all activities for user:', errorMessage);
        return [];
    }
}

export async function getActivitiesToday(user: User | null): Promise<Activity[]> {
    try {
        if (!user) {
            console.error('User is null');
            return [];
        }

        // Fetch user data
        const userDataResponse = await getUserById(user.id);
        const userDataEnvelope = await userDataResponse; // await the response

        // Check if the request was successful
        if (!userDataEnvelope.isSuccess) {
            throw new Error(userDataEnvelope.message || 'Failed to fetch user data');
        }

        const userData = userDataEnvelope.data as User; // Access data property and type assertion

        // Check if userData is undefined or empty
        if (!userData) {
            console.error('User data is empty or undefined');
            return [];
        }

        const currentDate = new Date();
        const currentDateString = currentDate.toISOString().slice(0, 10); // Get current date in 'YYYY-MM-DD' format

        // Filter activities for the current day
        const activitiesToday = userData.activities.filter(activity => activity.date === currentDateString);

        return activitiesToday;
    } catch (error: any) {
        const errorMessage = (error as DataEnvelope<any>).message || 'An unknown error occurred';
        console.error('Error getting activities for today:', errorMessage);
        return [];
    }
}

export async function getActivitiesThisWeek(user: User | null): Promise<Activity[]> {
    try {
        if (!user) {
            console.error('User is null');
            return [];
        }

        // Fetch user data
        const userDataResponse = await getUserById(user.id);
        const userDataEnvelope = await userDataResponse; // await the response

        // Check if the request was successful
        if (!userDataEnvelope.isSuccess) {
            throw new Error(userDataEnvelope.message || 'Failed to fetch user data');
        }

        const userData = userDataEnvelope.data as User; // Access data property and type assertion

        // Check if userData is undefined or empty
        if (!userData) {
            console.error('User data is empty or undefined');
            return [];
        }

        const currentDate = new Date();
        const currentDay = currentDate.getDay(); // Get current day of the week (0 for Sunday, 1 for Monday, etc.)

        // Calculate the start date of the week (Sunday)
        const startDate = new Date(currentDate);
        startDate.setDate(startDate.getDate() - currentDay);

        // Calculate the end date of the week (Saturday)
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 6);

        // Filter activities for the current week
        const activitiesThisWeek = userData.activities.filter(activity => {
            const activityDate = new Date(activity.date);
            return activityDate >= startDate && activityDate <= endDate;
        });

        return activitiesThisWeek;
    } catch (error: any) {
        const errorMessage = (error as DataEnvelope<any>).message || 'An unknown error occurred';
        console.error('Error getting activities for this week:', errorMessage);
        return [];
    }
}

export function getUsers() {
    return api<User[]>('users');
}