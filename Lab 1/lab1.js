const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let total = 0
    for (var i = 0; i < arr.length; i++) {
        total += (Math.pow(arr[i],2));
    }
    return total
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    if (num < 2) {
        return num
    }
    else {
        return questionTwo(num-1) + questionTwo(num-2)
    }
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    const vowels = ["a", "e", "i", "o", "u", "A","E","I","O","U"];
    let counter = 0;

    for (const v of text) {
        if (v.match(/^[aeiou]$/i)) {
            counter ++;
        }
    }
    return counter;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if (num < 0) {
        return 'NaN'
    }
    else if (num == 0 || num == 1) {
        return '1';
    }

    else {
        return num*questionFour(num-1);
    }


}

module.exports = {
    firstName: "RUTHY", 
    lastName: "LEVI", 
    studentId: "10407526",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};