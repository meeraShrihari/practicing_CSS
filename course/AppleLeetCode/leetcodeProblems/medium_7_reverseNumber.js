
function reverseNumber(num) {
    if(num < 0) return -1 * reverseNumber(-num);
    const solution = (num+"").split('').reverse().join('');
    console.log(typeof(solution));
    return (solution > 2**31 -1) ? 0 : solution;
}

console.log(reverseNumber(-123));