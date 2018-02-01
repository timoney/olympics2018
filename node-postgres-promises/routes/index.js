var express = require('express');
var router = express.Router();
var db = require('../sql/queries');

router.post('/login', db.loginUser);
router.post('/register', db.createUser);

router.get('/olympics18/users', db.getAllUsers);
router.get('/olympics18/users/:id', db.getSingleUser);
router.get('/olympics18/users/:id/eventSelections', db.getUserSelections);
router.post('/olympics18/users/:id/eventSelections', db.updateUserSelections);
router.put('/olympics18/users/:id', db.updateUser);
router.delete('/olympics18/users/:id', db.removeUser);

router.get('/olympics18/events', db.getAllEvents);
router.get('/olympics18/events/:id', db.getSingleEvent);
router.post('/olympics18/events', db.createEvent);
router.put('/olympics18/events/:id', db.updateEvent);
router.delete('/olympics18/events/:id', db.removeEvent);

router.get('/olympics18/eventParticipants', db.getAllEventParticipants);
router.get('/olympics18/eventParticipants/:id', db.getEventParticipants);
router.post('/olympics18/eventParticipants', db.createEventParticipant);
router.put('/olympics18/eventParticipants/:id', db.updateEventParticipant);
router.delete('/olympics18/eventParticipants/:id', db.removeEventParticipant);

router.get('/olympics18/users/:id/selections', db.getAllUserSelections);
router.get('/olympics18/users/:id/selections/:event_id', db.getSingleUserSelection);
router.post('/olympics18/users/:id/selections', db.createUserSelection);
router.put('/olympics18/users/:id/selections/:event_id', db.updateUserSelection);
router.delete('/olympics18/users/:id/selections/:event_id', db.removeUserSelection);

// application -------------------------------------------------------------
router.get('/', function (req, res) {
    res.render('index', {title: 'node-postgres-promises'}); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
