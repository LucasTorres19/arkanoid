import { Vector } from '../types';

export class Ball {

    private speed: Vector;
    private BallImage: HTMLImageElement = new Image();

    constructor(
        speed: number,
        private ballSize:number,
        private position:Vector,
        image: string
    ){

        this.ballSize = ballSize;
        this.position = position;
        this.speed = {
            x:speed,
            y:speed
        };
        this.BallImage.src = image;
    }

    changeYdir():void{
        this.speed.y = -this.speed.y;
    }

    changeXdir():void{
        this.speed.x = -this.speed.x;
    }

    moveBall():void{
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
    }

    //getters
    get width():number{
        return this.ballSize;
    }

    get height():number{
        return this.ballSize;
    }

    get pos():Vector{
        return this.position;
    }
    
    get image(): HTMLImageElement{
        return this.BallImage;
    }
}