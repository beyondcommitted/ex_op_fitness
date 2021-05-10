const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const randomExerciseSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    }
  });

const RandomExercise = mongoose.model("RandomExercise", randomExerciseSchema);

module.exports = RandomExercise;
