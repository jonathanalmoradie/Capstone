import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema({
  reward: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  isClaimed: {
    type: Boolean,
    required: true,
    default: false
  },
  pointCost: {
    type: Number,
    required: true
  }
});

const Reward = mongoose.model("Reward", rewardSchema);

export default Reward;
