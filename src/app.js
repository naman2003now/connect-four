import Renderer from "./Renderer.js";

var gridHeight = 6;
var gridWidth = 7;
var canvas = document.getElementById("root");
var mediaControls = document.getElementById("mediaControls");
var element = "";
for (let i = 0; i < gridHeight; i++) {
    for (let j = 0; j < gridWidth; j++) {
        element +=
            '<div class="cell"><div class="coin" id="' +
            j +
            "," +
            i +
            '"></div></div>';
    }
}

document.body.style.setProperty("--grid-height", gridHeight);
document.body.style.setProperty("--grid-width", gridWidth);

document.getElementById("container").innerHTML = element;

var renderer = new Renderer();
var gameState = "";

var updateFrameBuffers = () => {
    let canvasWidth = (gridWidth * window.innerHeight) / gridHeight;
    let canvasHeight = window.innerHeight;
    if (canvasWidth > window.innerWidth) {
        canvasWidth = window.innerWidth;
        canvasHeight = (gridHeight * window.innerWidth) / gridWidth;
    }

    if (window.innerHeight < window.innerWidth * 1.1) {
        canvasWidth *= 0.8;
        canvasHeight *= 0.8;
    }

    canvas.style.width = canvasWidth + "px";
    canvas.style.height = canvasHeight + "px";

    mediaControls.style.width = canvasWidth * 0.9 + "px";

    renderer.gridHeight = gridHeight;
    renderer.gridWidth = gridWidth;
    renderer.canvasWidth = canvasWidth;
    renderer.canvasHeight = canvasHeight;

    renderer.draw(gameState);
};

window.onresize = updateFrameBuffers;
updateFrameBuffers();

//On Hover
canvas.addEventListener(
    "mousemove",
    (event) => {
        let x = Math.floor(
            (gridWidth *
                (event.clientX - canvas.getBoundingClientRect().left)) /
                canvas.clientWidth
        );
        renderer.hover(gameState, x);
    },
    false
);

//On Click
canvas.onclick = (event) => {
    let x = Math.floor(
        (gridWidth * (event.clientX - canvas.getBoundingClientRect().left)) /
            canvas.clientWidth
    );
    gameState += x;
    renderer.draw(gameState);
};
