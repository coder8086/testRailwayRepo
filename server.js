const dotenv = require("dotenv");
dotenv.config({ quiet: true });

const app = require("./app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 3000;

sequelize
  .sync() // creates tables if not exist
  .then(() => {
    console.log("✅ Database synced");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  });
