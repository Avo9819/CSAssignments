

module.exports = {
    matrixMultiplyer: function (mat1 , mat2) {
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
    },

    matrixSum: function (mat1, mat2) {
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
    },

    elementAdder: function (mat1) {
        const finalArray = [];
        for(let currRow = 0; currRow < mat1.length; currRow++) {
            let currSum = 0;
            for(let currCol = 0; currCol < mat1[currRow].length; currCol++) {
                currSum += mat1[currRow][currCol] 
            }
            finalArray.push(currSum);
        }
        return finalArray;  
    },
}
