import { Brick } from 'objects/brick';
import { Ball } from 'objects/ball';
import { Player } from 'objects/player';

export class CanvasView {

    canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private scoreDisplay: HTMLObjectElement | null;
    private start: HTMLObjectElement | null;
    private info: HTMLObjectElement | null;

    constructor(canvasName:string){

        this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#score') as HTMLObjectElement;
        this.start = document.querySelector('#start') as HTMLObjectElement;
        this.info = document.querySelector('#info') as HTMLObjectElement;
    }

    //limpiar el canvas.
    clear():void{

        this.context?.clearRect(0,0,this.canvas.width,this.canvas.height);
    
    }

    //iniciar el juego.
    initStartButton(startFunction:(view:CanvasView) => void) :void {

        this.start?.addEventListener('click',() => startFunction(this));

    }
    //mostrar el score.
    drawScore(score:number):void{

        if(this.scoreDisplay){
            this.scoreDisplay.innerHTML = score.toString();
        }
    }

    //mostrar la info de la partida.
    drawInfo(text:string):void{

        if(this.info){
            this.info.innerHTML = text;
        }
    }

    //dibujar objetos.
    drawObject(object: Brick | Player | Ball ): void{

        if(!object) return;

        this.context?.drawImage(
            
            object.image,
            object.pos.x,
            object.pos.y,
            object.width,
            object.height

        )
    }

    //dibujar todos los ladrillos.
    drawBricks(bricks: Brick[] ):void{

        bricks.forEach(brick => this.drawObject(brick));
    }
}