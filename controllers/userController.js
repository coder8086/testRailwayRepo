// ---------- controllers/userController.js ----------
const { User } = require('../models');


// Create new user
exports.createUser = async (req, res, next) => {
    try {
        const { name, email, age } = req.body;
        const user = await User.create({ name, email, age });
        return res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};


// Get all users
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();
        return res.json(users);
    } catch (err) {
        next(err);
    }
};


// Get user by id
exports.getUserById = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        return res.json(user);
    } catch (err) {
        next(err);
    }
};


// Update user
exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        const { name, email, age } = req.body;
        await user.update({ name, email, age });
        return res.json(user);
    } catch (err) {
        next(err);
    }
};


// Delete user
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        await user.destroy();
    }catch(err){
 next(err);
    }



}