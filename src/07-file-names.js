/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function pushIfNotExist(arr, element) {
  if (!arr.includes(element)) {
    arr.push(element);
    return true;
  }

  return false;
}

function renameFiles(names) {
  const result = [];
  names.forEach((name) => {
    let count = 0;
    let n = name;

    while (!pushIfNotExist(result, n)) {
      count++;
      n = `${name}(${count})`;
    }
  });

  return result;
}

module.exports = renameFiles;
