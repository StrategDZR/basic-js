module.exports = function countCats(arr) {
    let counter = 0;
    arr.forEach(item => {
        item.forEach(item2 => {
            if (item2 === '^^'){
                counter++;
            }
        })
    })
    return counter;
};
