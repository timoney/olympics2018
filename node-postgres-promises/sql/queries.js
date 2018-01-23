var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise,

};

var pgp = require('pg-promise')(options);
var connectionString = '';
var config = {
};
var db = pgp(config);

function getAllUsers(req, res, next) {
  console.log("get all user info");
  db.any('select * from user_profile')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL users'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleUser(req, res, next) {
  console.log("get info for user" + req.params.id);
  db.one('select * from user_profile where user_id = $1', req.params.id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createUser(req, res, next) {
  console.log('data' + "frst_nm: " + req.body.frst_nm + "lst_nm: " + req.body.lst_nm + "email: " + req.body.eml_tx);
  db.none('insert into user_profile ' + 
      '(FRST_NM, LST_NM, EML_TX, GROUP_NM, PASSWORD) ' +
      'values($1, $2, $3, $4, $5)',
    [req.body.frst_nm, req.body.lst_nm, req.body.eml_tx, req.body.group_nm, req.body.password])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateUser(req, res, next) {
  var userId = parseInt(req.params.id);
  console.log('update user id:  ' + userId);
  db.none('update user_profile set password=$1 where user_id=$2',
    [req.body.password, userId])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeUser(req, res, next) {
  var userId = parseInt(req.params.id);
  console.log("remove user: " +userId);
  db.result('delete from user_profile where user_id = $1', userId)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} user`
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllEvents(req, res, next) {
  db.any('select * from event')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL events'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleEvent(req, res, next) {
  console.log("get event info for event_id: " + req.params.id);
  db.one('select * from event where event_id = $1', req.params.id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE event'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createEvent(req, res, next) {
  console.log('create event_nm: ' + req.body.event_nm + 'event_dt: ' + req.body.event_dt + 'stat_cd: ' + req.body.stat_cd)
  db.none('insert into event (event_nm, event_dt, stat_cd)' + 
      'values($1, $2, $3)', [req.body.event_nm, req.body.event_dt, req.body.stat_cd])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one event'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateEvent(req, res, next) {
  console.log("updating event "+ req.params.id + "event_nm" + req.body.event_nm + "event_dt" + req.body.event_dt + "stat_cd" + req.body.stat_cd);
  db.none('update event set event_nm=$1, event_dt=$2, stat_cd=$3 where event_id=$4',
    [req.body.event_nm, req.body.event_dt, req.body.stat_cd, req.params.id])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated event'
        });
    })
    .catch(function (err) {
      console.log(err);
      return next(err);
    });
} 

function removeEvent(req, res, next) {
  console.log("delete eventId: " + req.params.id);
  db.result('delete from event where event_id = $1', req.params.id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} event`
        });
    })
    .catch(function (err) {
      console.log(err);
      return next(err);
    });
}

function getAllEventParticipants(req, res, next) {
  db.any('select * from event_participant')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL event participants'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleEventParticipant(req, res, next) {
  console.log("get event info for event_particant_id: " + req.params.id);
  db.one('select * from event_participant where event_participant_id = $1', req.params.id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE event participant'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createEventParticipant(req, res, next) {
  console.log('create event_id: ' + req.body.event_id + 'participant_nm: ' + req.body.participant_nm + 'points: ' + 
        req.body.points + "odds: " + req.body.odds + "finish: " + req.body.finish + "country: " + req.body.country);
  db.none('insert into event_participant (event_id, participant_nm, country, points, odds, finish)' + 
      'values($1, $2, $3, $4, $5, $6)', 
      [req.body.event_id, req.body.participant_nm, req.body.country, req.body.points, req.body.odds, req.body.finish])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one event participant'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateEventParticipant(req, res, next) {
  console.log("updating event particpant " + req.body.event_id + 'participant_nm: ' + req.body.participant_nm + 'points: ' + 
        req.body.points + "odds: " + req.body.odds + "finish: " + req.body.finish);
  db.none('update event_participant set event_id=$1, participant_nm=$2, country=$3, points=$4, odds=$5, finish=$6 where event_participant_id=$7',
    [req.body.event_id, req.body.participant_nm, req.body.country, req.body.points, req.body.odds, req.body.finish, req.params.id])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated event participant'
        });
    })
    .catch(function (err) {
      console.log(err);
      return next(err);
    });
} 

function removeEventParticipant(req, res, next) {
  console.log("delete event_participant_Id: " + req.params.id);
  db.result('delete from event_participant where event_participant_id = $1', req.params.id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} event`
        });
    })
    .catch(function (err) {
      console.log(err);
      return next(err);
    });
}

function getAllUserSelections(req, res, next) {
  console.log("get info for user_selection " + req.params.id);
  db.any('select * from user_selection where user_id=$1', [req.params.id])
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all user selections'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleUserSelection(req, res, next) {
  console.log("get info for user selection" + req.params.id);
  db.one('select * from user_selection where user_id=$1 and event_id=$2', [req.params.id, req.params.event_id])
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE user selection'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createUserSelection(req, res, next) {
  console.log('create user selection user_id' + req.params.id + "event_id: " + req.body.event_id + 'event_participant: ' + req.body.event_participant_id);
  db.none('insert into user_selection (user_id, event_id, event_participant_id)' + 
      'values($1, $2, $3)', [req.params.id, req.body.event_id, req.body.event_participant_id])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one user selection'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateUserSelection(req, res, next) {
  console.log("updating user selection " +req.params.id + "event id: " + req.params.event_id + 'event_participant_id: ' + req.body.event_participant_id);
  db.none('update user_selection set event_participant_id=$1 where user_id=$2 and event_id=$3',
    [req.body.event_participant_id, req.params.id, req.params.event_id])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated user selection'
        });
    })
    .catch(function (err) {
      console.log(err);
      return next(err);
    });
} 

function removeUserSelection(req, res, next) {
  console.log("delete user_selection user_id: " + req.params.id + "event_id: " + req.params.event_id);
  db.result('delete from user_selection where user_id = $1 and event_id = $2', 
    [req.params.id, req.params.event_id])
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} event`
        });
    })
    .catch(function (err) {
      console.log(err);
      return next(err);
    });
}

module.exports = {
  getAllUsers: getAllUsers,
  getSingleUser: getSingleUser,
  createUser: createUser,
  updateUser: updateUser,
  removeUser: removeUser,
  getAllEvents: getAllEvents,
  getSingleEvent: getSingleEvent,
  createEvent: createEvent,
  updateEvent: updateEvent,
  removeEvent: removeEvent,
  getAllEventParticipants: getAllEventParticipants,
  getSingleEventParticipant: getSingleEventParticipant,
  createEventParticipant: createEventParticipant,
  updateEventParticipant: updateEventParticipant,
  removeEventParticipant: removeEventParticipant,
  getAllUserSelections: getAllUserSelections,
  getSingleUserSelection: getSingleUserSelection,
  createUserSelection: createUserSelection,
  updateUserSelection: updateUserSelection,
  removeUserSelection: removeUserSelection
};
