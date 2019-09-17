const capitalize = function capitalize(string) {
    if (typeof string === 'string') {
        return string[0].toUpperCase() + string.slice(1);
    }
    else throw console.error();
}

const repeatString = function repeatString(string,num) { //renamed repeat to repeatString so can use built in repeat method
    if (typeof string === 'string' && num > 0) {
        return string.repeat(num);
    }
    else throw console.error();

}

const countChars = function countChars(string) {
    let charMap = {}; //object
    if (typeof string === 'string') {
        for (let i=0; i<string.length;i++) {
            let char = string[i];
        if (charMap[char]) {
           charMap[char]++;
        } else {
           charMap[char] = 1;
        }
        return charMap;
    }
}
    else throw console.error();
}

module.exports = {
capitalize: capitalize, 
repeatString: repeatString, 
countChars: countChars
}