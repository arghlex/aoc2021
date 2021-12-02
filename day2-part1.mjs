import {input as rawInput} from "./input/day2.mjs";

const input = rawInput.map(e => {
    let r = e.split(" ");
    r[1] = parseInt(r[1], 10);
    return r;
});

const pos = {
    x: 0, // horizontal position
    y: 0  // depth
};

input.forEach((val,index,arr) => {
    if ( val[0] === 'forward' ) {
        pos.x = pos.x + val[1];
    }
    if ( val[0] === 'down' ) {
        pos.y = pos.y + val[1];
    } 
    if ( val[0] === 'up' ) {
        pos.y = pos.y - val[1];
    }
});

console.log(pos.x * pos.y);