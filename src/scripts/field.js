const myField = [];

export const addPlant = (seed) => {
	if (Array.isArray(seed)) {
		for (const oneSeed of seed) {
			myField.push(oneSeed);
		}
	} else {
		myField.push(seed);
	}
}

export const usePlants = () => {
	return theField;
}
