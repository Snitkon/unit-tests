function toPairs(object) {
    if (object === null || typeof object !== 'object' ) return [];

    const pairs = Object.entries(object)
    return pairs
}

module.exports = toPairs