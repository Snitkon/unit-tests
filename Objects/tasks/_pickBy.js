function pickBy(object, predicate) {
        const result = {};
    if ((object === null) ||(typeof object !== 'object') || (!predicate)) {
        return result;
    }

    for (const item in object) {
        if (predicate(object[item])) {
            result[item] = object[item];
        }
    }

    return result;
}

module.exports = pickBy