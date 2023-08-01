const mongoose = require("mongoose");
require("../mongodb_helper");

const User = require("../../models/userModel");

describe("User model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("has a name", () => {
    const user = new User({
      name: "testName",
      choices: ["choice1", "choice2"]
    });
    expect(user.name).toEqual("testName");
  });
  
  it("has an array of choices", () => {
    const user = new User({
      name: "testName",
      choices: ["choice1", "choice2"]
    });
    expect(user.choices.length).toEqual(2);
    expect(user.choices[0]).toEqual("choice1");
    expect(user.choices[1]).toEqual("choice2");
  });
});
