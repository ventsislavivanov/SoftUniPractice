function nowPlaying(info) {
	let track = info[0];
	let artist = info[1];
	let duration = info[2];

	console.log(`Now Playing: ${artist} - ${track} [${duration}]`);
}

nowPlaying(['Number One', 'Nelly', '4:09']);