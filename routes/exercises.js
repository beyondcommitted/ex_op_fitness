const router = require('express').Router();
const Exercise = require('../db/models/exerciseModel');

router.route('/').get((req, res) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(error => res.status(400).json('Error: ' + error.message));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({username, description, duration, date});

    newExercise.save()
    .then(() => res.json('Exercise added successfully!'))
    .catch(error => res.status(400).json('Error: ' + error.message));
});

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(error => res.status(400).json('Error: ' + error.message));
});

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted successfully!'))
    .catch(error => res.status(400).json('Error: ' + error.message));
});

router.route('/update/:id').put((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = req.body.duration;
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(() => res.json('Exercise updated successfully!'))
        .catch(error => res.status(400).json('Error: ' + error.message))
    })
    .catch(error => res.status(400).json('Error: ' + error.message))
})

module.exports = router;