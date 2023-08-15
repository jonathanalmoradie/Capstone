import mongoose from "mongoose";

const routineSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  steps: [String],
  isDone: {
    type: Boolean,
    required: true,
    default: false
  },
  pointValue: {
    type: Number,
    required: true
  }
});

const Routine = mongoose.model("Routine", routineSchema);

export default Routine;
