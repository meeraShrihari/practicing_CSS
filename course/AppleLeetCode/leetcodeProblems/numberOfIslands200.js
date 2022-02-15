
var markTheCurrentIsland = function(grid, i, j, rows, cols) {
    if(i<0 || i>=rows || j<0 || j>=cols || grid[i][j] !== '1') return;
    grid[i][j] = '2';

    markTheCurrentIsland(grid, i-1, j, rows, cols); //Top
    markTheCurrentIsland(grid, i, j+1, rows, cols); //Right
    markTheCurrentIsland(grid, i+1, j, rows, cols); //Down
    markTheCurrentIsland(grid, i, j-1, rows, cols); //Left
}

var numIslands = function(grid) {
    var rows = grid.length;
    if(rows === 0) return 0;
    var cols = grid[0].length;
    var numOfIslands = 0;

    for(var i=0; i<rows; i++) {
        for(var j=0; j<cols; j++) {
            if(grid[i][j] === '1') {
                markTheCurrentIsland(grid, i, j, rows, cols);
                numOfIslands += 1;
            }
        }
    }
    console.log(numOfIslands);
}

numIslands(
    [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","1"],
        ["0","0","1","0","1"]
    ]
);