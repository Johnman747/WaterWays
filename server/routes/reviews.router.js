const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const rejectUnauthenticated = require('../modules/authentication-middleware')

router.get('/:id', (req, res) => {
    
    let queryText = `SELECT * FROM "reviews" WHERE "location_id"=$1;`;
    console.log(req.params.id)
    pool.query(queryText, [req.params.id])
    .then((result) => {
        console.log('server resultsXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',result.rows)
        
        res.send(result.rows)
    
    }).catch(error => {
            console.log('Error making SELECT for developmental questions:', error);
            res.sendStatus(500);
        });

});
router.get('/review/:id', (req,res) =>{
    let queryText = `SELECT * FROM "reviews" WHERE "id"=$1;`;
    pool.query(queryText, [req.params.id])
    .then((result) =>{
        console.log('server results XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', result.rows);
        res.send(result.rows);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    })
})

router.delete('/review/:id', (req,res) =>{
    let queryText = `DELETE FROM "reviews" WHERE "id"=$1;`;
    console.log(req.params.id);
    pool.query(queryText, [req.params.id])
    .then(() =>{
        res.sendStatus(200)
    }).catch((error) =>{
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;