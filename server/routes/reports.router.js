const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const rejectUnauthenticated = require('../modules/authentication-middleware')

router.get('/:id', (req, res) => {
    
    let queryText = `SELECT * FROM "activity_log" WHERE "location_id"=$1;`;
    console.log(req.params.id)
    pool.query(queryText, [req.params.id])
    .then((result) => {
        console.log('server resultsXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',result.rows)
        
        res.send(result.rows)
    
    }).catch(error => {
            console.log('error getting reports', error);
            res.sendStatus(500);
    });

});

router.get('/report/:id', (req,res) =>{
    let queryText = `SELECT * FROM "activity_log" WHERE "id"=$1;`;
    pool.query(queryText, [req.params.id])
    .then((result) =>{
        console.log('server results XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', result.rows);
        res.send(result.rows);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    })
});
router.post('/', (req,res) =>{
    let report = req.body;
    let queryText = `
    INSERT INTO "activity_log"(user_id,location_id,issue_comment,issue_type)
    VALUES($1,$2,$3,$4)`
    let values = [
            report.user_id,
            report.locatation_id,
            report.issue_comment,
            report.issue_type
    ]
    pool.query(queryText,values)
    .then((result) =>{
        console.log(result);
        res.sendStatus(201)
    }).catch((error) =>{
        console.log(error);
    })
})

router.delete('/report/:id', (req,res) =>{
    let queryText = `DELETE FROM "activity_log" WHERE "id"=$1;`;
    console.log(req.params.id);
    pool.query(queryText, [req.params.id])
    .then(() =>{
        res.sendStatus(200)
    }).catch((error) =>{
        console.log(error);
        res.sendStatus(500);
    })
})

// router.delete('/:id', (req,res) =>{
//     let queryText = `DELETE FROM "reports" WHERE "id"=$1;`;
//     console.log(req.params.id);
//     pool.query(queryText, [])
//     .then(() =>{
//         res.sendStatus(200)
//     }).catch((error) =>{
//         console.log(error);
//         res.sendStatus(500);
//     })
// })

module.exports = router;