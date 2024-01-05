// importing mongoose and scheema proerty from mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		reps: {
			type: Number,
			required: true,
		},
		load: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

// export the model with name workout
module.exports = mongoose.model("Workout", workoutSchema);
