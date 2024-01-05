// import express
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// create a express app
const app = express();

//middleware: runs whenever a request is sent if next() is not used the next function will not be executed
app.use(express.json); // it allows us to pass data request with the request to post data or update data
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// routes to request to the express api
// app.get("/", (req, res) => {
// 	res.json({ msg: "Welcome to the app" });
// });
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		//listen for request at port 4000
		app.listen(process.env.PORT, () => {
			console.log("Listening on port 4000");
		});
	}) //waits for the promise to finish then executes the commands
	.catch((error) => {
		console.log(error);
	});
