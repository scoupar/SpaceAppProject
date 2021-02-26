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
        url: "https://space-facts.com/wp-content/uploads/mercury.png"

    },
    {
        planetName: "Venus",
        diameter: 12104,
        mass: 0.81,
        moons: 0,
        rings:"No",
        type:"Terrestrial",
        orbitPeriod: 0.62,
        url: "https://space-facts.com/wp-content/uploads/venus.png"

    },
    {
        planetName: "Earth",
        diameter: 12756,
        mass: 1.0,
        moons: 1,
        rings: "Yes",
        type: "Terrestrial",
        orbitPeriod: 1,
        url: "https://space-facts.com/wp-content/uploads/earth.png"

    },
    {
        planetName: "Mars",
        diameter: 6792,
        mass: 0.11,
        moons: 2,
        rings: "No",
        type: "Terrestrial",
        orbitPeriod: 1.88,
        url: "https://space-facts.com/wp-content/uploads/mars.jpg"
    },
    {
        planetName: "Jupiter",
        diameter: 142984,
        mass: 317.83,
        moons: 79,
        rings: "Yes",
        type: "Gas Giant",
        orbitPeriod: 11.86,
        url: "https://space-facts.com/wp-content/uploads/jupiter.png"

    },
    {
        planetName: "Saturn",
        diameter: 120536,
        mass: 95.16,
        moons: 82,
        rings: "Yes",
        type: "Gas Giant",
        orbitPeriod: 29.45,
        url: "https://space-facts.com/wp-content/uploads/saturn.png"

    },
    {
        planetName: "Neptune",
        diameter: 49528,
        mass: 17.15,
        moons: 14,
        rings: "Yes",
        type: "Ice Giant",
        orbitPeriod: 164.79,
        url: "https://space-facts.com/wp-content/uploads/neptune.png"

    },
    {
        planetName: "Uranus",
        diameter: 51118,
        mass: 14.54,
        moons: 27,
        rings: "Yes",
        type: "Ice Giant",
        orbitPeriod: 84.02,
        url: "https://space-facts.com/wp-content/uploads/uranus.png"

    }
    
]); 