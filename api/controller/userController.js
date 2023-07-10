const User = require('../models/userModel')
const mongoose = require('mongoose')

const UserController = {
  Create: async (req, res) => {
    const { name } = req.body

    try {
      const newUser = await User.create({ name })
      res.status(200).json(newUser._id)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  UpdateChoices: async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: 'Id param is invalid'})
    }

    try {
      const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
      })

      if (user === null) {
        return res.status(400).json({ message: "This user does not exist" })
      }
      
      res.status(200).json(user)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = UserController
