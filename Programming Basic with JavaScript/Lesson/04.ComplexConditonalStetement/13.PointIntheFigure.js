function pointInFigure([arg1, arg2, arg3]) {
	let h = Number(arg1);
	let x = Number(arg2);
	let y = Number(arg3);

	let x1 = 0;
	let y1 = 0;
	let x2 = 3 * h;
	let y2 = h;

	let x3 = h;
	let y3 = h;
	let x4 = 2 * h
	let y4 = 4 * h;
 	// OnBorder
	figureOnBorderOneTopSide    = (y == y2 && x >= x1 && x <= x2);
	figureOnBorderOneBottomSide = (y == y1 && x >= x1 && x <= x2);
	figureOnBorderOneLeftSide   = (x == x1 && y >= y1 && y <= y2);
	figureOnBorderOneRightSide  = (x == x2 && y >= y1 && y <= y2);

	figureOnBorderTwoTopSide    = (y == y4 && x >= x3 && x <= x4);
	figureOnBorderTwoBottomSide = (y == y3 && x >= x3 && x <= x4);
	figureOnBorderTwoLeftSide   = (x == x3 && y >= y3 && y <= y4);
	figureOnBorderTwoRightSide  = (x == x4 && y >= y3 && y <= y4);

	//InSide
	figureInSideOneTopSide    = (y < y2 && x >= x1 && x <= x2);
	figureInSideOneBottomSide = (y > y1 && x >= x1 && x <= x2);
	figureInSideOneLeftSide   = (x > x1 && y >= y1 && y <= y2);
	figureInSideOneRightSide  = (x < x2 && y >= y1 && y <= y2);

	figureInSideTwoTopSide    = (y < y4 && x >= x3 && x <= x4);
	figureInSideTwoBottomSide = (y > y3 && x >= x3 && x <= x4);
	figureInSideTwoLeftSide   = (x > x3 && y >= y3 && y <= y4);
	figureInSideTwoRightSide  = (x < x4 && y >= y3 && y <= y4);

	// DA SE NAPRVAI PROVERKA ZA DOLEPQSHATA STRANA ZA MAX TOCHKI

	//OutSide
	// figureOutSideOneTopSide    = ();
	// figureOutSideOneBottomSide = ();
	// figureOutSideOneLeftSide   = ();
	// figureOutSideOneRightSide  = ();

	// figureOutSideTwoTopSide    = ();
	// figureOutSideTwoBottomSide = ();
	// figureOutSideTwoLeftSide   = ();
	// figureOutSideTwoRightSide  = ();


	if (figureOnBorderOneTopSide || figureOnBorderOneBottomSide || figureOnBorderOneLeftSide || figureOnBorderOneRightSide || figureOnBorderTwoTopSide || figureOnBorderTwoBottomSide || figureOnBorderTwoLeftSide || figureOnBorderTwoRightSide){
		console.log("border");
	} else if ((figureInSideOneTopSide && figureInSideOneBottomSide && figureInSideOneLeftSide &&  figureInSideOneRightSide) || (figureInSideTwoTopSide && figureInSideTwoBottomSide && figureInSideTwoLeftSide &&  figureInSideTwoRightSide)) {
	console.log("inside");
	} else {
		console.log("outside");
	}
}

pointInFigure(["10", "13", "10"]);