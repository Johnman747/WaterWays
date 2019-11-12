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
    let queryText = `SELECT * FROM "locations" WHERE id=$1;`;
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
    const location = req.body;
    const values =[
                    location.name,
                    location.address,
                    location.latitude,
                    location.longitude,
                    location.created_by,
                    location.free,
                    location.spigot,
                    location.trail_access,
                    location.road_access,
                    location.campground_access,
                    location.free_flowing,
                    location.artesian_well,
                    location.photo.image,
                    location.description
                ]
    queryText = `INSERT INTO "locations"
    (name,address,latitude,longitude,created_by,free,
        spigot,trail_access,road_access,campground_access,
        free_flowing,artesian_well,photo_primary,description)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`;

    pool.query(queryText,values)
        .then((result) => {
        console.log(result)
        }).catch((error) =>{
            console.log(error);
            res.sendStatus(500)
        });
});

module.exports = router;