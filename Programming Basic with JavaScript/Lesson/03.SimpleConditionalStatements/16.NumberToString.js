function test([arg1]) {
	let num = Number(arg1);
	
	switch (num) {
	case 0:
		num = "zero";
		break;
	case 1:
		num = "one";
		break;
	case 2:
		num = "two";
		break;
	case 3:
		num = "three";
		break;
	case 4:
		num = "four";
		break;
	case 5:
		num = "five";
		break;
	case 6:
		num = "six";
		break;
	case 7:
		num = "seven"
		break;
	case 8:
		num = "eight"
		break;
	case 9:
		num = "nine"
		break;
	case 10:
		num = "ten";
		break;
	case 11:
		num = "eleven";
		break;
	case 12:
		num = "twelve";
		break;
	case 13:
		num = "thirteen";
		break;
	case 14:
		num = "fourteen";
		break;
	case 15:
		num = "fifteen";
		break;
	case 16:
		num = "sixteen";
		break;
	case 17:
		num = "seventeen"
		break;
	case 18:
		num = "eightteen"
		break;
	case 19:
		num = "nineteen"
		break;
	case 20:
		num = "twenty";
		break;
	case 21:
		num = "twenty one";
		break;
	case 22:
		num = "twenty two";
		break;
	case 23:
		num = "twenty three";
		break;
	case 24:
		num = "twenty four";
		break;
	case 25:
		num = "twenty five";
		break;
	case 26:
		num = "twenty six";
		break;
	case 27:
		num = "twenty seven"
		break;
	case 28:
		break;
		num = "twenty eight"
		break;
	case 29:
		num = "twenty nine"	
	}

	console.log(num);
}

function test1([arg1]) {
	let num = Number(arg1);
	let toNineteen = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

	let toNinety = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

	if (num < 20) {
		console.log(toNineteen[num]);
	} else if (num >= 20 && num < 100) {
		if (num % 10 == 0) {
			console.log(toNinety[num / 10 - 2]);
		} else {
			console.log(toNinety[num / 10 - 2] +  " " + toNineteen[num % 10]);
		}
	} else if (num == 100) {
		console.log("one hundred")
	}
}

test1(["91"])