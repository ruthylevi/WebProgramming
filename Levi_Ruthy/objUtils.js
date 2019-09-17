const extend = function extend(...args) {
    if (typeof args !== 'object' && typeof args!=='undefined' && args.length > 2) {
        return Object.assign(args);  
    }
    else throw 'Error! Please enter an object and make sure it is not undefined. Input must also have at least two arguments.';
    
}

const smush = function smush(...args) {
    if (typeof args !== 'object' && typeof args!== 'undefined' && args.length > 2) {
        return _.extend(args);  
    }
    else throw 'Error! Please enter an object and make sure it is not undefined. Input must also have at least two arguments.';    
}

const mapValues = function mapValues(obj, func) {
    if (typeof obj ==='undefined' || typeof func === 'undefined') {
        throw 'Error! Cannot have any inputs as undefined.'
    } else if (typeof obj !== 'object' || typeof func !== 'function') {
        throw 'Error! Enter an object as the first parameter, and a function as the second.'
    } else {
        const result = {};
        let objKey;
        for (objKey in obj) {
            result[objKey] = func(obj[objKey]);
        }
        return result;
    }
}

module.exports = {
    extend: extend, 
    smush: smush, 
    mapValues: mapValues
}