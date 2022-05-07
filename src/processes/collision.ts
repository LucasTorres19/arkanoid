import { Brick } from "~/objects/brick";
import { Player } from "~/objects/player";
import { Ball } from "~/objects/ball";
import { CanvasView } from "~/view/canvasView";;

export class Collision{

    BallCollision(ball: Ball, player: Player, canvasView: CanvasView):void{

        //verificar colision de la pelota con el jugador.
        if(ball.pos.x + ball.width > player.pos.x &&
           ball.pos.x < player.pos.x + player.width &&
           ball.pos.y + ball.height === player.pos.y
        ){
            ball.changeYdir();
        }

        //verificar colicion de la pelota con las paredes.
        if(ball.pos.x > canvasView.canvas.width - ball.width || ball.pos.x < 0){
            ball.changeXdir();
        }
        if(ball.pos.y < 0 + ball.height){
            ball.changeYdir();
        }
    
    }
     
    BallColisionBrick(ball:Ball,brick:Brick):Boolean{
        if(
            ball.pos.x <brick.pos.x + brick.width &&
            ball.pos.x + ball.width >  brick.pos.x &&
            ball.pos.y < brick.pos.y + brick.height &&
            ball.pos.y + ball.height > brick.pos.y
        ){
            return true;
        }
        else{
            return false;
        }
    }

    BallColisionBricks(ball: Ball,bricks: Brick[]):boolean{

        let colliding = false;

        bricks.forEach((brick,i) =>{
            if(this.BallColisionBrick(ball,brick)){
                
                ball.changeYdir();

                if(brick.energy === 1){
                    bricks.splice(i,1);
                }
                else{
                    brick.energy -= 1;
                }

                colliding = true;
            }
        })

        return colliding;
    }


}