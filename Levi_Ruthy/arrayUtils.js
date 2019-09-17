// head(array): Returns the first element of an array 

const errorMessage = "Either this array doesn't exist, it's not of the proper type, or it's empty";

const head = function head(array) {
    if (Array.isArray(array) && array.length > 0) {
        return array[0];
    }
    else throw errorMessage;
    
}

const last = function last(array) {
    if (Array.isArray(array) && array.length > 0) {
        return array[array.length-1];
    }
    else throw errorMessage;
    
}

const remove = function remove(array, index) {
    if (Array.isArray(array) && array.length < index && array.length > 0) {
        return array.splice(index,1);
    }
    else throw errorMessage;
    
}

const range = function range(end, value) {
    let newArray = [];
    if (typeof(end) == int && end.length > 0) {
        end = end.toString();
        for (let i = 0; i < end.length; i++) {
            newArray.push(i);
        }
        return newArray;
    }
    else throw errorMessage;
    
}

const countElements = function countElements(array) {
    if (Array.isArray(array)) {
            return new Set(array).size;
    }
    else throw errorMessage;
    
}

const isEqual = function isEqual(arrayOne, arrayTwo) { 
    if (Array.isArray(array)) {
        for (const i = 0; i < arrayOne.length; i++) {
            for (const j=0; j<arrayTwo.length; j++) {
                if (arrayOne[i] == arrayTwo[i]) {
                    return 'true'
                }
                return 'false'
            }
        }
    }
    else throw errorMessage;    
}

module.exports = {
    head: head, 
    last: last, 
    remove: remove, 
    range: range, 
    countElements: countElements, 
    isEqual: isEqual
}