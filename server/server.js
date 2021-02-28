const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
    .then ((client) => {
        const db = client.db('planets_hub');
        const planetsCollection = db.collection('planets');
        const planetsRouter = createRouter(planetsCollection);
        app.use('/api/planets', planetsRouter);

        
    })
    .catch(console.error);

app.listen(5000, function (){
    console.log(`listening on port ${this.address().port}`);
});
