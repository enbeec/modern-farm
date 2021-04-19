import { createPlan } from './plan.js'
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"

const myPlan = createPlan();

plantSeeds(myPlan);
console.log(usePlants());