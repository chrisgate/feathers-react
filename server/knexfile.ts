require("ts-node/register");
import app from "./src/app";

module.exports = {
  ...app.get("postgres"),
  migrations: {
    directory: "./database/migrations",
  },
};
