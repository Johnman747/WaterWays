
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const locationRouter = require('./routes/locations.router');

const photoRouter = require('./routes/Photos.router');
const reviewRouter = require('./routes/reviews.router');
const reportsRouter = require('./routes/reports.router');

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

app.use('/api/reviews', reviewRouter);
app.use('/api/photo', photoRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/reports', reportsRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
