// migrate-mongo-config.js

export default {
  mongodb: {
    url: "mongodb://127.0.0.1:27017",
    databaseName: "task_management",
    options: {
      useNewUrlParser: true,
    },
  },

  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
  useFileHash: false,
  moduleSystem: "commonjs",
};
