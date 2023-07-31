function compact(array) {
    const new_array = array.filter((item) => !!item != false)
    return new_array
}

module.exports = compact