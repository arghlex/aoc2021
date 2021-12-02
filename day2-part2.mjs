import {input as rawInput} from "./input/day2.mjs";

const input = rawInput.map(e => {
    let r = e.split(" ");
    r[1] = parseInt(r[1], 10);
    return r;
});

const pos = {
    x: 0, // horizontal position
    y: 0, // depth
    z: 0  // aim
};

input.forEach((val,index,arr) => {
    if ( val[0] === 'forward' ) {
        pos.x = pos.x + val[1];
        pos.y = pos.y + (pos.z * val[1]); 
    }
    if ( val[0] === 'down' ) {
        pos.z = pos.z + val[1];
    } 
    if ( val[0] === 'up' ) {
        pos.z = pos.z - val[1];
    }
});

console.log(pos.x * pos.y);