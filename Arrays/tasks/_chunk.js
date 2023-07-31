function chunk(array, size = 1) {
  if (size === 0 || size === undefined || size >= array.length)  return array

  const result = [];

  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

module.exports = chunk
