
function authenticate(req, res, next) {
    if (req.isAuthenticated()) {
        return next(); 
    } else {
        return res.status(401).json({ message: 'Unauthorized' }); 
    }
}

function authorize(role) {
    return (req, res, next) => {
        if (req.user && req.user.role === role) {
            return next(); 
        } else {
            return res.status(403).json({ message: 'Forbidden' }); 
        }
    };
}
