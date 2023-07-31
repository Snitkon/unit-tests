function omit(object, path) {
    if(!path) return object
    const res = {}
    for(item in object) {
        let check = false
        for(let i = 0; i < path.length; i++) {
            if(path[i] === item) {
               check = true
            }
        }
        if(!check) {
            res[item] = object[item]
        }
    }
    return res
}

module.exports = omit