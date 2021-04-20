export const harvestPlants = (plants) => {
    const theHarvest = [];
    for (const plant of plants) {
        if (plant.type === "Corn") {
            // we only keep half of the corn harvest, so output is halved
            for (let i = plant.output / 2; i > 0; i--) {
                theHarvest.push(plant);
            }
        } else {
            for (let i = plant.output; i > 0; i--) {
                // does pushing the plant into the array perform a copy each time?
                theHarvest.push(plant);
            }
        }
   } 
   return theHarvest;
}