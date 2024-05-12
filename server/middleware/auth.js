module.exports.parseAuthToken = function(authToken) {
    try {
        const parsedToken = JSON.parse(authToken);
        if (parsedToken.isAdmin) {
            console.log('Admin functionality enabled');
        } else {
            console.log('Regular user functionality');
        }
    } catch (error) {
        console.error('Failed to parse authentication token:', error);
    }
}

