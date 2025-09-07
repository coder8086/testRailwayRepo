// ---------- middleware/errorHandler.js ----------
module.exports = (err, req, res, next) => {
console.error(err);
// Sequelize validation error
if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
return res.status(400).json({ errors: err.errors.map(e => e.message) });
}


res.status(500).json({ message: 'Internal Server Error' });
};