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
import { Collision } from "./processes/collision";

//variables
let gameOver = false;
let score = 0;

//funciones

function startGame(view: CanvasView) {

    //reiniciar las variables.
    score = 0;
    gameOver = false;
    view.drawInfo("🤭");
    view.drawScore(0);
    let bricks:Brick[];

    //crear las colisiones.
    const colision = new Collision();

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

    //reiniciar el game loop.
    gameLoop(view,bricks,player,ball,colision);

}

function gameLoop(
 
    view:CanvasView,
    bricks:Brick[],
    player:Player,
    ball: Ball,
    colision: Collision

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
    //verificar colision.
    colision.BallCollision(ball,player,view);

    //verificar colicion con bloques para ganar puntos.
    const collidingBrick = colision.BallColisionBricks(ball,bricks);

    if(collidingBrick){
        score += 1;
        view.drawScore(score);
    }

     //verificar si la pelota se fue del mapa.
     if(ball.pos.y > view.canvas.height) gameOver = true;
    
     //verificar si se gana el juego.
    if(bricks.length === 0){
        return setGameWin(view,gameOver);
    }
    if(gameOver) {
        return setGameOver(view,gameOver);
    }

    requestAnimationFrame(()=> gameLoop(view,bricks,player,ball,colision));
}


//creando un nuevo juego.
const view = new CanvasView("#Field");
view.initStartButton(startGame);