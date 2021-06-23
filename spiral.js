/**
 * The code draws ellipses on every time the draw() function is automatically called
 * There are total eight lines of ellipses that grow with each time the function is called
 */


let i = 0; // index variable that will be used to iterate the draw function

let flag = false; // Flag boolean variable that indicates if the ellipses should grow out or inwards(false means growing out)

let rIntA; // Random integer A that will contain random value for color of ellipse
let rIntB;  // Random integer B that will contain random value for color of ellipse

let size = 10   // Size of the ellipse that is also responsible for the pattern of the spiral(shifts between 10 and 20)


//This is the predefined setup function that is called once before start of each program
function setup() {

    createCanvas(1000, 1000); //Creates a canvas of 1000x1000 pixels

    frameRate(15);  //Speed of the spiral
    background(0);  //Black color of background

    rIntA = int(random(255)) //setting random value for color
    rIntB = int(random(100)) //setting random value for color
}

//This is the predefined draw function that keeps getting called indefinitely 
function draw() {

    noStroke(); // remove border of the ellipses
    fill(rIntA, 20 + i * 10 + rIntB, 245 - i * 10 + rIntB); // sets the color of ellipses using random variables and incrementing it gradually


    // If the flag is true this block of codes generates ellipses that grow inside
    if (flag) {

        // Eight lines of ellipses that grow inwards gradually everytime
        ellipse(500 + (i) * (size), 500 - (i * (size - i)), size);
        ellipse(500 - (i) * (size), 500 + (i * (size - i)), size);
        ellipse(500 - (i * (size - i)), 500 - (i) * (size), size);
        ellipse(500 + (i * (size - i)), 500 + (i) * (size), size);

        ellipse(500 + (i * ((size * 2) - i)), 500 - (i * (0 - i)), size);
        ellipse(500 - (i * ((size * 2) - i)), 500 + (i * (0 - i)), size);
        ellipse(500 + (i * (0 - i)), 500 + (i * ((size * 2) - i)), size);
        ellipse(500 - (i * (0 - i)), 500 - (i * ((size * 2) - i)), size);

        // Index that decreases with every time draw is called
        i--;
        console.log("flag true", i)
    }
    
    // If the flag is false this block of codes generates ellipses that grow outside
    else {

        // Eight lines of ellipses that grow outwards gradually everytime 
        ellipse(500 + (i) * (size), 500 + (i * (size - i)), size);
        ellipse(500 - (i) * (size), 500 - (i * (size - i)), size);
        ellipse(500 - (i * (size - i)), 500 + (i) * (size), size);
        ellipse(500 + (i * (size - i)), 500 - (i) * (size), size);

        ellipse(500 + (i * ((size * 2) - i)), 500 + (i * (0 - i)), size);
        ellipse(500 - (i * ((size * 2) - i)), 500 - (i * (0 - i)), size);
        ellipse(500 - (i * (0 - i)), 500 + (i * ((size * 2) - i)), size);
        ellipse(500 + (i * (0 - i)), 500 - (i * ((size * 2) - i)), size);

        // Index that increases with every time draw is called
        i++;
        console.log("flag false", i)

    }

    // This block of code shifts the flag variable everytime the index reaches 20 or 0 
    if (i == 20 || i == 0)
        flag = !flag;

    // Everytime the spiral is completed this code is called that resets the display and shifts the size
    if (i == 0) {
        background(0);
        rIntA = int(random(255))
        rIntB = int(random(100))
        if (size == 10)
            size = 20
        else
            size = 10
    }
}
