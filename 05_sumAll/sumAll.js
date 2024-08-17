const sumAll = function(number1, number2) { // 1, 4
    if (number1 < 0 || number2 < 0){
        return "ERROR"
    }
    intCheckNum1 = Number.isInteger(number1)
    intCheckNum2 = Number.isInteger(number2)
    if (intCheckNum1 == false || intCheckNum2 == false) {
    return "ERROR"
    } else {
        let arr = Array.from(arguments);
        let sortedArgs = arr.sort();
        let sum = 0;
        for (i = sortedArgs[0]; i <= sortedArgs[1]; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;


