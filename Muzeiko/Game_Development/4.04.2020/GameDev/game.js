let mX = 0, mY = 200;
let vragX = canvas.width, vragY = getRandomTo(400);

function draw() {
    drawImage('https://pngimage.net/wp-content/uploads/2018/06/platform-png-1.png',200,mY,300,100);
    for(let i = 0;i < 3;i++) {
        drawImage('https://atlas-content-cdn.pixelsquid.com/stock-images/golden-soccer-ball-3yLR9z1-600.jpg',vragX,vragY+(i*150),150,150)
    }
   
 
}

function update() {
    vragX = vragX - 1;

}

function keydown(key) {
    console.log(`Pressed key: ${key}`);
    if(key == 38) {
        mY=mY - 40;
    };
    if(key == 40) {
        mY = mY + 40;
    }
       
   
}

function keyup(key) {
    console.log(`Released key: ${key}`);
}