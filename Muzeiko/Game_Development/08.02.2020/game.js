let x = 0;

function draw() {
    context.fillRect(x, 0, 50, 50);
}

function update() {
    x = x + 1;
}

function keydown(key) {
    console.log(key);
}