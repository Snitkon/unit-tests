function includes(collection, value, fromIndex = 0) {
    let result
    switch (typeof collection) {
        case 'string':
            result = collection.includes(value, fromIndex)
            break;
        case 'object':
            if(Array.isArray(collection)) {
                result = collection.includes(value, fromIndex)
            }  else {
                const values = Object.values(collection)
                result = values.includes(value, fromIndex)
            }
            break
        default:
            break;
    }
    return result
}

module.exports = includes