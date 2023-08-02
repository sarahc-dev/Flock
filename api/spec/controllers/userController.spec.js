const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const User = require('../../models/userModel')

describe("/user", () => {
  beforeEach( async () => {
    await User.deleteMany({});
  });

  test("POST, returns the 200 OK when creating a user", async () => {
    let response = await request(app)
      .post("/user")
      .send({
        name: "testUser"
      })
    expect(response.statusCode).toBe(200)
  })

  test("POST, adds the user to the database", async () => {
    await request(app)
      .post("/user")
      .send({
        name: "testUser"
      })
    let user = await User.find()
    let newUser = user[user.length - 1]
    expect(newUser.name).toEqual("testUser")
  })

  test("PATCH, adds choices to the user", async () => {
    const newUser = await User.create({ name: 'Test User' });

    const response = await request(app)
      .patch(`/user/${newUser._id}`)
      .send({choices: ['choice1', 'choice2']})

    expect(response.status).toBe(200)
    
    const updatedUser = await User.findById(newUser._id)
    expect(updatedUser.choices.length).toBe(2)
    expect(updatedUser.choices[0]).toBe('choice1')
    expect(updatedUser.choices[1]).toBe('choice2')
  })
  
  test("PATCH, returns 404 'Id param is invalid' if the user id is not valid", async () => {    
    const response = await request(app)
    .patch(`/user/invalid_id`)
    .send({choices: ['choice1', 'choice2']})
    
    expect(response.status).toBe(404)
    expect(response.body).toEqual({ error: 'Id param is invalid' })
  })

    
  test("PATCH, returns 400 'This user does not exist' if the user id is not in database", async () => {    
    const response = await request(app)
    .patch(`/user/64ca6d161a23bd2005365ff6`)
    .send({choices: ['choice1', 'choice2']})
    
    expect(response.status).toBe(400)
    expect(response.body).toEqual({ message: 'This user does not exist' })
  })
})