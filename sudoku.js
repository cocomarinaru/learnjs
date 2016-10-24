function generateSudoku(divId) {


    var finished = false;
    var grid = new Array(9);

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (j == 0) {
                grid[i] = new Array(9);
            }
            grid[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        }
    }

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {

            var random = getRandomfromArray(grid[i][j]);
            updatePosibleValues(random, i, j, grid);
            grid[i][j] = random;

        }
    }

    var mainDiv = document.getElementById(divId);

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var newDiv = document.createElement('div')
            if (j == 0) {
                newDiv.className = 'grid-box clear';
            } else {
                newDiv.className = 'grid-box';
            }
            newDiv.innerHTML = grid[i][j];
            mainDiv.appendChild(newDiv);
        }
    }

}

function updatePosibleValues(number, row, column, grid) {

    //Update row
    for (var j = column + 1; j < 9; j++) {
        removeNumber(number, grid[row][j]);
    }

    //Update column
    for (var i = row + 1; i < 9; i++) {
        removeNumber(number, grid[i][column]);
    }
}

function removeNumber(number, array) {

    found = false;
    for (var i = 0; i < (array.length - 1); i++) {
        if (array[i] == number) {
            found = true;
        }
        if (found) {
            array[i] = array[i + 1];
        }
    }
    if (found) {
        array.pop();
    }
}

function isOk(number, grid, row, column) {

    //check line
    for (var j = 0; j < column; j++) {
        if (grid[row][j] == number) {
            return false;
        }
    }
    //check column
    for (var i = 0; i < row; i++) {
        if (grid[i][column] == number) {
            return false;
        }
    }

    //check small square
    return true;

}

function getRandomInt(start, stop) {
    return Math.floor(Math.random() * (stop - start)) + start;
}

function getRandomfromArray(possibleValues) {
    var random = getRandomInt(0, possibleValues.length);
    return possibleValues[random];
}