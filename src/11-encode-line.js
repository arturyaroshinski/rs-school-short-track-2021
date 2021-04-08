/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let prev = str[0];
  let count = 1;
  let encoded = '';

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === prev) {
      count++;
    } else {
      count = count === 1 ? '' : count;
      encoded += count + prev;
      prev = arr[i];
      count = 1;
    }
  }

  return encoded;
}

module.exports = encodeLine;
