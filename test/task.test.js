import { app } from "../src/app.js"; // Use named import

import chai from "chai";
import chaiHttp from "chai-http";

const { expect } = chai;
chai.use(chaiHttp);

describe("Task Management API", () => {
  it("should create a new task", (done) => {
    chai
      .request(app)
      .post("/tasks")
      .send({
        title: "Sample Task",
        description: "Task description",
        dueDate: "2024-12-31",
        priority: "high",
        assignedMember: "John Doe",
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        done();
      });
  });

  // Additional tests can be added here
});
