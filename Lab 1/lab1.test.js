const lab1 = require("./lab1");

console.log(lab1.questionOne([1, 2, 3])); 
// should output 14

console.log(lab1.questionOne([5, 1, 0])); 
// should output 26

console.log(lab1.questionOne([-5, 10, 3])); 
// should output 134

console.log(lab1.questionOne([20, 2, 1])); 
// should output 405

console.log(lab1.questionOne([0, 0, 0])); 
// should output 0

console.log(lab1.questionTwo(7)); 
// should output 13 

console.log(lab1.questionTwo(0)); 
// should output 0

console.log(lab1.questionTwo(1)); 
// should output 1

console.log(lab1.questionTwo(9)); 
// should output 34 

console.log(lab1.questionTwo(10)); 
// should output 55 

console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere.")); 
// should output 196

console.log(lab1.questionThree("hello")); 
// should output 2

console.log(lab1.questionThree("According to all known laws of aviation, there is no way a bee should be able to fly.")); 
// should output 27

console.log(lab1.questionThree("this dog is a good dog"));
// should output 7

console.log(lab1.questionThree("When I was a young boy my father took me into the city to see a marching band")); 
// should output 23

console.log(lab1.questionFour(10)); 
// should output 3628800 

console.log(lab1.questionFour(0)); 
// should output 1

console.log(lab1.questionFour(4)); 
// should output 24

console.log(lab1.questionFour(-2));
// should output NaN

console.log(lab1.questionFour(5));
// should output 120 
