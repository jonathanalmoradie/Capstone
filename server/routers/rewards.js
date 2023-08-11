import { Router } from "express";
import Reward from "../models/Reward.js";

const router = Router();

// CREATE: Create new reward route
router.post("/", async (request, response) => {
  try {
    const newReward = new Reward(request.body);

    const data = await newReward.save();

    response.json(data);
  } catch (error) {
    // Error output
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// READ: Get all rewards route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Reward.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// READ:id: Get a single reward by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Reward.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// DELETE: Delete a reward by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Reward.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// UPDATE: Update a single reward by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Reward.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          reward: body.reward,
          isClaimed: body.isClaimed,
          pointCost: body.pointCost
        }
      },
      {
        new: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
