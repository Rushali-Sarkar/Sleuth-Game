/*
The case of the Python Syndicate
Stage 4

Officer: 6029488
CaseNum: 301-3-27259771-6029488

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var countessHamiltonImg;
var annaKarpinskiImg;
var pawelKarpinskiImg;
var rockyKrayImg;
var linaLovelaceImg;
var cecilKarpinskiImg;

var rockyKrayObj;


//declare your new objects below


// var countessHamiltonPositionX = 115;
// var countessHamiltonPositionY = 40;
// var annaKarpinskiPositionX = 408;
// var annaKarpinskiPositionY = 40;
// var pawelKarpinskiPositionX = 701;
// var pawelKarpinskiPositionY = 40;
// var linaLovelacePositionX = 408;
// var linaLovelacePositionY = 309;
// var cecilKarpinskiPositionX = 701;
// var cecilKarpinskiPositionY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countessHamiltonImg = loadImage("countessHamilton.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	linaLovelaceImg = loadImage("lina.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	rockyKrayObj = {
		x: 115,
		y: 309,
		image: rockyKrayImg
	};

	countessHamiltonObj = {
		x: 115,
		y: 40,
		image: countessHamiltonImg
	};

	annaKarpinskiObj = {
		x: 408,
		y: 40,
		image: annaKarpinskiImg

	};

	pawelKarpinskiObj = {
		x: 701,
		y: 40,
		image: pawelKarpinskiImg
	};

	linaLovelaceObj = {
		x: 408,
		y: 309,
		image: linaLovelaceImg
	};

	cecilKarpinskiObj = {
		x: 701,
		y: 309,
		image: cecilKarpinskiImg
	};



	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countessHamiltonObj.image, countessHamiltonObj.x, countessHamiltonObj.y);
	image(annaKarpinskiObj.image, annaKarpinskiObj.x, annaKarpinskiObj.y);
	image(pawelKarpinskiObj.image, pawelKarpinskiObj.x, pawelKarpinskiObj.y);
	image(rockyKrayObj.image, rockyKrayObj.x, rockyKrayObj.y);
	image(linaLovelaceObj.image, linaLovelaceObj.x, linaLovelaceObj.y);
	image(cecilKarpinskiObj.image, cecilKarpinskiObj.x, cecilKarpinskiObj.y);


}