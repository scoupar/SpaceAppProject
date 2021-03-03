import { Db } from "mongodb";

use planets_hub;
db.dropDatabase();

db.planets.insertMany([
    {
        planetName: "Mercury",
        diameter: 4879,
        mass: 0.06,
        moons: 0,
        rings: "No",
        type: "Terrestrial",
        orbitPeriod: 0.24,
        url: "images/mercury.png",
        funFact: "Mercury is the smallest planet in our solar system"

    },
    {
        planetName: "Venus",
        diameter: 12104,
        mass: 0.81,
        moons: 0,
        rings:"No",
        type:"Terrestrial",
        orbitPeriod: 0.62,
        url: "images/venus.png",
        funFact: "Venus is the brightest planet in the night sky"

    },
    {
        planetName: "Earth",
        diameter: 12756,
        mass: 1.0,
        moons: 1,
        rings: "Yes",
        type: "Terrestrial",
        orbitPeriod: 1,
        url: "images/earth.png",
        funFact: "Earth is the only planet that is not named after Greek Gods or Godesses"

    },
    {
        planetName: "Mars",
        diameter: 6792,
        mass: 0.11,
        moons: 2,
        rings: "No",
        type: "Terrestrial",
        orbitPeriod: 1.88,
        url: "images/mars.png",
        funFact: "There have been more missions to Mars than any other planet and Mars is the 2nd smallest planet in our solar system"
    },
    {
        planetName: "Jupiter",
        diameter: 142984,
        mass: 317.83,
        moons: 79,
        rings: "Yes",
        type: "Gas Giant",
        orbitPeriod: 11.86,
        url: "images/jupiter.png",
        funFact: "Jupiter has the shortest day of all the planets - 9 hours and 55 minutes"

    },
    {
        planetName: "Saturn",
        diameter: 120536,
        mass: 95.16,
        moons: 82,
        rings: "Yes",
        type: "Gas Giant",
        orbitPeriod: 29.45,
        url: "images/saturn.png",
        funFact: "Saturn has a moon named Titan"

    },
    {
        planetName: "Neptune",
        diameter: 49528,
        mass: 17.15,
        moons: 14,
        rings: "Yes",
        type: "Ice Giant",
        orbitPeriod: 164.79,
        url: "images/neptune.png",
        funFact: "Neptune is the smallest Gas Giant and the furthest planet from the Sun. Named after the Roman God of the Sea"

    },
    {
        planetName: "Uranus",
        diameter: 51118,
        mass: 14.54,
        moons: 27,
        rings: "Yes",
        type: "Ice Giant",
        orbitPeriod: 84.02,
        url: "images/uranus.png",
        funFact:"The voyager 2 is the only space-craft that has visited Uranus"

    }
    
]); 