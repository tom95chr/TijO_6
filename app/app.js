function findMax(array) {

    if (!isNaN(array[0]))
        max = array[0]
    else
        return false

    for(i = 1; i < array.length; i++)
        if (!isNaN(array[i])) {
            if (max < array[i])
                max = array[i]
        } else
            return false

    return max
}
module.exports = {
    findMax: findMax
};