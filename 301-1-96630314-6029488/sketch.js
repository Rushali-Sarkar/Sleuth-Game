/*
The case of the Python Syndicate
Stage 2


Officer: 6029488
CaseNum: 301-1-96630314-6029488

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Rocky kray

- The variables for Rocky kray have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Rocky kray for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var pawel_karpinski_image;
var rocky_kray_image;
var anna_karpinski_image;
var lina_lovelace_image;
var countess_hamilton_image;
var robbie_kray_image;


var rocky_kray_x_loc = 408;
var rocky_kray_y_loc = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	lina_lovelace_image = loadImage("lina.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	robbie_kray_image = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(rocky_kray_image, rocky_kray_x_loc, rocky_kray_y_loc);

	image(pawel_karpinski_image, rocky_kray_x_loc - 293,  rocky_kray_y_loc);
	image(anna_karpinski_image, rocky_kray_x_loc + 293,  rocky_kray_y_loc);
	image(lina_lovelace_image, rocky_kray_x_loc - 293, rocky_kray_y_loc + 269);
	image(countess_hamilton_image, rocky_kray_x_loc, rocky_kray_y_loc + 269);
	image(robbie_kray_image, rocky_kray_x_loc + 293, rocky_kray_y_loc + 269);

}