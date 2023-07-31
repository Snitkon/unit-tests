const {slice, comparison} = require('./accessoryFunctions')


function dropWhile(array, predicate) {
    switch(typeof predicate) {
        case 'function':
            for(let i = 0; i < array.length; i++) {
                if(!predicate(array[i])) {
                    const end = array.length
                    return slice(array, i, end)
                }
            }
        break

        case 'object':
            if (Array.isArray(predicate)) {
                for (let i = 0; i < array.length; i++) {
                  if (!array[i][predicate[0]] === predicate[1]){
                      const end = array.length
                      return slice(array, i, end);
                    }
                }
            } else {
                for (let i = 0; i < array.length; i++) {
                  if (!comparison(array[i], predicate)){
                    const end = array.length
                    return slice(array, i, end);
                  }
                }
            }
        break

        case 'string':
          for(let i = 0; i < array.length; i++) {
            if(!array[i][predicate]) {
              const end = array.length
              return slice(array, i, end)
            }
          }
        break

        default:
          return array

    }
}


module.exports = dropWhile