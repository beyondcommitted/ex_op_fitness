const router = require('express').Router();
const RandomExercise = require('../db/models/randomExerciseModel');

router.route('/').get((req, res) => {
    RandomExercise.find()
    .then(randomExercises => res.json(randomExercises))
    .catch(error => res.status(400).json('Error: ' + error.message));
});

router.route('/add').post((req, res) => {
    const description = req.body.description;
    const newRandomExercise = new RandomExercise({description});

    newRandomExercise.save()
    .then(() => res.json('Exercise added successfully!'))
    .catch(error => res.status(400).json('Error: ' + error.message));
});

module.exports = router;