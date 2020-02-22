let mainX = 200;
let mainY = 200;

function draw() {
    drawImage('https://static.posters.cz/image/750/%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/hello-kitty-ballerina-i15597.jpg', mainX, mainY, 100, 200);
}

function update() {
    mainY = mainY + 1;
    if (mainY > canvas.height) {
        mainY = 200;
        mainX = mainX + 100;
    }
    if (mainX > canvas.width) {
        mainX = 200;
    }
}

function keydown(key) {
    console.log(key);
}