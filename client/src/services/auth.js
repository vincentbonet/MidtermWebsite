async function login(username, password) {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            return true;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Login error:', error);
        return false; 
    }
}

async function fetchData() {
    const token = localStorage.getItem('token');
    if (!token) {
        console.error('No token available.');
        return null;
    }

    try {
        const response = await fetch('https://finalprojectwsp.onrender.com/api/v1/data', {
            headers: { 'Authorization': token }
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Failed to fetch data.');
        }
    } catch (error) {
        console.error('Fetch data error:', error);
        return null;
    }
}

// Function to log out user and remove JWT token from storage
function logout() {
    localStorage.removeItem('token');
}

// Example usage
async function example() {
    // Log in
    const isAuthenticated = await login('username', 'password');
    if (isAuthenticated) {
        // Fetch data from protected route
        const data = await fetchData();
        console.log('Fetched data:', data);
    }

    // Log out
    logout();
}
