function map(collection, iteratee) {
    let result = []
    switch(typeof iteratee) {
        case 'string':
            result = []
            for(item of collection) {
                const value = item[iteratee]
                result.push(value)
            }
            break

        case 'function':
            if(Array.isArray(collection)) {
                result = collection.map((item) => iteratee(item))
            } else {
                const values = Object.values(collection)
                result = values.map((item) => iteratee(item))
            }
            break

        default:
            result
            break
        }
    return result
}

module.exports = map