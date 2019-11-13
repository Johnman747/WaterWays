const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const rejectUnauthenticated = require('../modules/authentication-middleware')

/**
 * GET route template
 */
router.get('/', (req, res) => {
    queryText = `SELECT * FROM "locations" ORDER BY "approve" ASC;`;
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
            console.log('Error making SELECT for location:', error);
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
router.put('/location/:id', (req,res) =>{
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
        queryText = `UPDATE "locations" SET
        "name"=$1,"address"=$2,"latitude"=$3,"longitude"=$4,"created_by"=$5,"free"=$6,
            "spigot"=$7,"trail_access"=$8,"road_access"=$9,"campground_access"=$10,
            "free_flowing"=$11,"artesian_well"=$12,"photo_primary"=$13,"description"=$14 WHERE "id"=$15`;
        
        pool.query(queryText,[values, req.params.id])
            .then((result) => {
            console.log(result)
            }).catch((error) =>{
                console.log(error);
                res.sendStatus(500)
            });

});
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