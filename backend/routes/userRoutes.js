const express = require('express')
const { loginUser, registerUser, currentUser, viewUsers } = require('../controllers/userController')
const validateToken = require('../middleware/validateTokenHandler')
const userRoutes = express.Router()

userRoutes.post("/login", loginUser)

userRoutes.post("/register", registerUser)

userRoutes.get("/current", validateToken, currentUser)

userRoutes.get('/viewusers', viewUsers)

module.exports = userRoutes