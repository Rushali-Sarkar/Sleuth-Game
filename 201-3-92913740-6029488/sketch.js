/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 6029488
CaseNum: 201-3-92913740-6029488

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


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
    beginShape();
    vertex(402, 61);
    vertex(454, 33);
    vertex(528, 50);
    vertex(512, 254);
    vertex(490, 348);
    vertex(577, 349);
    vertex(620, 353);
    vertex(654, 369);
    vertex(656, 388);
    vertex(631, 401);
    vertex(586, 384);
    vertex(513, 413);
    vertex(499, 439);
    vertex(448, 450);
    vertex(392, 422);
    vertex(357, 395);
    vertex(350, 362);
    vertex(322, 383);
    vertex(303, 401);
    vertex(286, 378);
    vertex(322, 309);
    vertex(368, 317);
    vertex(380, 233);
    vertex(376, 145);
    vertex(383, 103);
    vertex(402, 61);
    endShape();

}
