
const reader = require("readline-sync")
const mat = require("./MatrixCreator");
const utilis = require("./utilis");

let choice = reader.questionInt("Please choose the one you want: \n 1.Matrix Multiplication \n 2.Matrix Sum \n 3.Sum of Arrays \n n = ")

if(choice === 1) {
    let matA = mat.matrixCreator();
    let matB = mat.matrixCreator();
    console.log(utilis.matrixMultiplyer(matA , matB));
    
}
else if (choice === 2) {
    let matA = mat.matrixCreator();
    let matB = mat.matrixCreator();
    console.log(utilis.matrixSum(matA , matB));
}
else if(choice === 3) {
    
    let matA = mat.matrixCreator();
    console.log(utilis.elementAdder(matA));
    console.log(utilis.elementAdder2(matA));
}