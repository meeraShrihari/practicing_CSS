const decodeString = (s) => { //13[a2[c]]
    let solution = '';
    let multiply = [];
    let tempMult = ''; //numbers can be more than 1 digit
    let repeatStr = [];
    for(let char of s) {
        if(!isNaN(char)) tempMult = `${tempMult}${char}`; //2
        else if(char === '[') {
            multiply.push(tempMult); //[13]
            tempMult = '';
            repeatStr.push(solution); //['']
            solution = '';
        } else if(char === ']') {
            solution = repeatStr.pop() + solution.repeat(multiply.pop()); //acc
        } else {
            solution += char; //'c'
        }
    }
    return solution;
};

console.log(decodeString("13[a2[c]]"));