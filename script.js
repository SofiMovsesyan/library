
let imgSun;
let angleSun = 0;

let imageMercury;
let imageVenus;
let imgEarth;
let imgMars; 
let imgJupiter; 
let imgSaturn; 
let imgUranus; 
let imgNeptune; 


let angleMercury = 0;
let angleVenus= 0;
let angleEarth = 0;
let angleMars = 0;
let angleJupiter = 0;
let angleSaturn = 0;
let angleUranus = 0;
let angleNeptune = 0;

//preload, loadImage, resize, noFill,  ellipse, translate, imageMode, ellipseMode, image, push, pull, rotate, radians

function preload() {
    imgSun = loadImage('./images/sun.png');

    imgMercury = loadImage('./images/mercury.png');
    imgVenus = loadImage('./images/venus.png');
    imgEarth = loadImage('./images/earth.png');
    imgMars = loadImage('./images/mars.png');
    imgJupiter = loadImage('./images/jupiter.png');
    imgSaturn = loadImage('./images/saturn.png');
    imgUranus = loadImage('./images/uranus.png');
    imgNeptune = loadImage('./images/neptune.png');
}

function setup() {
    createCanvas(window.innerWidth - 25, window.innerHeight - 20);
    imgSun.resize(100, 100);

    imgMercury.resize(30, 30);
    imgVenus.resize(40, 40);
    imgEarth.resize(50, 50);
    imgMars.resize(60, 60);
    imgJupiter.resize(80, 80);
    imgSaturn.resize(70, 70);
    imgUranus.resize(60, 60);
    imgNeptune.resize(50, 50);
}

function strokeForEarth(w, h) {
    noFill();
    stroke(255); 
    ellipse(0, 0, w, h);
}

function draw() {
    background("black");

    translate(width / 2, height / 2);
    
    
    // rotate(radians(angleSun));
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(imgSun, 0, 0);

    strokeForEarth(150, 150)
    strokeForEarth(260, 260)
    strokeForEarth(370, 370)
    strokeForEarth(480, 480)
    strokeForEarth(590, 590)
    strokeForEarth(700, 700)
    strokeForEarth(810, 810)
    strokeForEarth(920, 920)

    push()
    rotate(radians(angleSun / 2));
    translate(50, 50);
    rotate(radians(angleMercury));
    image(imgMercury, 0, 0);
    pop()

    push()
    rotate(radians(angleSun / 3));
    translate(90, 90); 
    rotate(radians(angleVenus));
    image(imgVenus, 0, 0);
    pop()

    push()
    rotate(radians(angleSun / 4));
    translate(130, 130); 
    rotate(radians(angleEarth));
    image(imgEarth, 0, 0);
    pop()

    push()
    rotate(radians(angleSun / 5));
    translate(170, 170); 
    rotate(radians(angleMars));
    image(imgMars, 0, 0);
    pop()

    push()
    rotate(radians(angleSun / 7));
    translate(210, 210); 
    rotate(radians(angleJupiter));
    image(imgJupiter, 0, 0);
    pop()

    push()
    rotate(radians(angleSun / 3));
    translate(250, 250); 
    rotate(radians(angleSaturn));
    image(imgSaturn, 0, 0);
    pop()
 
    push()
    rotate(radians(angleSun * 0.3));
    translate(290, 290); 
    rotate(radians(angleUranus));
    image(imgUranus, 0, 0);
    pop()

    push()
    rotate(radians(angleSun * 0.5));
    translate(330, 330); 
    rotate(radians(angleNeptune));
    image(imgNeptune, 0, 0);
    pop()



    angleSun += 4;

    angleMercury += 2.2;
    angleVenus += 1.9;
    angleEarth += 1.6;
    angleMars += 1.3;
    angleJupiter += 1;
    angleSaturn += 1.7;
    angleUranus += 2.4;
    angleNeptune += 3.1;
}

