module.exports = {
  async up(db, client) {
    await db.createCollection("tasks", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: [
            "title",
            "description",
            "dueDate",
            "priority",
            "assignedMember",
          ],
          properties: {
            title: {
              bsonType: "string",
              description: "Title of the task",
            },
            description: {
              bsonType: "string",
              description: "Description of the task",
            },
            dueDate: {
              bsonType: "date",
              description: "Due date of the task",
            },
            priority: {
              bsonType: "string",
              enum: ["low", "medium", "high"],
              description: "Priority of the task",
            },
            assignedMember: {
              bsonType: "string",
              description: "Assigned member",
            },
            status: {
              bsonType: "string",
              enum: ["pending", "in-progress", "completed"],
              default: "pending",
              description: "Status of the task",
            },
            createdAt: {
              bsonType: "date",
              default: new Date(),
              description: "Creation date of the task",
            },
          },
        },
      },
    });
  },

  async down(db, client) {
    await db.collection("tasks").drop();
  },
};
