#  WaterWays

WaterWays is a mobile-first web application used for tracking natural springs, seeps, and artesian well water sources. Using Google API, community users are able to find, locate, and contribute new locations to the map. Additionally, WaterWays allows users to be able to leave reviews and comments about the location. Since many water resources are changing due to weather, activity, or maintenance, users can also flag locations for issues. WaterWays administrators are able to review locations for further accuracy and community integrity. Additionally, they also are able to moderate community contributions by reviewing and removing harmful accounts, posts, and locations based on community guidelines. 
WaterWays has been built to bring a caring, active, eco-conscious community together.

Sharing Knowledge. Preserving Resources.

## Built With

WaterWays was built using the following frameworks and materials.
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

### Home Page

On the home page users can see all the locations near them. They can click on the icons and be brought to the locations details page. 

![Home-Page](ScreenShots/homePage.png?raw=true)

Here users can see the details of the location. You can see name, location, description, rating, tags, reviews, activity, and photos.

![Location-Details](ScreenShots/LocationDetails.png?raw=true)

On the add location page you can submit a new location to the moderators for approval. You can give the location a name, description, add a picture, give it tags, a location and address.

![Add-Location](ScreenShots/AddLocation.png?raw=true)

Here users that have been set to moderator status can either approve and deny new user added locations. 

![Manage-Locations](ScreenShots/ManageLocations.png?raw=true)

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

* Misky Abshir
* Marty Lestock
* Kienan Lundstrum
* Johnathan Moes
* Nathan Voigt

## Acknowledgments

* Noble Falconer
* Prime Digital Academy