import express from 'express'
import { getMe,loginUser, registerUser,logout } from '../controllers/user.controllers.js'
import { isAuthenticated } from '../middlewares/authMiddleware.js'

const userRoutes = express.Router()


userRoutes.post('/register' , registerUser)
userRoutes.post('/login' , loginUser)
userRoutes.get('/me' , isAuthenticated,getMe)
userRoutes.post('/logout',logout);

// implement log out
//clear the token and redirect to login




export default userRoutes