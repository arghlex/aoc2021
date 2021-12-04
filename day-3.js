const fs = require('fs');

fs.readFile('./input/day3.txt', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }

    let d = data.split('\n');
    
    console.log(part2(d));

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

// ----------------------------

function getOccurence(data, type) {

    const total = data.length;
    const items = Array(data[0].length).fill(0);
    
    for (let i = 0; i < total; i++) {
        
        const str = data[i];
        
        for (let j = 0; j < str.length; j++) {
            const element = str[j];
            if (element === '1') items[j]++
        }        
    }
    
    const occurence = items.map(x => {
        let y = total - x;
        if (type === 'common') {
            if ( x >= y ) {
                return 1;
            } else {
                return 0;
            }
        }
        if (type === 'uncommon') {
            if ( x >= y ) {
                return 0;
            } else {
                return 1;
            }
        }
    });

    return occurence;
}


function part2 (data) {

    const lifeSupportRating = getO2GenRating(data) * getCO2ScrubRating(data);

    return lifeSupportRating;

}

function getO2GenRating (data) {
    let tmp = data;
    let count = 0;

    while (tmp.length > 1) {
        
        let mc = getOccurence(tmp, 'common');
        // console.log(mc);
        let mcCurrent = mc[count];

        tmp = tmp.filter(val => {

            const myStr = val.charAt(count);

            return (parseInt(myStr, 10) === mcCurrent);
        });
        // console.log(tmp);
        count++;
    }

    return (parseInt(tmp[0], 2));
}

function getCO2ScrubRating (data) {
    let tmp = data;
    let count = 0;

    while (tmp.length > 1) {
        
        let mc = getOccurence(tmp, 'uncommon');
        // console.log(mc);
        let mcCurrent = mc[count];

        tmp = tmp.filter(val => {

            const myStr = val.charAt(count);

            return (parseInt(myStr, 10) === mcCurrent);
        });
        // console.log(tmp);
        count++;
    }
    return (parseInt(tmp[0], 2));
}