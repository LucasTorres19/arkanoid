import { Vector } from '../types';
import { CanvasView  } from "../view/canvasView";

export class Player {

    private playerImage: HTMLImageElement = new Image();
    private moveLeft: boolean;
    private moveRight: boolean;

    constructor(
        private speed:number,
        private playerWidth:number,
        private playerHeight:number,
        private position: Vector,
        image: string

    ){
        this.speed = speed;
        this.playerHeight = playerHeight;
        this.playerWidth = playerWidth;
        this.position = position;
        this.playerImage.src = image;
        this.moveLeft = false;
        this.moveRight = false;

        document.addEventListener('keydown',this.handleKeyDown);
        document.addEventListener("keyup",this.handleKeyUp);
    }

    //mover al jugador.
    movePlayer():void{
        
        if(this.moveLeft){
            this.pos.x -=this.speed;
        }
        if(this.moveRight){
            this.pos.x += this.speed;
        }
    }

    handleKeyUp =(e:KeyboardEvent):void =>{

        if(e.code ==="ArrowLeft" || e.key ==="ArrowLeft"){
            this.moveLeft = false;
        }

        if(e.code ==="ArrowRight" || e.key ==="ArrowRight"){
            this.moveRight = false;
        }
    }

    handleKeyDown =(e:KeyboardEvent):void =>{

        if(e.code ==="ArrowLeft" || e.key ==="ArrowLeft"){
            this.moveLeft = true;
        }

        if(e.code ==="ArrowRight" || e.key ==="ArrowRight"){
            this.moveRight = true;
        }
    }
    
    mainMove(view: CanvasView ):void{

        if(
            (this.isMovingLeft && this.pos.x > 0) || (this.isMovingRight && this.pos.x < view.canvas.width - this.width)
        ){
            this.movePlayer();
        }
    }


    //getters
    get width(): number{
        return this.playerWidth;
    }
    
    get height(): number{
        return this.playerHeight;
    }

    get pos():Vector{
        return this.position;
    }

    get image(): HTMLImageElement{
        return this.playerImage;
    }

    get isMovingLeft():boolean{
        return this.moveLeft;
    }
    
    get isMovingRight():boolean{
        return this.moveRight;
    }

}