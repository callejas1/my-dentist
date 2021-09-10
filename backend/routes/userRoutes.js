import express from "express";
import {
  registerUser,
  authUser,
  getUserInfo,
  updateUserInfo,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/:id").get(protect, getUserInfo).put(protect, updateUserInfo);
router.post("/login", authUser);

export default router;
