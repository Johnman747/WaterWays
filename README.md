#  WaterWays

One Paragraph of project description goes here. Link to the live version of the app if it's hosted on Heroku.

## Built With
-    "@material-ui/core": "^4.6.1",
-    "@material-ui/icons": "^4.5.1",
-    "@material-ui/lab": "^4.0.0-alpha.32",
-    "@react-google-maps/api": "^1.7.9",
-    "axios": "^0.19.0",
-    "bcrypt": "^3.0.6",
-    "cookie-session": "^2.0.0-beta.3",
-    "dotenv": "^4.0.0",
-    "express": "^4.16.4",
-    "google-maps-react": "^2.0.2",
-    "install": "^0.13.0",
-    "npm": "^6.13.0",
-    "passport": "^0.4.0",
-    "passport-local": "^1.0.0",
-    "pg": "^7.9.0",
-    "prop-types": "^15.7.2",
-    "react": "^16.8.6",
-    "react-dom": "^16.8.6",
-    "react-geolocated": "^3.0.1",
-    "react-redux": "^6.0.1",
-    "react-router-dom": "^5.0.0",
-    "react-router-last-location": "^2.0.1",
-    "react-scripts": "^3.0.1",
-    "redux": "^4.0.1",
-    "redux-logger": "^3.0.6",
-    "redux-saga": "^1.0.2",
-    "sweetalert": "^2.1.2"

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Link to software that is required before you attempt to start the app (e.g. node, mongo).


- [Node.js](https://nodejs.org/en/)
- PostgreSQL (https://www.postgresql.org/)
- Postico (optional database interface program that makes interacting with database easier   https://eggerapps.at/postico/)
- Google Maps Javascript API Key ( Go To https://console.developers.google.com )
- Create a .env file with two values in it :
                        - SERVER_SESSION_SECRET=(enter a random string of numbers and letters here, longer than 20 characters)
                        -REACT_APP_GOOGLE_KEY=(copy & paste your google api key here)
- Make sure the .env file is in the root of your project


### Installing

Steps to get the development environment running.

- clone this repo
- `git init`
- `npm install`
- `npm run server`
- `npm run client`

# set up database

Create a database with the name `waterways`

copy and paste the `database.sql` file

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

## Documentation

Link to a read-only version of your scope document or other relevant documentation here (optional). Remove if unused.

### Completed Features

High level list of items completed.

- [x] Feature a
- [x] Feature b

### Next Steps

Features that you would like to add at some point in the future.

- [ ] Feature c

## Deployment

Add additional notes about how to deploy this on a live system

## Authors

* Name of author(s)


## Acknowledgments

* Hat tip to anyone who's code was used