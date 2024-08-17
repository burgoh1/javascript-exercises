const leapYears = function(year) {
    let answer = true;
    const condition1 = year % 400 === 0;
    const condition2 = year % 100 === 0;
    const condition3 = year % 4 === 0;

    if (!condition1) {
        answer = false;
    }
    if (!condition2) {
        answer = true;
    }
    if (!condition3) {
        answer = false;
    }
    return answer;
};
// Do not edit below this line
module.exports = leapYears;





    
