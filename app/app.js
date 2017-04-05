
function findMin(array)
{
var min = array[0];
for(i=0;i<array.length;i++){
    if(typeof(array[i]!="number")){
        return false;
    }
}
for (i=0;i<array.length[0];i++){
    if(min<array[i]){
        min = array[i]
    }
}

}
module.exports = {
    findMin: findMin
};
