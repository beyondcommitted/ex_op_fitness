const router = require('express').Router();
const User = require('..//db/models/userModel');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(error => res.status(400).json('Error: ' + error.message));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added successfully!'))
    .catch(error => res.status(400).json('Error: ' + error.message));
});

module.exports = router;