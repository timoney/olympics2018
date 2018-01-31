var promise = require('bluebird');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var options = {
  // Initialization Options
  promiseLib: promise,

};

var pgp = require('pg-promise')(options);
var connectionString = '';
var config = {
    host: 'localhost',
    port: 5432,
    database: 'olympics18',
    user: 'olympic',
    password: 'olympic'
};
var db = pgp(config);

var eventsQuery = 'select a.event_id, a.event_nm, a.event_dt, a.stat_cd, b.event_participant_id, b.participant_nm, b.country, b.points, b.odds, b.finish, e.event_participant_id as user_selection from event a inner join event_participant b on a.event_id=b.event_id left join (select d.event_id, d.event_participant_id from user_profile c inner join user_selection d on c.user_id=d.user_id where c.user_id=11) e on a.event_id=e.event_id and b.event_participant_id=e.event_participant_id order by event_dt asc, event_id asc';

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

function getUserSelections(req, res, next) {
  console.log("get selections for user" + req.params.id);
  db.any(eventsQuery, req.params.id)
    .then(function (data) {
      // build event object from result
      var eventObjs = [];
      var event_ids = [];

      // loop through all events/participants that are returned
      for (var i = 0, len = data.length; i < len; i++) {
        var curr_event_id = data[i].event_id;

        console.log(data[i]);
        
        // check if we have already created an event object, base on event_id
        var eventObjExists = false;
        var eventObjIndex = 0;
        for (var j = 0, len2 = eventObjs.length; j < len2; j++ ) {
          if (eventObjs[j].event_id == curr_event_id) {
            eventObjExists = true;
            eventObjIndex = j;
            break;
          }
        }
        
        // if event object already exists, just add the participant to the array
        // else create a new event obj
        if (eventObjExists) {
          eventObjs[j].participants.push({
            'event_participant_id': data[i].event_participant_id,
            'participant_nm': data[i].participant_nm,
            'country': data[i].country,
            'points': data[i].points,
            'odds': data[i].odds,
            'finish': data[i].finish
          });
          if (data[i].user_selection) {
            eventObjs[j].user_selection = data[i].user_selection;
          } 
        } else {
          event_ids.push(curr_event_id);
          eventObjs.push({
            'event_id': data[i].event_id,
            'event_nm': data[i].event_nm,
            'event_dt': data[i].event_dt,
            'stat_cd': data[i].stat_cd,
            'user_selection': data[i].user_selection,
            'participants': [{
              'event_participant_id': data[i].event_participant_id,
              'participant_nm': data[i].participant_nm,
              'country': data[i].country,
              'points': data[i].points,
              'odds': data[i].odds,
              'finish': data[i].finish
            }]
          });
        }
      }
      res.status(200)
        .json({
          status: 'success',
          data: eventObjs,
          message: 'Retrieved User Selections'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createUser(req, res, next) {
  var hash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hash;
  db.one('insert into user_profile ' + 
      '(FRST_NM, LST_NM, EML_TX, GROUP_NM, PASSWORD) ' +
      'values($1, $2, $3, $4, $5) RETURNING USER_ID',
    [req.body.frst_nm, req.body.lst_nm, req.body.eml_tx, req.body.group_nm, req.body.password])
    .then(function(data){
      var user = { user_id: data.user_id };
      var token = jwt.sign(user, 'secret', {
          expiresIn : 60*60*24 // expires in 24 hours
      });
      res.json({ success: true, message: 'Enjoy your token!', user_id: data.user_id, token: token });
    })
    .catch(function (err) {
      return next(err);
    });
}

function loginUser(req, res, next) {
  console.log('here0');
  // find the user
  db.one('select user_id, password from user_profile where eml_tx=$1', [req.body.eml_tx])
    .then(data => {
      console.log('here1');
      if (!data) {
          console.log('here2');
          res.json({ success: false, error: 'Authentication failed. User not found.' });
      } else if (!bcrypt.compareSync(req.body.password, data.password)) {
          console.log('here3 ');
          res.json({ success: false, error: 'Authentication failed. Wrong password.' });
      } else {
          console.log('here4');
          var user = { user_id: data.user_id };
          var token = jwt.sign(user, 'secret', {
              expiresIn : 60*60*24 // expires in 24 hours
          });
          res.json({ success: true, message: 'Enjoy your token!', user_id: data.user_id, token: token });
      }
    })
    .catch(error => {
      res.json({
        success: false,
        error: error.message || error
      });
    });
};

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
  console.log("here");
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

function getEventParticipants(req, res, next) {
  console.log("get event info for event_id: " + req.params.id);
  db.any('select * from event_participant where event_id = $1', req.params.id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved event participants'
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
  getUserSelections: getUserSelections,
  createUser: createUser,
  updateUser: updateUser,
  removeUser: removeUser,
  loginUser: loginUser,
  getAllEvents: getAllEvents,
  getSingleEvent: getSingleEvent,
  createEvent: createEvent,
  updateEvent: updateEvent,
  removeEvent: removeEvent,
  getAllEventParticipants: getAllEventParticipants,
  getEventParticipants: getEventParticipants,
  createEventParticipant: createEventParticipant,
  updateEventParticipant: updateEventParticipant,
  removeEventParticipant: removeEventParticipant,
  getAllUserSelections: getAllUserSelections,
  getSingleUserSelection: getSingleUserSelection,
  createUserSelection: createUserSelection,
  updateUserSelection: updateUserSelection,
  removeUserSelection: removeUserSelection
};
