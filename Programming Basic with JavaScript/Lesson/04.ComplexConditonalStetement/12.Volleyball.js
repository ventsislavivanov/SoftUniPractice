function volleyball([arg1, arg2, arg3]) {
	let kindOfYear = arg1;
	let holidays = Number(arg2);
	let travelToHome = Number(arg3);

	let gamesSofia = (48 - travelToHome) * 3 / 4;
	let gamesHome = travelToHome;
	let gameHoliday = holidays * 2 / 3;

	let allGames = gamesSofia + gamesHome + gameHoliday;

	switch (kindOfYear) {
		case "leap":
		let persent = 0.15;
		allGames = allGames + (allGames * persent);
		console.log(Math.trunc(allGames));
		break;
		case "normal":
			console.log(Math.trunc(allGames));
			break;
		default:
			break;
	}
}

volleyball(["leap", "5", "2"]);