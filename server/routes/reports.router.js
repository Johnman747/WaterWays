const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const rejectUnauthenticated = require('../modules/authentication-middleware')

//get all reports for a single location by location id
router.get('/:id', (req, res) => {
    
    let queryText = `SELECT "activity_log".id, "activity_log".issue_type, "activity_log".issue_comment, "activity_log".location_id, "user".first_name, "user".last_name FROM "activity_log" JOIN "user" ON "activity_log".user_id = "user".id WHERE "location_id" = $1 ORDER BY "activity_log".id DESC;`;
    console.log(req.params.id)
    pool.query(queryText, [req.params.id])
    .then((result) => {
        // console.log('server results all reports XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',result.rows)
        
        res.send(result.rows)
    
    }).catch(error => {
            console.log('error getting reports', error);
            res.sendStatus(500);
    });

});
//get single report by report id
router.get('/report/:id', (req,res) =>{
    let queryText = `SELECT * FROM "activity_log" WHERE "id"=$1;`;
    pool.query(queryText, [req.params.id])
    .then((result) =>{
        // console.log('server results XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', result.rows);
        res.send(result.rows);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    })
});
//post new report to activity log table related to location id
router.post('/', (req,res) =>{
    let report = req.body;
    let queryText = `
    INSERT INTO "activity_log"(user_id,location_id,issue_comment,issue_type)
    VALUES($1,$2,$3,$4) RETURNING "activity_log".location_id`
    let values = [
            report.created_by,
            report.location,
            report.issue_comment,
            report.issue_type
    ]
    pool.query(queryText,values)
    .then((result) =>{
        // console.log("POST RESULTS-------------------------",result.rows);
        res.sendStatus(201)
    }).catch((error) =>{
        console.log(error);
    })
})
//delete report from activity log based on report id
router.delete('/report/:id', (req,res) =>{
    let queryText = `DELETE FROM "activity_log" WHERE "id" = $1;`;
    // console.log(req.params.id);
    pool.query(queryText, [req.params.id])
    .then(() =>{
        res.sendStatus(200)
    }).catch((error) =>{
        console.log(error);
        res.sendStatus(500);
    })
})


module.exports = router;