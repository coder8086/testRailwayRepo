const dotenv = require("dotenv");
dotenv.config({ quiet: true }); // load local .env (quiet mode)

// Import your Express app
const app = require("./app");

// Import Sequelize config (db.js)
const sequelize = require("./db");

const PORT = process.env.PORT || 3000;

// Test DB connection before starting server
sequelize.authenticate()
  .then(() => {
    console.log("Database connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1); // stop app if DB is unreachable
  });
