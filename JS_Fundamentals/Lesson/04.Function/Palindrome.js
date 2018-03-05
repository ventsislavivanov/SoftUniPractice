function palindrome(a) {
	return a.split(' ').reverse().join("") === a;
}

console.log(palindrome('addd'));