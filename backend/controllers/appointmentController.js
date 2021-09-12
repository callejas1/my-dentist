import asyncHandler from "express-async-handler";
import Appointment from "../models/appointmentModel.js";
import User from "../models/userModel.js";
import Dentist from "../models/dentistModel.js";
import sgMail from "@sendgrid/mail";

// @desc    Create new appointment
// @route   POST /api/appointment
// @access  Private
const createAppointment = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body.userId)
  const { description, resourceId, userId, startDate, timeRange, duration } = req.body;

  if (description && description.length === 0) {
    res.status(400);
    throw new Error("No appointment details");
  } else {
    const appointment = new Appointment({
      description,
      resourceId,
      userId,
      startDate,
      timeRange,
      duration,
    });
    // add appointment to user appointments array
    await user.appointments.push(appointment._id)

    const createdAppointment = await appointment.save();
    user.save()
    res.status(201).json(createdAppointment)
  }
});

// @desc Get appointment details
// @route GET /api/appointment/:id
// @access Private
const getAppointmentDetails = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);
  const user = await User.findById(appointment.userId);
  const dentist = await Dentist.findById(appointment.resourceId);

  if (appointment) {
    res.json({
      _id: appointment._id,
      description: appointment.description,
      dentist: `${dentist.resourceTitle} ${dentist.name}`,
      userName: user.name,
      startDate: `At ${appointment.startDate.time} on ${appointment.startDate.day} (this month)`,
      duration: appointment.duration,
    });
  } else {
    res.status(404);
    throw new Error("Appointment not found");
  }
});

// @desc Send subscription confirmation email
// @route POST /api/appointment/:id
// @access Private
const appointmentConfirmationEmail = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);
  const user = await User.findById(appointment.userId);
  const dentist = await Dentist.findById(appointment.resourceId);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  if (appointment) {
    const msg = {
      from: process.env.SENDER_EMAIL,
      personalizations: [
        {
          to: [
            {
              email: user.email,
            },
          ],
          dynamic_template_data: {
            appointment: appointment.description,
            patient: user.name,
            date: appointment.startDate,
            time: appointment.timeRange,
            duration: appointment.duration,
            dentist: `${dentist.resourceTitle} ${dentist.name}`,
          },
        },
      ],
      templateId: process.env.SUBSCRIPTION_CONFIRMATION_TEMPLATE,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
    res.json({ message: "Done", appointment });
  } else {
    res.status(404);
    throw new Error("User & appointment not found");
  }
});

const getAllAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({ userId: req.params.id });
  res.json(appointments);
});

// @desc    Update appointment to cancelled
// @route   PUT /api/appointment/:id
// @access  Private
const cancelAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(req.params.id) // change cancelled status to true
  const user = await User.findById(appointment.userId)

  if (appointment) {
    appointment.cancelled = true;
    await appointment.save()
    const updatedUserInfo = await user.save(); // update user appointments array to show appointment has been cancelled
    res.json({ message: 'Appointment cancelled', updatedUserInfo});
  } else {
    res.status(404)
    throw new Error('Appointment not found');
  }
})


export {
  createAppointment,
  getAppointmentDetails,
  appointmentConfirmationEmail,
  getAllAppointments,
  cancelAppointment
};
