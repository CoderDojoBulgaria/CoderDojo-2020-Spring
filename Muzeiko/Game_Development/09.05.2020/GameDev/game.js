let mX = 0, mY = 0

let hero = {
    img: 'Images/pusheen.png',
    x: 0,
    y: 0,
    width: 200,
    height: 199
};

let bomb = {
    img: 'Images/bomb.png',
    x: canvas.width,
    y: -250,
    width: 100,
    height: 100,
    speed: 5
}

function draw() {
    drawImage(hero.img, hero.x, hero.y, hero.width, hero.height);
    drawImage(bomb.img, bomb.x, bomb.y, bomb.width, bomb.height);
}

function update() {
    hero.x = mouseX;
    hero.y = mouseY;
    bomb.x += bomb.speed;
}

function keydown(key) {
    console.log(`Pressed key: ${key}`);
    if (key == 32) {
        if (bomb.x > canvas.width) {
            bomb.x = hero.x;
            bomb.y = hero.y;
            bomb.speed = 5;
        }
    }
}

function keyup(key) {
    console.log(`Released key: ${key}`);
}