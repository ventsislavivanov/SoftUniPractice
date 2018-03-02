function dayOfWeek(day) {
	let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	return arr.indexOf(day) > -1 ? arr.indexOf(day) + 1 : 'error';
}

console.log(dayOfWeek('Monday'));