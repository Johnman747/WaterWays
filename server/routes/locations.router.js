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
// router.post('/', (req, res) => {
//     queryText = 
// });

module.exports = router;