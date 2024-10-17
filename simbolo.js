let speed = 75;
let scale = 0.40;
let canvas;
let ctx;
let dvdColor = '#FFF'; 

let dvd = {
    x: 200,
    y: 300,
    xspeed: 10,
    yspeed: 10,
    img: new Image()
};

(function main() {
    canvas = document.getElementById("screen");
    ctx = canvas.getContext("2d");
    dvd.img.src = 'LogoAle (1).png';

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    update();
})();

function update() {
    setTimeout(() => {
        ctx.fillStyle = '#FFF'; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);

        dvd.x += dvd.xspeed;
        dvd.y += dvd.yspeed;

        checkHit();
        update();
    }, speed);
}

function checkHit() {
    const imgWidth = dvd.img.width * scale;
    const imgHeight = dvd.img.height * scale;

    if (dvd.x + imgWidth >= canvas.width || dvd.x <= 0) {
        dvd.xspeed *= -1;
    }

    if (dvd.y + imgHeight >= canvas.height || dvd.y <= 0) {
        dvd.yspeed *= -1;
    }
}
