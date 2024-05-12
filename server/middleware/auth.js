exports.authenticate = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next(); 
    } else {
        return res.status(401).json({ message: 'Unauthorized' }); 
    }
}

exports.authorize = function(role) {
    return (req, res, next) => {
        if (req.user && req.user.role === role) {
            return next(); 
        } else {
            return res.status(403).json({ message: 'Forbidden' }); 
        }
    };
}
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

