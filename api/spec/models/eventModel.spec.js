const mongoose = require("mongoose");

require("../mongodb_helper");
const Event = require("../../models/eventModel");

describe("Event model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.events.drop(() => {
      done();
    });
  });

  it("has names", () => {
    const event = new Event({
      event: "event",
      names: ["andy", "pandy"],
      activities: ["hiking", "hiking again", "hiking once more"]
    });
    expect(event.names[0]).toEqual("andy");
  });

  it("has an event name", () => {
    const event = new Event({
      event: "event",
      names: ["andy", "pandy"],
      activities: ["hiking", "hiking again", "hiking once more"]
    });
    expect(event.event).toEqual("event");
  });

  it("has an array of activities", () => {
    const event = new Event({
      event: "event",
      names: ["andy", "pandy"],
      activities: ["hiking", "hiking again", "hiking once more"]
    });
    expect(event.activities[1]).toEqual("hiking again");
  });
});
