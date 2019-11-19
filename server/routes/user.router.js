const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// ---- GET ALL USERS ---- //
// GET all users from database
router.get('/all', rejectUnauthenticated, (req, res) => {
  console.log('/user GET route');
  let queryText = 'SELECT * FROM "user" ORDER BY "username" ASC;';
  pool.query(queryText).then(results => {
      // res.sendStatus(200);
      res.send(results.rows)
  }).catch( error => {
      console.log('Error making GET request (Server)', error);
      res.sendStatus(500);
  })
}); // end GET all users

// ---- DELETE USER ---- //
// Delete Users fromt the database by setting user status from active to deleted
router.put('/all/:id', rejectUnauthenticated, (req, res) => {
  let user = req.body;
  let status;
  if(user.status == 'Inactive'){
    status = 'active';
  }
  if(user.status == 'active'){
    status = 'Inactive'
  }
  console.log('status',status);
  console.log(user);
  let queryText = `UPDATE "user" SET "status" = $1 WHERE "id"=$2;`;
  pool.query(queryText, [status, req.params.id])
  .then( (result) => {
    //console.log('Delete Success', result);
    res.sendStatus(200);
  }).catch( error => {
    console.log('Error in DELETE user request', error);
    res.sendStatus(500);
  })
})

router.put('/admin_level/:id', rejectUnauthenticated, (req, res) => {
  const user = req.body.admin_level;
  let queryText = `UPDATE "user" SET "admin_level" = $1 WHERE "id"=$2;`;
  pool.query(queryText, [user, req.params.id])
  .then( (result) => {
    //console.log('Delete Success', result);
    res.sendStatus(200);
  }).catch( error => {
    console.log('Error in DELETE user request', error);
    res.sendStatus(500);
  })
})

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const first = req.body.first;
  const last = req.body.last;
  const admin = req.body.admin;

  const queryText = 'INSERT INTO "user" (username, password, first_name, last_name, admin_level) VALUES ($1, $2, $3, $4, $5) RETURNING id';
  pool.query(queryText, [username, password, first, last ,admin])
    .then(() => res.sendStatus(201))
    .catch((error) => {
      console.log(error)
      res.sendStatus(500)});
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;