/*
The case of the Python Syndicate
Stage 3


Officer: 6029488
CaseNum: 301-2-84754307-6029488

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Lina lovelace has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Lina lovelace object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var bones_karpinski_img;
var robbie_kray_img;
var lina_lovelace_img;
var countess_hamilton_img;
var rocky_kray_img;
var anna_karpinski_img;

var lina_lovelace_obj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bones_karpinski_img = loadImage("karpinskiDog.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	lina_lovelace_img = loadImage("lina.png");
	countess_hamilton_img = loadImage("countessHamilton.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	lina_lovelace_obj = {
		x: 701,
		y: 40,
		image: lina_lovelace_img
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(lina_lovelace_obj.image, lina_lovelace_obj.x, lina_lovelace_obj.y);

	image(bones_karpinski_img, lina_lovelace_obj.x - 586, lina_lovelace_obj.y);
	image(robbie_kray_img, lina_lovelace_obj.x - 293, lina_lovelace_obj.y);
	image(countess_hamilton_img, lina_lovelace_obj.x - 586, lina_lovelace_obj.y + 269);
	image(rocky_kray_img, lina_lovelace_obj.x - 293, lina_lovelace_obj.y + 269);
	image(anna_karpinski_img, lina_lovelace_obj.x, lina_lovelace_obj.y + 269);

}