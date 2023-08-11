import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  allDay: {
    type: Boolean,
    default: false
  }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
