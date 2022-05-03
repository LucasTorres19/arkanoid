import { CanvasView  } from "./canvasView";

export function setGameOver(view: CanvasView ,gameOver: boolean){
    view.drawInfo("😥");
    gameOver = false; // reiniciar la partida.

}

export function setGameWin(view: CanvasView,gameOver: boolean){
    view.drawInfo("🥳");
    gameOver = false; // reiniciar la partida.

}