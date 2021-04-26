import { createPlan } from './plan.js'
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"

const myPlan = createPlan();
plantSeeds(myPlan);
// at this point, we have a field (array) full of plants (objects)

// and now we create a new array to hold the proper number of harvested plants
const myYield = harvestPlants(usePlants());
console.log(`Here's the yield from this here harvest:`);
console.log(myYield);

// TODO: display something in the DOM
const mainContainer = document.querySelector(".container")
const myYieldDescribed = ''
mainContainer.textContent = myYieldDescribed