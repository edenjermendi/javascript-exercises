const removeFromArray = function(array, ...args) {
    for (let value of args) {
        let index = array.indexOf(value);
        while (array.indexOf(value) !== -1) {
        array.splice(array.indexOf(value), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
