let mX = canvas.width / 2 - 50;
let mY = canvas.height - 150;
let patronX = [];
let patronY = [],
    brPatroni = 0,
    i;

function draw() {
    drawImage("https://static.baubau.bg/resources/lisica.jpg", mX, mY, 100, 150);
    for (i = 0; i < brPatroni; i++) {
        drawImage("https://www.get.bg/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95//D/I/DIM_55.jpg", patronX[i], patronY[i], 50, 50);
    }

}

function update() {
    for (i = 0; i < brPatroni; i++) {
        patronY[i] = patronY[i] - 6;
    }
}


function keydown(key) {
    if (key == 39) {
        mX = mX + 10;
    }
    if (key == 37) {
        mX = mX - 10;
    }
    if (key == 32) {
        patronX[brPatroni] = mX;
        patronY[brPatroni] = mY;
        brPatroni++;
    }
    console.log(`Pressed key: ${key}`);

}

function keyup(key) {
    console.log(`Released key: ${key}`);
}