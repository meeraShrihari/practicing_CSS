/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    var solution = [];
    
    var generateCombo = function(leftPCount, rightPCount, partial) {
        if(leftPCount > rightPCount) return;
        if(!leftPCount && !rightPCount) solution.push(partial);
        
        if(leftPCount > 0) generateCombo(leftPCount-1, rightPCount, partial+'(');
        if(rightPCount > 0) generateCombo(leftPCount, rightPCount-1, partial+')');
    }
    
    generateCombo(n, n, '');
    return solution;
};

console.log(generateParenthesis(3));