import express from "express";
import { createReel } from "../controllers/reel.controllers.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import uploadReel from "../middlewares/uploadReel.middleware.js";

const reelRoutes = express.Router();

reelRoutes.post(
  "/createReel",
  isAuthenticated ,
  uploadReel.single("video"),
  createReel,
);


export default reelRoutes
