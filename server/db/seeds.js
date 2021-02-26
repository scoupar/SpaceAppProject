import { Db } from "mongodb";

use planets_hub;
db.dropDatabase();

db.planets.insertMany([
    {
        planetName: "Earth",
        diameter: 12742

    }
]);