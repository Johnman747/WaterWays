const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

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

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;