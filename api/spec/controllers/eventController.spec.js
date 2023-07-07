const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const Event = require('../../models/eventModel')

describe("/event", () => {
  beforeEach( async () => {
    await Event.deleteMany({});
  });

  describe("POST, adds an event", () => {
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

  //   test("a user is created", async () => {
  //     await request(app)
  //       .post("/users")
  //       .send({
  //         email: "scarlett1@email.com",
  //         password: "1234",
  //         firstName: "Scarlett",
  //         lastName: "Scarlettson",
  //         userName: "scat",
  //       })
  //     let users = await User.find()
  //     let newUser = users[users.length - 1]
  //     expect(newUser.email).toEqual("scarlett1@email.com")
  //   })
  // })

  // describe("POST, when password is missing", () => {
  //   test("response code is 400", async () => {
  //     let response = await request(app)
  //       .post("/users")
  //       .send({
  //         email: "scarlett2@email.com",
  //         firstName: "Scarlett",
  //         lastName: "Scarlettson",
  //         userName: "scat",
  //       })
  //     expect(response.statusCode).toBe(400)
  //   });

  //   test("does not create a user", async () => {
  //     await request(app)
  //       .post("/users")
  //       .send({
  //         email: "scarlett3@email.com",
  //         firstName: "Scarlett",
  //         lastName: "Scarlettson",
  //         userName: "scat",
  //       })
  //       let users = await User.find()
  //       expect(users.length).toEqual(0)
  //   });
  // })
  
  // describe("POST, when email is missing", () => {
  //   test("response code is 400", async () => {
  //     let response = await request(app)
  //       .post("/users")
  //       .send({
  //         firstName: "Scarlett",
  //         password: "1234",
  //         lastName: "Scarlettson",
  //         userName: "scat",
  //       })
  //       expect(response.statusCode).toBe(400)
  //   });

  //   test("does not create a user", async () => {
  //     await request(app)
  //       .post("/users")
  //       .send({
  //         firstName: "Scarlett",
  //         password: "1234",
  //         lastName: "Scarlettson",
  //         userName: "scat",
  //       })
  //       let users = await User.find()
  //     expect(users.length).toEqual(0)
  //   });
  // })
  
  // describe("POST, when firstName is missing", () => {
  //   test("response code is 400", async () => {
  //     let response = await request(app)
  //       .post("/users")
  //       .send({
  //         email: "scarlett4@email.com",
  //         password: "1234",
  //         lastName: "Scarlettson",
  //         userName: "scat",
  //       })
  //       expect(response.statusCode).toBe(400)
  //   });

  //   test("does not create a user", async () => {
  //     await request(app)
  //       .post("/users")
  //       .send({
  //         email: "scarlett5@email.com",
  //         password: "1234",
  //         lastName: "Scarlettson",
  //         userName: "scat",
  //       })
  //       let users = await User.find()
  //     expect(users.length).toEqual(0)
  //   });
  // })
  
  // describe("POST, when lastName is missing", () => {
  //   test("response code is 400", async () => {
  //     let response = await request(app)
  //       .post("/users")
  //       .send({
  //         email: "scarlett6@email.com",
  //         password: "1234",
  //         firstName: "Scarlett",
  //         userName: "scat",
  //       })
  //       expect(response.statusCode).toBe(400)
  //   });

  //   test("does not create a user", async () => {
  //     await request(app)
  //       .post("/users")
  //       .send({
  //         email: "scarlett@email.com",
  //         password: "1234",
  //         firstName: "Scarlett",
  //         userName: "scat",
  //       })
  //       let users = await User.find()
  //     expect(users.length).toEqual(0)
  //   });
  // })
  
  // describe("POST, when userName is missing", () => {
  //   test("response code is 400", async () => {
  //     let response = await request(app)
  //       .post("/users")
  //       .send({
  //         email: "scarlett6@email.com",
  //         password: "1234",
  //         firstName: "Scarlett",
  //         lastName: "Scarlettson",
  //       })
  //       expect(response.statusCode).toBe(400)
  //   });

  //   test("does not create a user", async () => {
  //     await request(app)
  //       .post("/users")
  //       .send({
  //         email: "scarlett@email.com",
  //         password: "1234",
  //         firstName: "Scarlett",
  //         lastName: "Scarlettson",
  //       })
  //       let users = await User.find()
  //     expect(users.length).toEqual(0)
  //   });
  // })
  // describe("POST, when we already have the same email in the database", () => {

  //   test("only creates 1", async () => {
  //     await request(app)
  //       .post("/users")
  //       .send({
  //         email: "scarlett@email.com",
  //         password: "1234",
  //         firstName: "Scarlett",
  //         lastName: "Scarlettson",
  //         userName: "scat",
  //       });
  //     await request(app)
  //       .post("/users")
  //       .send({
  //         email: "scarlett@email.com",
  //         password: "1234",
  //         firstName: "Scarlett",
  //         lastName: "Scarlettson",
  //         userName: "scat",
  //       });

  //       let users = await User.find()
  //     expect(users.length).toEqual(1)
  //   });
  // })
  // describe("POST, when we already have the same username in the database", () => {

  //   test("only creates 1", async () => {
  //     await request(app)
  //       .post("/users")
  //       .send({
  //         email: "scarlett1@email.com",
  //         password: "1234",
  //         firstName: "Scarlett",
  //         lastName: "Scarlettson",
  //         userName: "scat",
  //       });
  //     await request(app)
  //       .post("/users")
  //       .send({
  //         email: "scarlett@email.com",
  //         password: "1234",
  //         firstName: "Scarlett",
  //         lastName: "Scarlettson",
  //         userName: "scat",
  //       });

  //       let users = await User.find()
  //     expect(users.length).toEqual(1)
  //   });
  })
})