// migrate.js

import migrate from "migrate-mongo";
import config from "./migrate-mongo-config.js";

// Initialize migrate-mongo
migrate.setConfig(config);

// Run migrations
(async () => {
  try {
    await migrate.create("add_task_collection");
    console.log("Migration created successfully.");
  } catch (error) {
    console.error("Error creating migration:", error);
  }
})();
