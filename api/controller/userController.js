const User = require('../models/userModel')

const UserController = {
  Create: async (req, res) => {
    const { name } = req.body

    try {
      const newUser = await User.create({ name })
      res.status(200).json(newUser._id)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = UserController
