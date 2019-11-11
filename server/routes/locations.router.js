const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const rejectUnauthenticated = require('../modules/authentication-middleware')

/**
 * GET route template
 */
router.get('/', (req, res) => {
    queryText = `SELECT * FROM "locations";`;
    pool.query(queryText).then((result)=>{
        // console.log(result.rows);
        res.send(result.rows);
    }).catch((error)=>{
        console.log(error);
    })
});

router.get('/:id', (req, res) => {
    let queryText = `SELECT * FROM "location" WHERE id=$1;`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.send(result.rows)
    })
        .catch(error => {
            console.log('Error making SELECT for developmental questions:', error);
            res.sendStatus(500);
        });

});

// router.delete('/:id', rejectUnauthenticated, (req, res) => { 
//     const location = req.body; 
//     console.log('in delete', location) 
//         const query = `DELETE FROM "locations" WHERE "id"=$1;`;
//         pool.query(query, [req.params.id]).then(() => {
//             res.sendStatus(200);
//         }).catch((error) => {
//             console.log('ERROR with DELETE ', error);

//             res.sendStatus(500);
//         })
// });

/**
 * POST route template
 */
router.post('/', (req, res) => {
    let name = req.body.name
    let address = req.body.address
    let lat = req.body.lattitude
    let long = req.body.longitude
    let created = req.body.created_by
    let cost = req.body.free_true
    let spigot = req.body.spickett
    let trail = req.body.trail_access
    let road = req.body.road_access
    let camp = req.body.campground_access
    let free_flowing = req.body.free_flowing
    let artesian = req.body.artesian_well
    let photo = req.body.photo_primary
    let description = req.body.description

    queryText = `INSERT INTO "locations"
    (name,address,latittude,longitude,created_by,free_true,
        spickett,trail_access,road_access,campground_access,
        free_flowing,artisian_well,photo_primary,decription)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`;

    pool.query(queryText,
         [name,address,
            lat,long,created,
            cost,spigot,trail,
            road,camp,free_flowing,
        artesian, photo, description])
        .then((result) => {
        console.log(result)
        }).catch((error) =>{
            console.log(error);
            res.sendStatus(500)
        });
});

module.exports = router;