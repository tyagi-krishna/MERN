const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// get all workouts
const getWorkouts = async (req, res) => {
	// get all workouts from the workout therefore find open
	const workouts = await Workout.find({}).sort({ createdAt: -1 });
	res.status(200).json(workouts);
};

// get a single workout
const getWorkout = async (req, res) => {
	const { id } = req.params;
	// check if the given id is valid
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Invalid Id" });
	}
	const workout = await Workout.findById(id);
	if (!workout) {
		return res.status(404).json({ error: "No workout find" });
	}
	res.status(200).json(workout);
};

// create new workout
const createWorkout = async (req, res) => {
	const { title, load, reps } = req.body;
	// add doc to db and return error msg in case of error
	try {
		const workout = await Workout.create({ title, load, reps });
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.msg });
	}
};

// delete a workout
const deleteWorkout = async (req, res) => {
	const { id } = req.body;
	//check id
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Invalid id" });
	}
	const workout = await Workout.findOneAndDelete({ _id: id });
	if (!workout) {
		return res.status(400).json({ error: "No such workout" });
	}
	res.status(200).json(workout);
};

// update a workout
const updateWorkout = async (req, res) => {
	const { id } = req.body;
	//check id
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Invalid id" });
	}
	// finds the workout with id = id and the updates with the body of request that contains the title, reps and load
	const workout = await Workout.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);
	if (!workout) {
		return res.status(400).json({ error: "No such workout" });
	}
	res.status(200).json(workout);
};

module.exports = {
	getWorkouts,
	getWorkout,
	createWorkout,
	deleteWorkout,
	updateWorkout,
};
