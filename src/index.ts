//importar clases
import { CanvasView  } from "./view/canvasView";
import { Ball } from "./objects/ball";
import { Brick } from "./objects/brick";
import { Player } from "./objects/player";

//importar imagenes
import PLAYER_IMAGE from "./assets/images/player.png";
import BALL_IMAGE from "./assets/images/pelota.png";

//importar configuraciones
import{
 
 PLAYER_WIDTH,PLAYER_HEIGHT,PLAYER_STARTX,PLAYER_SPEED,
 BALL_SPEED,BALL_SIZE,BALL_STARTX,BALL_STARTY

} from "./setup";

import {setGameOver , setGameWin } from "./view/setGame";
import { createBricks } from "./processes/BricksGridCreator";

//variables
let gameOver = false;
let score = 0;

//funciones

function startGame(view: CanvasView) {

    //reiniciar las variables.
    score = 0;
    view.drawInfo("🤭");
    view.drawScore(0);
    let bricks:Brick[];
    
    //crear todo los ladrillos.
    bricks = createBricks();
    
    //crear el jugador.
    const player = new Player(
        PLAYER_SPEED,
        PLAYER_WIDTH,
        PLAYER_HEIGHT,
        {   
            x: PLAYER_STARTX,
            y: view.canvas.height - PLAYER_HEIGHT- 5
        },
        PLAYER_IMAGE
    )

    //crear la pelota.
    const ball = new Ball(
        BALL_SPEED,
        BALL_SIZE,
        {
            x:BALL_STARTX,
            y:BALL_STARTY,
        },
        BALL_IMAGE
    );
    
    gameLoop(view,bricks,player,ball);

}

function gameLoop(
 
    view:CanvasView,
    bricks:Brick[],
    player:Player,
    ball: Ball,

){  
    //limpiar el canvas.
    view.clear();
   
    //dibujar los objetos.
    view.drawBricks(bricks);
    view.drawObject(player);
    view.drawObject(ball);

    //mover al jugador.
    player.mainMove(view);
    //mover pelota.
    ball.moveBall();

    requestAnimationFrame(()=> gameLoop(view,bricks,player,ball));
}


//creando un nuevo juego.
const view = new CanvasView("#Field");
view.initStartButton(startGame);