const mongoose = require("mongoose");
require("../mongodb_helper");

const Event = require("../../models/eventModel");

jest.mock("../../models/userModel", () => ({
  findById: jest.fn().mockResolvedValue({ _id: 1, name: "testName" }),
}));

describe("Event model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.events.drop(() => {
      done();
    });
  });

  it("defines the names field as an array of User ids", () => {
    const names = Event.schema.obj.names;
    expect(names[0]).toEqual(expect.objectContaining({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }));
  });

  it("has an event name", () => {
    const event = new Event({
      eventName: "event",
      names: ["andy", "pandy"],
      activities: ["hiking", "hiking again", "hiking once more"]
    });
    expect(event.eventName).toEqual("event");
  });

  it("has an array of activities", () => {
    const event = new Event({
      eventName: "event",
      names: ["andy", "pandy"],
      activities: ["hiking", "hiking again", "hiking once more"]
    });
    expect(event.activities[1]).toEqual("hiking again");
  });
});
