import express from 'express'
import { isAuthenticated } from '../middlewares/authMiddleware.js'

import upload from '../middlewares/upload.middleware.js'
import { createStory,getStories,deleteStory } from '../controllers/story.controllers.js'




const storyRoutes = express.Router()


storyRoutes.post('/createStory' , isAuthenticated ,upload.single('image') , createStory  )

storyRoutes.get('/getStories' , isAuthenticated , getStories)
storyRoutes.delete("/deleteStory/:storyId",isAuthenticated,deleteStory);



export default storyRoutes