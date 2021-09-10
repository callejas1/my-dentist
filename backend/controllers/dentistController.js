import asyncHandler from 'express-async-handler'
import Dentist from '../models/dentistModel.js'

// @desc    Get all dentists
// @route   GET /api/dentists
// @access  Public
const getDentistInfo = asyncHandler(async (req, res) => {
  const dentists = await Dentist.find({})
  res.json(dentists)
})

export { getDentistInfo };