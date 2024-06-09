const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const {User} = require('../models/user');
const {BlackListToken}=require('../models/blacklisted')

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
              
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const blacklisted = await BlackListToken.findOne({ token });
          if (blacklisted) {
           return res.status(401).json({ message: 'Token has been blacklisted' });
            }
            req.user = await User.findById(decoded.id).select('-password');
          
            next();
        } catch (err) {
            console.error(err); // Log the error for debugging
            res.status(401).json({ success: false, error: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ success: false, error: 'Not authorized, no token' });
    }
});

module.exports = { protect };
