
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const locationRouter = require('./routes/locations.router');
<<<<<<< HEAD
const photoRouter = require('./routes/Photos.router');
=======
const reviewRouter = require('./routes/reviews.router');
>>>>>>> master
// Body parser middleware
app.use(bodyParser.json({limit: '1 gb'}));
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/locations', locationRouter);
<<<<<<< HEAD
app.use('/api/photo', photoRouter);
=======
app.use('/api/reviews', reviewRouter);
>>>>>>> master

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
