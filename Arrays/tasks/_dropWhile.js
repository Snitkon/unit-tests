function dropWhile(array, predicat) {
    switch(typeof predicat) {
        case 'function':
            for(let i = 0; i < array.length; i++) {
                 function predicat(array) {
                    const item = array[i]
                        if(!item.active) {
                            array.shift()
                        }
                }
                return array
            }
            break
    }
}

module.exports = dropWhile