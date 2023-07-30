const { comparison } = require('./accessoryFunctions')

function find(collection, predicate, fromIndex = 0) {
    let newResult
    switch(typeof predicate) {
        case 'function':
            for(let i = fromIndex; i < collection.length; i++) {
                if (predicate(collection[i])) {
                    newResult = collection[i]
                    return newResult
                }
            }
        break

        case 'object':
            if(Array.isArray(predicate)) {
                const key = predicate[0]
                const value = predicate[1]
                for(let i = fromIndex; i < collection.length; i++) {
                    if(collection[i][key] === value) {
                        newResult = collection[i]
                    }
                }
            } else {
                for(let i = fromIndex; i < collection.length; i++) {
                    if(comparison(collection[i], predicate)) {
                        newResult = collection[i]
                    }
                }
            }
        break

        case 'string':
                for (let i = fromIndex; i < collection.length; i++) {
                    if (collection[i][predicate]) {
                         newResult = collection[i];
                         return newResult
                    }
            }
        break

        default:
            newResult = undefined
        }
return newResult
}

module.exports = find