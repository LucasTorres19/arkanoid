import { Brick } from "~/objects/brick";

export function GenerateLevel(){
    
    let Level = [];

    const rows = Math.random() * (9 - 1) + 1;
    
    for (let i = 0; i < rows; i++) {
       
        for (let j = 0; j < 10; j++) {
            
            Level.push(Math.floor(Math.random() * (6 - 0) + 0));
        
        }
    }

    return Level;
}