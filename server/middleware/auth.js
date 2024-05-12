import jwt from 'jsonwebtoken';

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

exports.parseAuthToken = function(token) {
    try {
        return jwt.decode(token) 
    } catch (error) {
        console.error('Failed to decode token', error);
        return null;
    }
}
