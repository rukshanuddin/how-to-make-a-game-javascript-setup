/** GLOBAL VARIABLES **/
const WIDTH = 800;
const HEIGHT = 600;
const animate = window

let canvas;
let ctx;
let frame = 0;

/** GAME SETUP **/
function setup(){
    // grab the canvas
    // use the canvas to setup our context
    // start a draw funciton
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    player = new Player((WIDTH / 2) - 10, (HEIGHT / 2) - 10);
    animate(draw)
}

function drar(){
    clearBackground();
    drawBackground();
    player.draw();

    animate.draw()
}
/** INITIALIZE GAME */

document.addEventListener('DOMContentLoaded', function(){
    setup();
})