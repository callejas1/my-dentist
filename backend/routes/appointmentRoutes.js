import express from "express";
import {
  createAppointment,
  appointmentConfirmationEmail,
  getAppointmentDetails,
  getAllAppointments,
  cancelAppointment,
} from "../controllers/appointmentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createAppointment);
router
  .route("/:id")
  .post(protect, appointmentConfirmationEmail)
  .get(protect, getAppointmentDetails)
router.route("/user/:id").get(getAllAppointments);
router.route("/cancel/:id").put(protect, cancelAppointment);

export default router;
