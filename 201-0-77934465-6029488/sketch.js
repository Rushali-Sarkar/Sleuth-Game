/*
201 - The case of Judge Hopper:
Stage 1 - Department of Justice

Officer: 6029488
CaseNum: 201-0-77934465-6029488

Judge Hopper has gone missing and we’ve been booked to investigate. This is the big time kid. Now I need you to head over to Hopper’s office at the Department of Justice and gather clues.

Draw a separate ellipse around 4 pieces of evidence:
Letter opener,
Death threat letters,
telephone,
and the AGOL leaflet

Each ellipse should cover the entire object whilst keeping as close to the edges as possible. You will need to use different values for the width and height arguments.


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();
    ellipse(420, 295, 60, 130);
    ellipse(250, 230, 120, 130);
    ellipse(270, 360, 200, 123);
    ellipse(570, 250, 100, 150);

}
