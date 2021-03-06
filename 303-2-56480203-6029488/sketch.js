/*

Officer: 6029488
CaseNum: 303-2-56480203-6029488

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is released:
	- Make Restricted_Locker_CodeA equal to the value of mouseX
	- Use the 'max' function to prevent Restricted_Locker_CodeA from falling below 1

	Whilst the mouse is being dragged:
	- Increment Restricted_Locker_CodeB by 1
	- Use the 'constrain' function to prevent Restricted_Locker_CodeB from falling below 2 and going above 10

	Whilst the mouse is being dragged:
	- Make Restricted_Locker_CodeC equal to the value of mouseX
	- Use the 'min' function to prevent Restricted_Locker_CodeC from going above 13

	When the mouse button is pressed:
	- Increment Restricted_Locker_CodeD by 2
	- Use the 'max' function to prevent Restricted_Locker_CodeD from falling below 4

	Whilst the mouse is moving:
	- Make Restricted_Locker_CodeE equal to the value of mouseX
	- Use the 'max' function to prevent Restricted_Locker_CodeE from falling below 12



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Restricted_Locker_CodeA;
var Restricted_Locker_CodeB;
var Restricted_Locker_CodeC;
var Restricted_Locker_CodeD;
var Restricted_Locker_CodeE;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Restricted_Locker_CodeA = 0;
	Restricted_Locker_CodeB = 0;
	Restricted_Locker_CodeC = 0;
	Restricted_Locker_CodeD = 0;
	Restricted_Locker_CodeE = 0;

}

///////////////////EVENT HANDLERS///////////////////

function mouseMoved()
{
	console.log("mouseMoved", mouseX, mouseY);
	Restricted_Locker_CodeE = max(mouseX, 12);
	
}

function mouseDragged()
{
	console.log("mouseDragged", mouseX, mouseY);
	Restricted_Locker_CodeB += 1;
	Restricted_Locker_CodeB = constrain(Restricted_Locker_CodeB, 2, 10);
	Restricted_Locker_CodeC = min(mouseX, 13);
	
}

function mousePressed()
{
	console.log("mousePressed");
	Restricted_Locker_CodeD += 2;
	Restricted_Locker_CodeD = max(Restricted_Locker_CodeD, 4);

}

function mouseReleased()
{
	console.log("mouseReleased");
	Restricted_Locker_CodeA = max(1, mouseX);
}




///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,Restricted_Locker_CodeA, 14);
	pop();

	push();
	translate(120,380);
	drawDial(140,Restricted_Locker_CodeB, 14);
	pop();

	push();
	translate(280,170);
	drawDial(140,Restricted_Locker_CodeC, 17);
	pop();

	push();
	translate(280,380);
	drawDial(140,Restricted_Locker_CodeD, 25);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(Restricted_Locker_CodeE);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
