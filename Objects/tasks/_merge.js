function merge(object, ...sources) {
    const length = sources.length
    for(let i = 0; i < length; i++) {
        const obj = sources[i]
        const keys = Object.keys(obj)
        for(const key of keys) {
            const item = obj[key]
            if((Object.hasOwnProperty(object, key)) || (typeof item != 'object')) {
                object[key] = obj[key]
            } else {
                merge(object[key], obj[key])
            }
        }
    }
    return object
}


module.exports = merge