const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const rejectUnauthenticated = require('../modules/authentication-middleware')

//get all reviews from location by location id
router.get('/:id', (req, res) => {
    
    let queryText = `SELECT "reviews".id, "reviews".comment, "reviews".review_score_of_five, "reviews".location_id, "user".first_name, "user".last_name FROM "reviews" JOIN "user" ON "reviews".user_id = "user".id WHERE "location_id" = $1 ORDER BY "reviews".id DESC;`;
    console.log(req.params.id)
    pool.query(queryText, [req.params.id])
    .then((result) => {
        // console.log('server resultsXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',result.rows)
        res.send(result.rows)
    
    }).catch(error => {
            console.log('Error making SELECT for developmental questions:', error);
            res.sendStatus(500);
        });

});
//post new review to location by location id
router.post('/', (req,res) =>{
    let review = req.body;
    let queryText = `
    INSERT INTO "reviews"(user_id,location_id,comment,review_score_of_five)
    VALUES($1,$2,$3,$4)`
    let values = [
            review.user_id,
            review.locatation_id,
            review.comment,
            review.review_score_of_five
    ]
    pool.query(queryText,values)
    .then((result) =>{
        // console.log(result);
        res.sendStatus(201)
    }).catch((error) =>{
        console.log(error);
    })
})
//get single review by review id
router.get('/review/:id', (req,res) =>{
    let queryText = `SELECT * FROM "reviews" WHERE "id"=$1;`;
    pool.query(queryText, [req.params.id])
    .then((result) =>{
        res.send(result.rows);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    })
});
//delete review by review id
router.delete('/review/:id', (req,res) =>{
    let queryText = `DELETE FROM "reviews" WHERE "id"=$1;`;
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