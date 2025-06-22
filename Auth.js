// Middleware auth.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) return res.status(401).send('Akses ditolak');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (verified.role !== 'moderator') throw new Error();
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Token tidak valid');
  }
}
