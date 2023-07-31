function pick(object, path) {
    if(!path) return {}
    const res = {}
    for(item in object) {
        let check = false
        for(let i = 0; i < path.length; i++) {
            if(path[i] === item) {
               check = true
            }
        }
        if(check) {
            res[item] = object[item]
        }
    }
    return res
}

module.exports = pick
