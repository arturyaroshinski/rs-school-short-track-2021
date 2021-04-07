/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const str1 = s1.split('');
  let str2 = s2.slice();

  str1.forEach((c) => {
    if (str2.indexOf(c) > -1) {
      count++;
      str2 = str2.replace(c, '');
    }
  });

  return count;
}

module.exports = getCommonCharacterCount;
