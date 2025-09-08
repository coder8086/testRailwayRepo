const express = require("express");
const User = require("./models/user");

const app = express();
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Hello from Railway + Sequelize!");
});

// ✅ Create User
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Get all Users
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// ✅ Get User by ID
app.get("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  user ? res.json(user) : res.status(404).json({ error: "User not found" });
});

// ✅ Update User
app.put("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  await user.update(req.body);
  res.json(user);
});

// ✅ Delete User
app.delete("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  await user.destroy();
  res.json({ message: "User deleted" });
});

module.exports = app;
