const repeatString = function(word, repeatedTimes) {
    let container = "";
    if (repeatedTimes < 0) {
        return "ERROR"
    } else {
        for (i = 0; i < repeatedTimes; i++) {
        container += word;
        }
        return container;
    }
};

// Do not edit below this line
module.exports = repeatString;
