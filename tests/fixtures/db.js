const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')

// object test
const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Abdul',
    email: 'abdul@mail.com',
    password: '1234579',
    tokens: [{
        token: jwt.sign({ _id: userOneId}, process.env.JWT_SECRET)
    }]
}

const setUpDatabase = async () => {
    await User.deleteMany()
    await new User(userOne).save()
}

module.exports ={
    userOneId,
    userOne,
    setUpDatabase
}