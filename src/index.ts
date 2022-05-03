//importar clases
import { CanvasView  } from "./view/canvasView";
import { Ball } from "./objects/ball";
import { Brick } from "./objects/brick";
import { Player } from "./objects/player";

//importar imagenes
import PLAYER_IMAGE from "assets/images/player.png";
import BALL_IMAGE from "assets/images/pelota.png";

//importar configuraciones
import{
 
 PLAYER_WIDTH,
 PLAYER_HEIGHT,
 PLAYER_STARTX,
 PLAYER_SPEED,
 BALL_SPEED,
 BALL_SIZE,
 BALL_STARTX,
 BALL_STARTY

} from "setup";

import {setGameOver , setGameWin } from "./view/setGame";
import { createBricks } from "./processes/BricksGridCreator";


//variables
let gameOver = false;
let score = 0;


function gameLoop(
 
    view:CanvasView,
    bricks:Brick[],
    // player:Player,
    // ball: Ball,

){  
    //limpiar el canvas.
    view.clear();
    view.drawBricks(bricks);

    requestAnimationFrame(()=> gameLoop(view,bricks))
}

function startGame(view: CanvasView) {

    //reiniciar las variables.
    score = 0;
    view.drawInfo("🤭");
    view.drawScore(0);

    //crear todo los ladrillos.

    const bricks = createBricks();

    gameLoop(view,bricks);

}

//creando un nuevo juego.
const view = new CanvasView("#Field");
view.initStartButton(startGame);