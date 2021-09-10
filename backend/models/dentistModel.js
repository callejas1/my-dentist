import mongoose from 'mongoose'

const dentistSchema = mongoose.Schema(
  {
    resourceTitle: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Dentist = mongoose.model('Dentist', dentistSchema)
export default Dentist