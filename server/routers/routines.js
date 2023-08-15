import { Router } from "express";
import Routine from "../models/Routine.js";

const router = Router();

// CREATE: Create new routine route
router.post("/", async (request, response) => {
  try {
    const newRoutine = new Routine(request.body);

    const data = await newRoutine.save();

    response.json(data);
  } catch (error) {
    // Error output
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// READ: Get all routines route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Routine.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// READ:id: Get a single routine by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Routine.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// DELETE: Delete a routine by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Routine.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// UPDATE: Update a single routine by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Routine.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          task: body.task,
          steps: body.steps,
          timeOfDay: body.timeOfDay,
          isDone: body.isDone,
          pointValue: body.pointValue
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
