const removeFromArray = function(arr, ...toRemove) {
    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = 0; j < toRemove.length; j++) {
            if (arr[i] === toRemove[j]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
