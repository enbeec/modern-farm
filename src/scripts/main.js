import { createPlan } from './plan.js'
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"

const myPlan = createPlan();

plantSeeds(myPlan);
harvestPlants(usePlants())