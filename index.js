const imginput = document.querySelector("#imginput");
const toptext = document.querySelector("#toptext");
const bottomtext = document.querySelector("#bottomtext");
const canvas = document.querySelector("#meme");

function updateMeme(canvas, img, top, bottom) {
    const ctx = canvas.getContext("2d");
    const width = img.width; 
    const height = img.height; 
    const fontSize = Math.floor(width / 20); 
    const offset = Math.floor(height / 25);

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0); 

    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 4); 
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px sans-serif`;

    ctx.textBaseline = "top";
    ctx.strokeText(top, width / 2, offset);
    ctx.fillText(top, width/2, offset);

    ctx.textBaseline = "bottom";
    ctx.strokeText(bottom, width / 2, height-offset);
    ctx.fillText(bottom, width/2, height-offset);
}

let image;
imginput.addEventListener("change", () => {
    const imgurl = URL.createObjectURL(imginput.files[0]);
    image = new Image();
    image.src = imgurl;

    image.addEventListener("load", () => {
        updateMeme(canvas, image, toptext.value, bottomtext.value);
    }, { once: true });
});
