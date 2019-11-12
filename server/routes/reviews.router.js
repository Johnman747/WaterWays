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

module.exports = router;