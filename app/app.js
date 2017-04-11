function findMin(array) {
    if(array.length === 0) {
        return false;
    }
    var minimum = array[0];
    for(var i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            return false;
        }
        if(minimum > array[i]) {
            minimum = array[i];
        }
    }
    return minimum;
}

module.exports = {
    findMin: findMin
};