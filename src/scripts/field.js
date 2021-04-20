const myField = [];

export const addPlant = (seed) => {
	// handle the case where seed is an array of seeds
	if (Array.isArray(seed)) {
		for (const oneSeed of seed) {
			myField.push(oneSeed);
		}
	} else {
		myField.push(seed);
	}
}

export const usePlants = () => {
	return myField;
}
