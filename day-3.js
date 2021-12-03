const fs = require('fs');

fs.readFile('./input/day3.txt', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }

    let d = data.split('\n');
    
    console.log(part1(d));

});

function part1 (data) {

    const total = data.length;
    const ones = Array(data[0].length).fill(0);
    
    for (let i = 0; i < total; i++) {
        
        const str = data[i];
        
        for (let j = 0; j < str.length; j++) {
            const element = str[j];
            if (element === '1') ones[j]++
        }        
    }
    
    const common = ones.map(x => {
        let y = total - x;
        if ( x > y) {
            return 1;
        } else {
            return 0;
        }
    });

    const uncommon = common.map(x => {
        return Number(!x);
    });

    const gamma = common.join('');
    const gammaRate = parseInt(gamma, 2);
    const epsilon = uncommon.join('');
    const epsilonRate = parseInt(epsilon, 2);
    const powerConsumption = gammaRate * epsilonRate;
    
    return powerConsumption;
}
