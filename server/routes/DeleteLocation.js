const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
//DELETE location route
router.delete('/:id', rejectUnauthenticated, (req, res) => { 
    const location = req.body; 
    console.log('in delete', location) 
        const query = `DELETE FROM "locations" WHERE "id"=$1;`;
        pool.query(query, [req.params.id]).then((results) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('ERROR with DELETE ', error);

            res.sendStatus(500);
        })
});//end DELETE router
module.exports = router;