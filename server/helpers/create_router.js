const express = require('express');
const ObjectID = require('mongodb').ObjectID;

createRouter = function(collection) {
    const router = express.Router();


    const catchError = (err) => {
        console.error(err);
        res.status(500);
        res.json({status: 500, error: err});
      };

    //GET - INDEX - SHOW ALL PLANETS
    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => {
            res.json(docs)
        })
        .catch((err) => catchError(err));
    });

    //GET - SHOW - SHOW INDIVIDUAL PLANET
    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection.findOne({_id: ObjectID(id)})
        .then((doc) => {
            res.json(doc)
        })
        .catch((err) => catchError(err));
    });


    return router;
};

module.exports = createRouter;