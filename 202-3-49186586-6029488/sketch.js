/*

Officer: 6029488
CaseNum: 202-3-49186586-6029488

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce yellow filled text with blue outline in Diggity font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(631,446);
	textSize(27);
}

function draw()
{
	background(255);

	push();
	fill(0,255,255);
	stroke(0,255,0);
	textFont(RonsFont);
	// text("?", 65,109);
	pop();
	fill(255,192,203);
	stroke(0,0,255);
	textFont(Ballpointprint);
	// text("silen", 147,142);
	fill(255,165,0);
	stroke(0,255,0);
	// text("Are", 229,142);
	stroke(0,0,0);
	textFont(Melissa);
	// text("of", 56,204);
	textFont(Diggity);
	// text("and", 312,176);
	fill(255,192,203);
	textFont(Melissa);
	// text("sh", 9,204);
	textFont(Ballpointprint);
	// text("you", 547,176);
	// text("sometimes.", 15,238);
	textFont(RonsFont);
	// text("x", 53,346);
	stroke(0,255,0);
	textFont(Ballpointprint);
	// text("much", 247,109);
	fill(255,255,0);
	stroke(0,0,0);
	textFont(Melissa);
	// text("me", 410,142);
	push();
	fill(255,165,0);
	stroke(255,0,255);
	textFont(Ballpointprint);
	// text("we", 543,142);
	pop();
	textFont(Diggity);
	// text("a", 220,176);
	fill(255,165,0);
	textFont(Ballpointprint);
	// text("?", 469,109);
	stroke(255,0,0);
	textFont(RonsFont);
	// text("darling", 45,27);
	push();
	fill(255,192,203);
	// text("sure", 149,109);
	pop();
	textFont(Diggity);
	// text("Is", 443,81);
	stroke(0,0,255);
	textFont(Melissa);
	// text("not", 118,109);
	fill(255,192,203);
	// text("no", 69,81);
	fill(0,255,255);
	textFont(Ballpointprint);
	// text("can", 375,109);
	textFont(Diggity);
	// text("Perhaps", 467,142);
	fill(255,255,0);
	stroke(0,0,0);
	textFont(RonsFont);
	// text("so", 478,204);
	fill(0,255,255);
	stroke(255,0,255);
	textFont(Melissa);
	// text("I", 230,204);
	textFont(Diggity);
	// text("I'm", 84,109);
	fill(255,255,0);
	stroke(0,0,255);
	text("take", 417,109);
	text("ignore", 142,81);
	text("safe", 14,109);
	fill(255,192,203);
	stroke(0,0,0);
	textFont(Ballpointprint);
	// text("so,", 195,204);
	// text("shou", 17,176);
	// text("more", 304,109);
	stroke(0,0,255);
	textFont(Diggity);
	// text("I", 362,109);
	push();
	fill(255,255,0);
	stroke(255,0,0);
	textFont(Melissa);
	// text("our", 465,81);
	pop();
	textFont(RonsFont);
	// text("orever", 36,292);
	push();
	fill(255,165,0);
	textFont(Diggity);
	// text("go", 86,176);
	pop();
	// text("delays.", 368,81);
	fill(255,255,0);
	textFont(Diggity);
	text("the", 107,142);
	push();
	fill(0,255,255);
	stroke(255,0,255);
	// text("you", 280,142);
	pop();
	text("money", 79,204);
	stroke(255,0,0);
	textFont(RonsFont);
	// text("I", 6,81);
	// text("?", 141,204);
	fill(0,255,255);
	textFont(Melissa);
	// text("yours,", 116,292);
	push();
	fill(255,165,0);
	stroke(255,0,255);
	textFont(Diggity);
	// text("send", 284,204);
	pop();
	textFont(Diggity);
	// text("can", 244,204);
	push();
	fill(255,255,0);
	stroke(255,0,255);
	// text("relationship", 493,81);
	pop();
	textFont(RonsFont);
	// text("The", 499,109);
	stroke(255,0,255);
	textFont(Ballpointprint);
	// text("sort", 354,176);
	stroke(0,0,0);
	// text("break", 242,176);
	fill(255,255,0);
	stroke(255,0,255);
	textFont(RonsFont);
	// text("F", 15,292);
	fill(255,165,0);
	textFont(Melissa);
	// text("this", 399,176);
	fill(255,192,203);
	textFont(Diggity);
	// text("these", 201,81);
	fill(255,255,0);
	textFont(RonsFont);
	// text("If", 160,204);
	stroke(255,0,0);
	textFont(Ballpointprint);
	// text("ce.", 188,142);
	// text("secrets,", 22,142);
	// text("ld", 53,176);
	fill(255,165,0);
	// text("?", 437,142);
	// text("Are", 496,176);
	fill(255,192,203);
	stroke(255,0,255);
	textFont(Melissa);
	// text("My", 15,27);
	textFont(RonsFont);
	// text("avoiding", 319,142);
	textFont(Ballpointprint);
	// text("away", 114,176);
	fill(255,255,0);
	textFont(Melissa);
	// text("guarded", 509,204);
	fill(0,255,255);
	stroke(0,0,0);
	textFont(RonsFont);
	// text("for", 174,176);
	fill(255,192,203);
	stroke(255,0,0);
	textFont(Diggity);
	// text("are", 437,204);
	fill(255,165,0);
	stroke(255,0,255);
	textFont(Ballpointprint);
	// text("You", 391,204);
	// text("out.", 454,176);
	fill(255,192,203);
	stroke(0,255,0);
	textFont(Melissa);
	// text("ort", 26,204);
	// text("Bob,", 130,27);
	fill(255,165,0);
	// text("all", 433,176);
	push();
	fill(255,192,203);
	stroke(255,0,0);
	textFont(Diggity);
	// text("can", 29,81);
	pop();
	textFont(RonsFont);
	// text("continual", 260,81);
	fill(0,255,255);
	stroke(255,0,255);
	textFont(Melissa);
	// text("how", 212,109);
	fill(255,192,203);
	stroke(0,255,0);
	// text("longer", 92,81);
	// text("Daisy", 6,346);
	fill(0,255,255);
	stroke(255,0,255);
	textFont(Ballpointprint);
	// text("cash.", 334,204);
}
