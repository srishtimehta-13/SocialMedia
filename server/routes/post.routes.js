import express from "express";
import { createPost } from "../controllers/post.controllers.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/upload.middleware.js";

const postRoutes = express.Router();

postRoutes.post(
  "/createPost",
  isAuthenticated ,
  upload.single("image"),
  createPost,
);


export default postRoutes