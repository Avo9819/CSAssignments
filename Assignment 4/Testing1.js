

const reader = require("readline-sync");



module.exports = {    
    matrixCreator: function() {
        rowsNumber = reader.questionInt("What is the number of rows in your matrix? rows = " );
        colsNumber = reader.questionInt("What is the number of cols in your matrix? cols = ");
        const array = [];
        for(let currRow = 0; currRow < rowsNumber; currRow++){
            const row = []
            for(let currCol = 0; currCol < colsNumber; currCol++){
                let number = reader.questionInt(`Please insert the number at [${currRow}][${currCol}]: `)
                row.push(number);
            }
            array.push(row)
        }
        return array
    }

}
