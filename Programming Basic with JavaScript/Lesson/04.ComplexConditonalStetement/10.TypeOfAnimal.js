function typeOfAnimal([arg1]) {
	let animal = arg1;
	switch (animal) {
		case "dog":
			console.log("mammal")
			break;
		case "tortoise":
		case "snake":
		case "crocodile":
			console.log("reptile");
			break;
		default: 
			console.log("unknown");
			break;
	}
}

typeOfAnimal(["dog"])