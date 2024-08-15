const removeFromArray = function(arr, ...items) {
    for (i = 0; i < items.length; i++) {
        let index = arr.indexOf(items[i]);
        while (index !== -1) {
            arr.splice(index, 1);
            index = arr.indexOf(items[i]);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;


