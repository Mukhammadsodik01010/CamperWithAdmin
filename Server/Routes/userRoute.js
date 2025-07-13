const express = require('express')
const { AddUser, SignIn, GetAllUsers, DeleteUser } = require('../Controllers/user.Controller')

const userRouter = express.Router()


userRouter.post("/new-user", AddUser)
userRouter.post("/compare-user", SignIn)
userRouter.get("/camper-user-all", GetAllUsers)
userRouter.delete("/delete-user/:id", DeleteUser)


module.exports = userRouter;