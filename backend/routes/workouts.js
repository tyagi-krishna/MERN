// import express and routers
const express = require("express");
const router = express.Router();
const {
	createWorkout,
	getWorkout,
	getWorkouts,
	deleteWorkout,
	updateWorkout,
} = require("../controllers/workoutController");
const Workout = require("../models/workoutModel");

// this is to get all workouts, the res.json is the response json file
router.get("/", getWorkouts);

//get a single workout, the id is a route parameter which can be changed
router.get("/:id", getWorkout);

// post a new workout
router.post("/", createWorkout);

// delete a  workout
router.delete("/:id", deleteWorkout);

// Update a new workout
router.patch("/:id", updateWorkout);

module.exports = router;
