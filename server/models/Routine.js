import mongoose from "mongoose";

const routineSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  isDone: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  pointValue: {
    type: Number,
    required: true
  }
});

const Routine = mongoose.model("Routine", routineSchema);

export default Routine;
