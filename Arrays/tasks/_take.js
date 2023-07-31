function take(array, quantity = 1) {
    const result = []
    const end = array.length + 1
    if ((quantity >= end)) return array
    if(!quantity) return []
    for (let i = 0; i < quantity; i++) {
        const item = array.shift()
        result.push(item)
    }
    return result
}

module.exports = take

