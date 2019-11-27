const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const rejectUnauthenticated = require('../modules/authentication-middleware')

/**
 * GET route template
 */
router.get('/', (req, res) => {
    queryText = `SELECT * FROM "locations" WHERE "approve" = TRUE`;
    pool.query(queryText).then((result)=>{
        // console.log(result.rows);
        res.send(result.rows);
    }).catch((error)=>{
        console.log( "select ADD", error);
    })
});

router.get('/moderateLocation', (req, res) => {
    queryText = `SELECT * FROM "locations" ORDER BY "approve" DESC;`;
    pool.query(queryText).then((result)=>{
        // console.log(result.rows);
        res.send(result.rows);
    }).catch((error)=>{
        console.log("moderator", error);
    })
});

// Get Location for Search Bar ////////////////////
router.get('/search', (req, res) => {
    queryText = `SELECT * FROM "locations" WHERE "approve" = TRUE ORDER BY "name" ASC;`;
    pool.query(queryText).then((result)=>{
        // console.log(result.rows);
        res.send(result.rows);
    }).catch((error)=>{
        console.log(error);
    })
});

router.post('/filter', (req,res) =>{
//THIS POST IS ACTUALLY A GET REQUEST BUT NEEDED TO 
//BE ABLE TO PASS A REQUEST BODY DO NOT CHANGE THIS   
const filters = req.body;
    const values = [
        filters.free,
        filters.spigot,
        filters.trail_access,
        filters.road_access,
        filters.campground_access,
        filters.free_flowing,
        filters.artesian_well,
        filters.rv
        ]
    console.log(filters);
    
    let queryText = `SELECT * FROM "locations" WHERE ` 
    if(filters.free === true){        
        queryText = queryText + `free = TRUE AND`
    }
    if(filters.spigot === true){
        queryText = queryText + ` "spigot" = TRUE AND`
    }
    if(filters.trail_access === true){
        queryText = queryText + ` "trail_access" = TRUE AND`
    }
    if(filters.road_access === true){
        queryText = queryText + ` "road_access" = TRUE AND`
    }
    if(filters.campground_access === true){
        queryText = queryText + ` "campground_access" = TRUE AND`
    }
    if(filters.free_flowing === true){
        queryText = queryText + ` "free_flowing" = TRUE AND`
    }
    if(filters.artesian_well === true){
        queryText = queryText + ` "artesian_well" = TRUE AND`
    }
    if(filters.rv === true){
        queryText = queryText + ` "rv" = TRUE `
    }
    if(filters.trail_water_source === true){
        queryText = queryText + ` "trail_water_source" = TRUE AND`
    }
    if(filters.dirt_road_access === true){
        queryText = queryText + ` "dirt_road_access" = TRUE AND`
    }
    if(filters.dirt_trail_access === true){
        queryText = queryText + ` "dirt_trail_access" = TRUE `
    }else{
        queryText = queryText + ` "free" = FALSE `

    }

    console.log('XXXXXXXXXXXXXXXXXX', queryText)
    
    

    pool.query(queryText)
    .then((result) => {
        console.log(result.rows)
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);

    })
});
//gets singl location by id
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
//deletes location by id
router.delete('/location/:id', (req, res) => { 
    // let queryText = `DELETE FROM "activity_log" WHERE "id"`
   
        let queryText = `DELETE FROM "locations" WHERE "id"=$1;`;
        pool.query(queryText, [req.params.id]).then(() => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('ERROR with DELETE ', error);

            res.sendStatus(500);
        })
});

//updates location by id
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
                        location.photo_primary,
                        location.description,
                        location.rv,
                        location.approve,
                        location.trail_water_source,
                        location.dirt_road_access,
                        location.dirt_trail_access,
                        req.params.id
                    ]
        queryText = `UPDATE "locations" SET
        "name"=$1,"address"=$2,"latitude"=$3,"longitude"=$4,"created_by"=$5,"free"=$6,
            "spigot"=$7,"trail_access"=$8,"road_access"=$9,"campground_access"=$10,
            "free_flowing"=$11,"artesian_well"=$12,"photo_primary"=$13,"description"=$14,
            "rv"=$15,"approve"=$16,"trail_water_source"=$17,"dirt_road_access"=$18,
            "dirt_trail_access"=$19  WHERE "id"=$20`;
        
        pool.query(queryText,values)
            .then((result) => {
            console.log(result)
            }).catch((error) =>{
                console.log(error);
                res.sendStatus(500)
            });

});

//adds single location to database
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
                    location.photo,
                    location.description,
                    location.rv,
                    location.approve,
                    location.trail_water_source,
                    location.dirt_road_access,
                    location.dirt_trail_access,
                ]
    queryText = `INSERT INTO "locations"
    (name,address,latitude,longitude,created_by,free,
        spigot,trail_access,road_access,campground_access,
        free_flowing,artesian_well,photo_primary,description,rv,approve,trail_water_source,dirt_road_access,dirt_trail_access)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)`;
    
    pool.query(queryText,values)
        .then((result) => {
        console.log(result)
        }).catch((error) =>{
            console.log(error);
            res.sendStatus(500)
        });
});

module.exports = router;