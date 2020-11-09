const Testing1 = require("./Testing1");
const { matrixCreator } = require("./Testing1");


/* const ar1 = [
        [1 , 2], 
        [3 , 4]
]
*/

/* const ar2 = [
         [5 , 6], 
         [7 , 8]
]
*/

// console.log(matrixMultiplyer(mat1, mat2));

const ar1 = Testing1.matrixCreator();
// const ar2 = Testing1.matrixCreator();
// console.log(matrixMultiplyer(ar1, ar2));
// console.log(matrixSum(ar1, ar2));
console.log(elementAdder(ar1));

function matrixMultiplyer(mat1 , mat2) {
    if(mat1.length != mat2[0].length || mat1[0].length != mat2.length){
        return(`The given matricies cannot be multiplied`);
    }
    else {
        const finalArray = [];
        for(let currRow = 0; currRow < mat1.length; currRow++) {            //currRow = The Number of Rows in the Matrix
            finalArray[currRow] = [];
            for(let currCol = 0; currCol < mat2[0].length; currCol++) {     //currCol = 
                let currElement = 0;
                for(let currIndex = 0; currIndex < mat1[0].length; currIndex++) {
                    currElement += mat1[currRow][currIndex] * mat2[currIndex][currCol] 
                }
                finalArray[currRow].push(currElement);
            }
        }
        return finalArray;
    }
}

function matrixSum(mat1, mat2) {
    const finalArray = [];
    let sum = 0;
    if(mat1[0].length !== mat2[0].length && mat1.length !== mat2.length) {
        return "Error Not possible!";
    }
    else {
        for(let currRow = 0; currRow < mat1.length; currRow++) {
            finalArray[currRow] = [];
            for(let currCol = 0; currCol < mat2[0].length; currCol++){
                sum = mat1[currRow][currCol] + mat2[currRow][currCol] 
                finalArray[currRow].push(sum);
            }
        } 
        return finalArray;

    }
}

function elementAdder(mat1) {
    const finalArray = [];
    
    for(let currRow = 0; currRow < mat1.length; currRow++) {
        let currSum = 0;
        for(let currCol = 0; currCol < mat1[currRow].length; currCol++) {
            currSum += mat1[currRow][currCol] 
        }
        finalArray.push(currSum);
    }
    return finalArray;
}
