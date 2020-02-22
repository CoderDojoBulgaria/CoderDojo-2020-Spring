let mX = 0, mY = 0;

function draw() {
    drawImage('Images/spgirl-jun.jpg', 0, 0);
    // drawImage('path', mX, mY, 100, 100);

    context.fillStyle = 'green';
    context.fillRect(mX, mY, 40, 40);

    context.strokeStyle = 'red';
    context.scale(2, 2);
    context.strokeRect(mX, mY, 40, 40);
    context.scale(0.5, 0.5);

    context.font = '30px Arial';
    context.strokeText('Hello GameDev!', 100, 100);

    context.font = '30px Verdana';
    context.fillStyle = 'black';
    context.fillText('Hello GameDev!', 100, 200);
}

function update() {
}

function keydown(key) {
    console.log(`Pressed key: ${key}`);
}

function keyup(key) {
    console.log(`Released key: ${key}`);
}