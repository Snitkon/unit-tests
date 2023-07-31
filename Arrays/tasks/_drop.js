function drop(array, doropNum = 1) {
    if (!array.length || typeof doropNum != 'number') return []
    for (let i = 0; i < doropNum; i++) {
        array.shift()
    }
    return array
}

module.exports = drop