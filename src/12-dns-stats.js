/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  for (let i = 0; i < domains.length; i++) {
    const splited = domains[i].split('.');
    let str = '';

    for (let k = splited.length - 1; k >= 0; k--) {
      str += `.${splited[k]}`;
      if (!result[str]) result[str] = 1;
      else result[str]++;
    }
  }

  return result;
}

module.exports = getDNSStats;
