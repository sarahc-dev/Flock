const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const Event = require('../../models/eventModel')

describe("/event", () => {
  beforeEach( async () => {
    await Event.deleteMany({});
  });

  describe("POST, returns the correct status code when creating an event", () => {
    test("the response code is 200", async () => {
      let response = await request(app)
        .post("/event")
        .send({
          event: "event",
          names: ["andy", "pandy"],
          activities: ["hiking", "hiking again", "hiking once more"]
        })
      expect(response.statusCode).toBe(200)
    })

    test("the correct event is created", async () => {
      await request(app)
        .post("/event")
        .send({
          event: "event",
          names: ["andy", "pandy"],
          activities: ["hiking", "hiking again", "hiking once more"]
        })
      let event = await Event.find()
      let newEvent = event[event.length - 1]
      expect(newEvent.event).toEqual("event")
    })
  })
  
  test("GET, returns a 400 and correct message when id does not exist in DB", async () => {
    let response = await request(app)
      .get("/event/64a809cd9aa9a2bddffcd654")
    expect(response.status).toEqual(400)
    expect(response.body).toEqual({ message: "Id does not exist" })
  })

  test("GET, returns a 404 when params are invalid", async () => {
    let response = await request(app)
      .get("/event/ham")
    expect(response.status).toEqual(404)
    expect(response.body).toEqual({ error: 'Id param is invalid' })
  })
})