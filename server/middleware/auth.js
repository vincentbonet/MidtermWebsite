import jwt from 'jsonwebtoken';

exports.parseAuthToken = function(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied: No Token Provided!');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}