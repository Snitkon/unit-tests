function zip(...arr) {
    const newArr = []
    arr.forEach((item) => {
        for(let i = 0; i < item.length; i++) {
            if(newArr[i]) {
                newArr[i].push(item[i])
            } else {
                newArr.push([item[i]])
            }
        }
    })
    return newArr
}

module.exports = zip