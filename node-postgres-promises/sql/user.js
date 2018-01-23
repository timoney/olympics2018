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