import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant } from "./field.js"

export const plantSeeds = (plan) => {
	for (const row of plan) {
		for (const plant of row) {
			switch(plant) {
				case "Potato":
					addPlant(createPotato());
					break;
				case "Soybean":
					addPlant(createSoybean());
					break;
				case "Corn":
					addPlant(createCorn());
					break;
				case "Wheat":
					addPlant(createWheat());
					break;
				case "Asparagus":
					addPlant(createAsparagus());
					break;
				case "Sunflower":
					addPlant(createSunflower());
					break;
				default:
					console.log(`I don't know how to plant ${plant}`);
			}
		}
	}
}
