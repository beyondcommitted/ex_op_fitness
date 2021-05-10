const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const exercisesRouter = require ('./routes/exercises')
const randomExercisesRouter = require ('./routes/randomExercises')
const usersRouter = require ('./routes/users')

require('dotenv').config();
 const app = express();
 const port = process.env.PORT || 3001;

 app.use (cors());
 app.use(express.json());

 const uri = process.env.ATLAS_URI;
 mongoose.connect(uri || "mongodb://localhost/login", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

 const connection = mongoose.connection;
 connection.once('open', () => {
     console.log("MongoDB EX-OP-Fitness established successfully");
 });

app.use('/exercises', exercisesRouter);
app.use('/randomexercises', randomExercisesRouter);
app.use('/users', usersRouter);

 app.listen(port, () => {
     console.log(`Server is listening on port: ${port}`);
 });