import RED_BRICK_IM from './assets/images/rojo.png';
import GREEN_BRICK_IM from './assets/images/verde.png';
import VIOLET_BRICK_IM from './assets/images/violeta.png';
import YELLOW_BRICK_IM from './assets/images/amarillo.png';
import LIGHTBLUE_BRICK_IM from './assets/images/celeste.png';;

const canvas: HTMLCanvasElement | null = document.querySelector('#Field');

export const STAGE_PADDING = 10;
export const STAGE_ROWS = 20;
export const STAGE_COLS = 10;
export const BRICK_PADDING = 5;

export const BRICK_WIDTH = canvas
  ? Math.floor((canvas.width - STAGE_PADDING * 2) / STAGE_COLS) - BRICK_PADDING
  : 100;

  export const BRICK_HEIGHT = canvas
  ? Math.floor((canvas.height - STAGE_PADDING * 2) / STAGE_ROWS) - BRICK_PADDING
  : 30;

export const PLAYER_WIDTH = 30;
export const PLAYER_HEIGHT = 5;

export const PLAYER_STARTX = 
canvas ? (canvas.width  + (PLAYER_WIDTH / 2)) / 2.5
: 300;
export const PLAYER_SPEED = 2;
export const BALL_SPEED = 1;
export const BALL_SIZE = 6;
export const BALL_STARTX = 100;
export const BALL_STARTY = 100;


export const BRICK_IMAGES:{[key:number]:string} = {

    1: RED_BRICK_IM,
    2: GREEN_BRICK_IM,
    3: YELLOW_BRICK_IM,
    4: LIGHTBLUE_BRICK_IM,
    5: VIOLET_BRICK_IM,

}

export const BRICK_ENERGY: { [key: number]: number } = {
    1: 1, 
    2: 1,  
    3: 2,
    4: 3,  
    5: 4 

  };

// export const LEVEL = [

//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
//     0, 2, 2, 2, 2, 2, 2, 2, 2, 0,
//     0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
//     0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 
//     0, 0, 5, 5, 0, 0, 5, 5, 0, 0,
    
// ];


