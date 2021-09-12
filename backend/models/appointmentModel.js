import mongoose from 'mongoose'

const appointmentSchema = mongoose.Schema(
  {
    resourceId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Doctor',    
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',    
    },
    startDate: {
      type: String,
      required: true,
    },
    timeRange: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: false,
      default: "1 hour"
    },
    cancelled: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  {
    timestamps: true,
  }
)

const Appointment = mongoose.model('Appointment', appointmentSchema)
export default Appointment