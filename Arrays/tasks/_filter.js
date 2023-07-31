const { comparison } = require('./accessoryFunctions')

function filter(array, predicate) {
    let newArray = []
    switch(typeof predicate) {
        case 'function':
            for(let i = 0; i < array.length; i++) {
                if (predicate(array[i])) {
                    const lengthNewArr = newArray.length
                    newArray[lengthNewArr] = array[i]
                    return newArray
                }
            }
        break

        case 'object':
            if(Array.isArray(predicate)) {
                const key = predicate[0]
                const value = predicate[1]
                for(let i = 0; i < array.length; i++) {
                    if(array[i][key] === value) {
                        const lengthNewArr = newArray.length
                        newArray[lengthNewArr] = array[i]
                    }
                }
            } else {
                for(let i = 0; i < array.length; i++) {
                    if(comparison(array[i], predicate)) {
                        const lengthNewArr = newArray.length
                        newArray[lengthNewArr] = array[i]
                    }
                }
            }
        break

        case 'string':
                for (let i = 0; i < array.length; i++) {
                    if (array[i][predicate]) {
                        const lengthNewArr = newArray.length
                        newArray[lengthNewArr] = array[i];
                    }
            }
            break

        default:
            newArray = [...array]
        }
return newArray
}

module.exports = filter